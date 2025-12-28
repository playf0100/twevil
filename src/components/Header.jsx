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
        // If a slicknav menu was created earlier (before React mounted) it can
        // appear as a duplicate/ghost. Remove stale instances unless this
        // #main-menu already has the plugin attached.
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
                    <a href="/">主頁</a>
                  </li>

                  <li>
                    <Link to="/timeline">時間軸</Link>
                  </li>

                  <li className="menu-item-has-children">
                    <a href="#">受害者故事</a>
                    <ul className="sub-menu">

                      <li className="menu-item-has-children">
                        <a href="pre_story">受害者故事前言</a>
                      </li>

                      <li className="menu-item-has-children">
                        <a href="#">2014 - 15</a>
                        <ul className="sub-menu">
                          <li><a href="201415_1">下咒女</a></li>
                        </ul>
                      </li>

                      <li className="menu-item-has-children">
                        <a href="#">2017</a>
                        <ul className="sub-menu">
                          <li><a href="2017_1">設計系學生</a></li>
                          <li><a href="2017_2">知名運動女神</a></li>
                        </ul>
                      </li>

                      <li className="menu-item-has-children">
                        <a href="#">2018</a>
                        <ul className="sub-menu">
                          <li><a href="2018_1">紅鶴姐姐</a></li>
                        </ul>
                      </li>

                      <li className="menu-item-has-children">
                        <a href="#">2019</a>
                        <ul className="sub-menu">
                          <li><a href="2019_1">遊戲女</a></li>
                          <li><a href="2020_3">虛假前妻</a></li>
                        </ul>
                      </li>

                      <li className="menu-item-has-children">
                        <a href="#">2020</a>
                        <ul className="sub-menu">
                            <li><a href="2020_1">小後苑女</a></li>
                            <li><a href="2020_2">茶葉蛋女</a></li>
                        </ul>
                      </li>

                      <li className="menu-item-has-children">
                        <a href="#">2022</a>
                        <ul className="sub-menu">
                            <li><a href="2022_1">假表妹</a></li>
                        </ul>
                      </li>

                      <li className="menu-item-has-children">
                        <a href="#">2023</a>
                        <ul className="sub-menu">
                          <li><a href="2023_1">被搶家女</a></li>
                          <li><a href="2023_4">投資男</a></li>
                          <li><a href="2023_6">健身房女A</a></li>
                          <li><a href="2023_5">健身房女B</a></li>
                          <li><a href="2023_2">健身房女C</a></li>
                          <li><a href="2023_3">健身房同事</a></li>
                        </ul>
                      </li>

                      <li className="menu-item-has-children">
                        <a href="#">2024</a>
                        <ul className="sub-menu">
                          <li><a href="2024_3">PTT吃飯群 投資詐騙女</a></li>
                          <li><a href="2024_4">PTT吃飯群 代訂私廚男</a></li>
                          <li><a href="2024_1">精品女</a></li>
                          <li><a href="2024_2">德州朋友群</a></li>
                          <li><a href="2024_5">紅髮艾德女</a></li>
                        </ul>
                      </li>

                      <li className="menu-item-has-children">
                        <a href="#">2025</a>
                        <ul className="sub-menu">
                          <li><a href="2025_2">搬家女</a></li>
                          <li><a href="2025_4">400萬女</a></li>
                          <li><a href="2025_1">歐洲男</a></li>
                          <li><a href="2025_3">成都女</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li className="menu-item-has-children">
                    <a href="category-masonry.html">犯罪紀錄判決書</a>
                    <ul className="sub-menu">
                      <li><a href="pre_judgment">判決書前言</a></li>
                      <li><a href="judgment_1">逃兵役被關兩月</a></li>
                      <li><a href="judgment_2">詐欺被判關一年兩個月</a></li>
                      <li><a href="judgment_3">詐欺撤銷緩刑確定入獄</a></li>
                      <li><a href="judgment_4">起訴中案件 即將通緝</a></li>
                    </ul>
                  </li>

                  <li><a href="report">性病報告</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
