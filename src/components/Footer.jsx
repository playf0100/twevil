import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation, translations } from '../i18n.jsx'

export default function Footer() {
  const { t, lang } = useTranslation()

  const resolve = (key) => {
    const val = t(key)
    if (val && val !== key) return val
    // fallback to translations object using current lang
    try {
      const parts = key.split('.')
      const dict = translations[lang] || translations['zh-Hans']
      let cur = dict
      for (const p of parts) {
        if (!cur) break
        cur = cur[p]
      }
      return cur ?? key
    } catch (e) {
      return key
    }
  }

  const supportLines = resolve('footer.support_lines')
  const supportText = Array.isArray(supportLines) ? supportLines[0] : supportLines

  const shareLines = resolve('footer.share_lines')
  const shareText = Array.isArray(shareLines) ? shareLines[0] : shareLines

  const social = resolve('footer.social') || {}

  return (
    <div className="container-fluid alith_footer_right_reserved">
      <div className="container top">
        <div className="row">
          <div className="col-12 col-md-12 bottom-logo">
            {/*
<div className="tagline social">
  <ul>
    <li className="facebook">
      <a href="#" aria-label="facebook"><img src="/twevil/assets/images/dcard_icon.png" alt="Dcard" className="footer-social-icon" /></a>
    </li>
    <li className="twitter">
      <a href="#" aria-label="twitter"><i className="fa-brands fa-twitter" /></a>
    </li>
    <li className="google-plus">
      <a href="#" aria-label="google-plus"><i className="fa-brands fa-google-plus" /></a>
    </li>
    <li className="instagram">
      <a href="#" aria-label="threads"><i className="fa-brands fa-threads" /></a>
    </li>
  </ul>
</div>
*/}

          </div>
        </div>

        <div className="row">
          <div className="footer_social_area">
                <div className="col-12 col-md-12">
                  <div className="tagline social">
                    <a href="https://www.dcard.tw/f/relationship/p/259911816" target="_blank" rel="noopener noreferrer" title={social.dcard || 'Dcard'} aria-label={social.dcard || 'dcard'}>
                      <img src="/twevil/assets/images/dcard_icon.png" alt={social.dcard || 'Dcard'} className="footer-social-icon" />
                    </a>
                    <a href="https://www.xiaohongshu.com/user/profile/68af6192000000001a00e725" target="_blank" rel="noopener noreferrer" title={social.xiaohongshu || '小紅書'} aria-label={social.xiaohongshu || 'xiaohongshu'}>
                      <img src="/twevil/assets/images/XiaohongshuLOGO.png" alt={social.xiaohongshu || '小紅書'} className="footer-social-icon" />
                    </a>
                    <a href="https://www.threads.com/@foxsaysawawaw" target="_blank" rel="noopener noreferrer" title={social.threads || 'Threads'} aria-label={social.threads || 'threads'}>
                      <img src="/twevil/assets/images/threads-app-icon.png" alt={social.threads || 'Threads'} className="footer-social-icon" />
                    </a>
                  </div>
                </div>
              </div>
        </div>

      </div>
    </div>
  )
}
