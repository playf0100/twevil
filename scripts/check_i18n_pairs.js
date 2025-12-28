const fs = require('fs');
const path = require('path');

const filePath = process.argv[2] || path.join(__dirname, '..', 'src', 'i18n.jsx');
const txt = fs.readFileSync(filePath, 'utf8');

function extractStoriesBlock(locale) {
  const localeIndex = txt.indexOf(`'${locale}':`);
  if (localeIndex === -1) return null;
  const storiesIndex = txt.indexOf('stories:', localeIndex);
  if (storiesIndex === -1) return null;
  // find the opening { after stories:
  const openBrace = txt.indexOf('{', storiesIndex);
  if (openBrace === -1) return null;
  let i = openBrace;
  let depth = 0;
  for (; i < txt.length; i++) {
    if (txt[i] === '{') depth++;
    else if (txt[i] === '}') depth--;
    if (depth === 0) break;
  }
  if (i >= txt.length) return null;
  return txt.slice(openBrace, i + 1);
}

function extractKeys(block) {
  if (!block) return [];
  const re = /['"](\d{4}_\d+)['"]/g;
  const keys = new Set();
  let m;
  while ((m = re.exec(block)) !== null) {
    keys.add(m[1]);
  }
  return Array.from(keys).sort();
}

const hansBlock = extractStoriesBlock('zh-Hans');
const hantBlock = extractStoriesBlock('zh-Hant');
const hansKeys = extractKeys(hansBlock);
const hantKeys = extractKeys(hantBlock);

const onlyHans = hansKeys.filter(k => !hantKeys.includes(k));
const onlyHant = hantKeys.filter(k => !hansKeys.includes(k));

console.log('Checked file:', filePath);
console.log('Total zh-Hans story keys:', hansKeys.length);
console.log('Total zh-Hant story keys:', hantKeys.length);
console.log('Keys only in zh-Hans (missing in zh-Hant):', onlyHans.length ? onlyHans.join(', ') : '(none)');
console.log('Keys only in zh-Hant (missing in zh-Hans):', onlyHant.length ? onlyHant.join(', ') : '(none)');

// exit code 0
process.exit(0);
