import React from 'react'
import { useTranslation } from '../i18n.jsx'

export default function Home() {
  const { lang, t } = useTranslation()
  const sections = t('home.sections') || []
    const imageName = lang === 'zh-Hant' ? 'index_zh.jpg' : 'index_cn.jpg'
    const imageSrc = `/twevil/assets/images/${imageName}`
  
    return (
        <>
        <main className="container-fluid">
        <div className="container">
          <section className="primary margin-15">
            <div className="row">
              <div className="col-12">
                <article className="hero section_margin line_hoz">
                  <figure className="alith_post_thumb_big">
                    <span className="post_meta_categories_label">Legal， Blog</span>
                    <img
                      src={imageSrc}
                      alt="Hero" className="img-fluid" />
                  </figure>
  
                  <div className="alith_post_content_big">
                    <div className="row">
                      <div className="col-md-12 col-sm-12">
                        <div className="home-long-text">
                          {sections.map((s, idx) => (
                            <React.Fragment key={idx}>
                              <section className="home-section">
                                <h3>{s.heading}</h3>
                                {Array.isArray(s.content)
                                  ? s.content.map((p, i) => <p key={i}>{p}</p>)
                                  : <p>{s.content}</p>
                                }
                              </section>
                              {idx < sections.length - 1 && <hr />}
                            </React.Fragment>
                          ))}
                          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdy3prLnzGKjhtIdtj-tAvb4cALawJgyo9nTVsp-by8qt0YSg/viewform" target="_blank" rel="noopener noreferrer" className="contact-link">{t('home.contact_us')}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </section>
        </div>
      </main>
      </>
    )
}
