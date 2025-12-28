import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { I18nProvider } from './i18n.jsx'

createRoot(document.getElementById('root')).render(
  <HashRouter basename="/twevil">
    <I18nProvider defaultLang="zh-Hans">
      <App />
    </I18nProvider>
  </HashRouter>,
)
