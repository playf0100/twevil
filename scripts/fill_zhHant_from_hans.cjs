const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, '..', 'src', 'i18n.jsx')
let txt = fs.readFileSync(filePath, 'utf8')

function findBlockStart(locale) {
  const idx = txt.indexOf(`'${locale}':`)
  if (idx === -1) return -1
  const storiesIdx = txt.indexOf('stories:', idx)
  if (storiesIdx === -1) return -1
  return storiesIdx
}

function extractBlock(openIdx) {
  if (openIdx === -1) return null
  let i = openIdx
  let depth = 0
  for (; i < txt.length; i++) {
    if (txt[i] === '{') depth++
    else if (txt[i] === '}') depth--
    if (depth === 0) break
  }
  return txt.slice(openIdx, i + 1)
}

function extractStoryObjects(block) {
  // crude extraction: find top-level keys like '2020_1': { ... }
  const objs = {}
  let i = 0
  while (i < block.length) {
    const keyMatch = block.slice(i).match(/['"](\d{4}_\d+)['"]\s*:\s*{/) 
    if (!keyMatch) break
    const key = keyMatch[1]
    const keyPos = i + keyMatch.index
    const braceOpen = block.indexOf('{', keyPos + keyMatch[0].length - 1)
    if (braceOpen === -1) break
    // find matching brace
    let j = braceOpen
    let depth = 0
    for (; j < block.length; j++) {
      if (block[j] === '{') depth++
      else if (block[j] === '}') depth--
      if (depth === 0) break
    }
    const objText = block.slice(keyPos, j + 1)
    objs[key] = objText
    i = j + 1
  }
  return objs
}

const hansStoriesIdx = findBlockStart('zh-Hans')
const hansOpen = txt.indexOf('{', hansStoriesIdx)
const hansBlock = extractBlock(hansOpen)
const hansStoriesMatch = hansBlock && hansBlock.match(/({[\s\S]*})/)
if (!hansStoriesMatch) {
  console.error('Could not find zh-Hans stories block')
  process.exit(1)
}
const hansStoriesBlock = hansStoriesMatch[1]

const hantStoriesIdx = findBlockStart('zh-Hant')
const hantOpen = txt.indexOf('{', hantStoriesIdx)
const hantBlock = extractBlock(hantOpen)
const hantStoriesMatch = hantBlock && hantBlock.match(/({[\s\S]*})/)
if (!hantStoriesMatch) {
  console.error('Could not find zh-Hant stories block')
  process.exit(1)
}
const hantStoriesBlock = hantStoriesMatch[1]

const hansObjs = extractStoryObjects(hansStoriesBlock)
const hantObjs = extractStoryObjects(hantStoriesBlock)

const hansKeys = Object.keys(hansObjs)
const hantKeys = Object.keys(hantObjs)

const missing = hansKeys.filter(k => !hantKeys.includes(k))
if (missing.length === 0) {
  console.log('No missing keys to copy.')
  process.exit(0)
}

console.log('Missing keys to add to zh-Hant:', missing.join(', '))

// Build new hant stories block by inserting the missing objects before the final closing brace
let newHantStories = hantStoriesBlock.trim()
// remove trailing '}' if present
if (newHantStories.endsWith('}')) {
  newHantStories = newHantStories.slice(0, -1)
}

for (const k of missing) {
  const obj = hansObjs[k]
  if (obj) {
    // ensure comma separation
    newHantStories += ',\n      ' + obj.trim()
  }
}

newHantStories += '\n    }'

// replace the old hant stories block in the file text
const oldHantStoriesFull = hantStoriesMatch[0]
txt = txt.replace(oldHantStoriesFull, 'stories: ' + newHantStories)

fs.writeFileSync(filePath, txt, 'utf8')
console.log('Patched', missing.length, 'entries into', filePath)

process.exit(0)
