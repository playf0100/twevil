import React from 'react'
import { useTranslation } from '../i18n'

export default function Judgment_3() {
    const { t, lang, setLang } = useTranslation()

        const html = `
<div class="text-pre text-pre-in">劉宇軒因2024年詐騙PTT群友被集體提告詐欺被起訴，後因自知在劫難逃，又因是二次詐欺犯案會加重刑責，於2025年6月潛逃出境，拘提二次未到，2026年1月正式發布通緝，展開了兩岸的逃亡生涯，劉宇軒只要一入境台灣就會被逮補，所以他逃亡中國不敢回台接受審判。
</div>
`

const htmlSC = `
<div class="text-pre text-pre-in">刘宇轩因2024年诈骗PTT群友被集体提告诈欺被起诉，后因自知在劫难逃，又因是二次诈欺犯案会加重刑责，于2025年6月潜逃出境，拘提二次未到，2026年1月正式发布通缉，展开了两岸的逃亡生涯，刘宇轩只要一入境台湾就会被逮补，所以他逃亡中国不敢回台接受审判。
</div>
`

const selectedHtml = lang === 'zh-Hans' ? htmlSC : html

    return (
        <div style={{textAlign: 'center'}} className="container my-4">
            <div style={{ overflowX: 'auto' }}>
                <div style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', textAlign: 'center' }} dangerouslySetInnerHTML={{ __html: selectedHtml }} />
            </div>
            <div className="item">
                    <figure className="alith_post_thumb_big">
                      <video controls style={{ maxWidth: '100%', height: 'auto' }}>
                        <source src="/twevil/assets/images/storys/j4/4.mov" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </figure>
                    <h2>{t('playVideo')}</h2>
                  </div>
            <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/j4/1.JPG" alt="story 1" /></a></figure></div>
            <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/j4/2.JPG" alt="story 2" /></a></figure></div>
            <div className="item"><figure className="alith_post_thumb_big"><a href="#"><img src="/twevil/assets/images/storys/j4/3.JPG" alt="story 3" /></a></figure></div>
        </div>
    )
}