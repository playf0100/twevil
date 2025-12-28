import React from 'react'
import { useTranslation } from '../i18n.jsx'

export default function Timeline() {
  const { t } = useTranslation()

  const entries = [
    t('timeline.entries.e1'),
    t('timeline.entries.e2'),
    t('timeline.entries.e3'),
    t('timeline.entries.e4'),
    t('timeline.entries.e5'),
    t('timeline.entries.e6'),
    t('timeline.entries.e7'),
    t('timeline.entries.e8'),
  ]
  return (
    <>
    <main className="container py-3">
      <div className="alith_heading">
        <h2 className="alith_heading_patern_2">{t('timeline.heading')}</h2>
      </div>

      <div className="mt-10">
        <div className="vertical-timeline">

          {/* render entries in sequence; styling classes are still static (vt-left/vt-right/vt-black) */}
          {entries.map((entry, idx) => (
            <React.Fragment key={idx}>
              <div className={`vt-step ${idx % 2 === 0 ? 'vt-right' : 'vt-left'} vt-black`}>
                <div className="vt-column"></div>
              </div>
              <div className={`vt-step ${idx % 2 === 0 ? 'vt-right' : 'vt-left'} vt-black`}>
                <div className="vt-column">
                  <div className="vt-start-point"></div>
                  <div className="vt-end-point"></div>
                </div>
                <div className="vt-content">
                  <div className="vt-header">
                    <h2 className="vt-cat text-slate-400">{entry.cat}</h2>
                  </div>
                  <div className="vt-splitter">
                    <div className="vt-line"></div>
                    <div className="vt-icon">
                      <div className="vt-icon-wrap">
                      </div>
                    </div>
                  </div>
                  <div className="vt-body">
                    <h3 className="vt-title">{entry.title}</h3>
                    <p>{entry.body}</p>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
          {/* end entries */}
        </div>
      </div>
    </main>
    </>
  )
}
