import React from 'react'
import { useTranslation } from '../i18n'

export default function PreJudgment() {
    const { t } = useTranslation()
        const content = t('stories.pre_judgment.content') || []
    
          return (
        <main className="container-fluid">
          <div className="container">
            <section className="primary margin-15">
              <div className="row">
                <div className="col-12">
                  <article className="story-article hero section_margin line_hoz">
                    <header className="story-header">
                      <h1 className="tagline story_title">{t('stories.pre_judgment.title')}</h1>
                    </header>
    
                    <div className="story-content">
                      {Array.isArray(content)
                        ? content.map((p, i) => <p key={i}>{p}</p>)
                        : <p>{content}</p>
                      }
                    </div>
                  </article>
                </div>
              </div>
            </section>
          </div>
        </main>
      )
}