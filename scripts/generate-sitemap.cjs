const fs = require('fs')
const path = require('path')

// Try to parse routes from src/App.jsx; fallback to a static list
const appPath = path.join(__dirname, '..', 'src', 'App.jsx')
let routes = []

if (fs.existsSync(appPath)) {
  const content = fs.readFileSync(appPath, 'utf8')
  // naive regex to find Route path="/..."
  const re = /<Route\s+path\s*=\s*\"([^\"]+)\"/g
  let m
  while ((m = re.exec(content))) {
    const p = m[1]
    if (p && p.indexOf(':') === -1) routes.push(p)
  }
}

if (routes.length === 0) {
  routes = ['/', '/timeline', '/201415_1', '/2020_1', '/2019_1', '/2023_1', '/2023_2']
}

// Allow overriding base url from env
const BASE = process.env.SITE_BASE_URL || 'https://example.com'

const urls = routes.map(r => {
  const loc = (r === '/') ? BASE + '/' : BASE.replace(/\/$/, '') + r
  return `  <url>\n    <loc>${loc}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>`
}).join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`

const outDir = path.join(__dirname, '..', 'public')
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })
fs.writeFileSync(path.join(outDir, 'sitemap.xml'), xml, 'utf8')
console.log('Wrote public/sitemap.xml with', routes.length, 'routes')
