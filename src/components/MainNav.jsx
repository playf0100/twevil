import React from 'react'

export default function MainNav() {
  const html = `
    <!-- PASTE your original MAIN NAV HTML here -->
    <!-- Make sure the Home tab uses href="/" and Timeline tab uses href="/timeline" -->
    <!-- Example:
    <div class="main-nav">
      <ul class="menu">
        <li><a href="/">主頁</a></li>
        <li><a href="/timeline">時間軸</a></li>
        ...
      </ul>
    </div>
    -->
  `

  // Intercept clicks on "/" and "/timeline" so React Router handles it (no full reload)
  const onClick = (e) => {
    const a = e.target.closest('a')
    if (!a) return
    const to = a.getAttribute('href')
    if (to && (to === '/' || to === '/timeline')) {
      e.preventDefault()
      window.history.pushState(null, '', to)
      window.dispatchEvent(new PopStateEvent('popstate'))
    }
  }

  return <div onClick={onClick} dangerouslySetInnerHTML={{ __html: html }} />
}
