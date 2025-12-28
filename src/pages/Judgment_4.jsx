import React from 'react'
import { useTranslation } from '../i18n'

export default function Judgment_3() {
    const { t, lang, setLang } = useTranslation()

        const html = `
<div class="text-pre text-pre-in">由於還在偵辦中 偵查不公開 無法提供起訴書 但已確定發布拘提 不日便會發布通緝
</div>
`

const htmlSC = `
<div class="text-pre text-pre-in">由于还在侦办中 侦查不公开 无法提供起诉书 但已确定发布拘提 不日便会发布通缉
</div>
`

const selectedHtml = lang === 'zh-Hans' ? htmlSC : html

    return (
        <div style={{textAlign: 'center'}} className="container my-4">
            <div style={{ overflowX: 'auto' }}>
                <div style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', textAlign: 'center' }} dangerouslySetInnerHTML={{ __html: selectedHtml }} />
            </div>
        </div>
    )
}