import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from '../i18n.jsx'

export default function Header() {
  
  const { lang, setLang, t } = useTranslation()

  // Ensure slicknav is initialized after React renders the nav markup.
  useEffect(() => {
    try {
      const $ = window.jQuery || window.$
      if ($ && $.fn && typeof $.fn.slicknav === 'function') {
        const el = $('#main-menu')
        const existing = $('.slicknav_menu')
        if (existing.length && !el.data('plugin_slicknav')) {
          existing.remove()
          $('.slicknav_btn').remove()
        }

        if (el.length && !el.data('plugin_slicknav')) {
          el.slicknav({
            label: 'MENU',
            duration: 150,
            allowParentLinks: true,
            prependTo: '#nav',
          })
        }
      }
    } catch (e) {
      // ignore — fail safe if jQuery isn't available yet
    }
  }, [])

  function useClock() {
    const [now, setNow] = useState(new Date())
    useEffect(() => {
      const id = setInterval(() => setNow(new Date()), 60_000)
      return () => clearInterval(id)
    }, [])
    return now
  }

  const now = useClock()
  const zhWeek = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
  const y = now.getFullYear()
  const m = now.getMonth() + 1
  const d = now.getDate()
  const w = zhWeek[now.getDay()]
  const dateStr = `${y}年${m}月${d}日 ${w}`

  return (
    <div className="header-area">
      <div className="container-fluid">
        <div className="container">
          <div className="top_bar margin-15">
            <div className="row">
              <div className="col-md-6 col-sm-12 time">
                <i className="fa fa-clock-o" />
                <span>{'\u00A0'}{'\u00A0'}{'\u00A0'}{dateStr}</span>
              </div>
              <div className="col-md-6 col-sm-12 language">
                <div className="lang-switch" aria-label="Language">
                  <button
                    type="button"
                    className={"btn-lang " + (lang === 'zh-Hant' ? 'active' : '')}
                    onClick={() => setLang('zh-Hant')}
                    title="繁體中文"
                  >
                    繁體中文
                  </button>
                  <button
                    type="button"
                    className={"btn-lang " + (lang === 'zh-Hans' ? 'active' : '')}
                    onClick={() => setLang('zh-Hans')}
                    title="简体中文"
                  >
                    简体中文
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 header">
              <h1 className="logo">
                <div>{t('logo')}</div>
              </h1>
                <p className="tagline">{t('tagline')}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="main-nav section_margin">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-12 main_nav_cover" id="nav">
                <ul id="main-menu">
                  <li>
                    {/* Changed <a> to <Link> */}
                    <Link to="/">主頁</Link>
                  </li>

                  <li>
                    <Link to="/timeline">時間軸</Link>
                  </li>

                  <li className="menu-item-has-children">
                    <a href="#">受害者故事</a>
                    <ul className="sub-menu">

                      <li className="menu-item-has-children">
                         {/* Changed to Link */}
                        <Link to="/pre_story">受害者故事前言</Link>
                      </li>

                      <li className="menu-item-has-children">
                        <a href="#">2014 - 15</a>
                        <ul className="sub-menu">
                          <li><Link to="/201415_1">下咒女</Link></li>
                        </ul>
                      </li>

                      <li className="menu-item-has-children">
                        <a href="#">2017</a>
                        <ul className="sub-menu">
                          <li><Link to="/2017_1">設計系學生</Link></li>
                          <li><Link to="/2017_2">知名運動女神</Link></li>
                        </ul>
                      </li>

                      <li className="menu-item-has-children">
                        <a href="#">2018</a>
                        <ul className="sub-menu">
                          <li><Link to="/2018_1">紅鶴姐姐</Link></li>
                        </ul>
                      </li>

                      <li className="menu-item-has-children">
                        <a href="#">2019</a>
                        <ul className="sub-menu">
                          <li><Link to="/2019_1">遊戲女</Link></li>
                          <li><Link to="/2020_3">虛假前妻</Link></li>
                        </ul>
                      </li>

                      <li className="menu-item-has-children">
                        <a href="#">2020</a>
                        <ul className="sub-menu">
                            <li><Link to="/2020_1">小後苑女</Link></li>
                            <li><Link to="/2020_2">茶葉蛋女</Link></li>
                        </ul>
                      </li>

                      <li className="menu-item-has-children">
                        <a href="#">2022</a>
                        <ul className="sub-menu">
                            <li><Link to="/2022_1">假表妹</Link></li>
                        </ul>
                      </li>

                      <li className="menu-item-has-children">
                        <a href="#">2023</a>
                        <ul className="sub-menu">
                          <li><Link to="/2023_1">被搶家女</Link></li>
                          <li><Link to="/2023_4">投資男</Link></li>
                          <li><Link to="/2023_6">健身房女A</Link></li>
                          <li><Link to="/2023_5">健身房女B</Link></li>
                          <li><Link to="/2023_2">健身房女C</Link></li>
                          <li><Link to="/2023_3">健身房同事</Link></li>
                        </ul>
                      </li>

                      <li className="menu-item-has-children">
                        <a href="#">2024</a>
                        <ul className="sub-menu">
                          <li><Link to="/2024_3">PTT吃飯群 投資詐騙女</Link></li>
                          <li><Link to="/2024_4">PTT吃飯群 代訂私廚男</Link></li>
                          <li><Link to="/2024_1">精品女</Link></li>
                          <li><Link to="/2024_2">德州朋友群</Link></li>
                          <li><Link to="/2024_5">紅髮艾德女</Link></li>
                        </ul>
                      </li>

                      <li className="menu-item-has-children">
                        <a href="#">2025</a>
                        <ul className="sub-menu">
                          <li><Link to="/2025_2">搬家女</Link></li>
                          <li><Link to="/2025_4">400萬女</Link></li>
                          <li><Link to="/2025_1">歐洲男</Link></li>
                          <li><Link to="/2025_3">成都女</Link></li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li className="menu-item-has-children">
                    <a href="#">犯罪紀錄判決書</a>
                    <ul className="sub-menu">
                      <li><Link to="/pre_judgment">判決書前言</Link></li>
                      <li><Link to="/judgment_1">逃兵役被關兩月</Link></li>
                      <li><Link to="/judgment_2">詐欺被判關一年兩個月</Link></li>
                      <li><Link to="/judgment_3">詐欺撤銷緩刑確定入獄</Link></li>
                      <li><Link to="/judgment_4">起訴中案件 即將通緝</Link></li>
                    </ul>
                  </li>

                  <li><Link to="/report">性病報告</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}