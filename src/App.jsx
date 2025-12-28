import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Timeline from './pages/Timeline.jsx'
import './App.css'

import Story201415_1 from './pages/Story201415_1.jsx'
import Story2020_1 from './pages/Story2020_1.jsx'
import Story2019_1 from './pages/Story2019_1.jsx'
import Story2023_1 from './pages/Story2023_1.jsx'
import Story2023_2 from './pages/Story2023_2.jsx'
import Story2023_3 from './pages/Story2023_3.jsx'
import Story2020_2 from './pages/Story2020_2.jsx'
import Story2020_3 from './pages/Story2020_3.jsx'
import Story2023_4 from './pages/Story2023_4.jsx'
import Story2017_1 from './pages/Story2017_1.jsx'
import Story2024_1 from './pages/Story2024_1.jsx'
import Story2018_1 from './pages/Story2018_1.jsx'
import Story2024_2 from './pages/Story2024_2.jsx'
import Story2023_5 from './pages/Story2023_5.jsx'
import Story2024_3 from './pages/Story2024_3.jsx'
import Story2022_1 from './pages/Story2022_1.jsx'
import Story2024_4 from './pages/Story2024_4.jsx'
import Story2025_1 from './pages/Story2025_1.jsx'
import Story2017_2 from './pages/Story2017_2.jsx'
import Story2025_2 from './pages/Story2025_2.jsx'
import Story2025_3 from './pages/Story2025_3.jsx'
import Story2025_4 from './pages/Story2025_4.jsx'
import Story2023_6 from './pages/Story2023_6.jsx'
import Story2024_5 from './pages/Story2024_5.jsx'
import Prestory from './pages/Prestory.jsx'

import PreJudgment from './pages/PreJudgment.jsx'
import Judgment_1 from './pages/Judgment_1.jsx'
import Judgment_2 from './pages/Judgment_2.jsx'
import Judgment_3 from './pages/Judgment_3.jsx'
import Judgment_4 from './pages/Judgment_4.jsx'

import Report from './pages/Report.jsx'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/201415_1" element={<Story201415_1 />} />
        <Route path="/2020_1" element={<Story2020_1 />} />
        <Route path="/2019_1" element={<Story2019_1 />} />
        <Route path="/2023_1" element={<Story2023_1 />} />
        <Route path="/2023_2" element={<Story2023_2 />} />
        <Route path="/2023_3" element={<Story2023_3 />} />
        <Route path="/2020_2" element={<Story2020_2 />} />
        <Route path="/2020_3" element={<Story2020_3 />} />
        <Route path="/2023_4" element={<Story2023_4 />} />
        <Route path="/2017_1" element={<Story2017_1 />} />
        <Route path="/2024_1" element={<Story2024_1 />} />
        <Route path="/2018_1" element={<Story2018_1 />} />
        <Route path="/2024_2" element={<Story2024_2 />} />
        <Route path="/2023_5" element={<Story2023_5 />} />
        <Route path="/2024_3" element={<Story2024_3 />} />
        <Route path="/2022_1" element={<Story2022_1 />} />
        <Route path="/2024_4" element={<Story2024_4 />} />
        <Route path="/2025_1" element={<Story2025_1 />} />
        <Route path="/2017_2" element={<Story2017_2 />} />
        <Route path="/2025_2" element={<Story2025_2 />} />
        <Route path="/2025_3" element={<Story2025_3 />} />
        <Route path="/2023_6" element={<Story2023_6 />} />
        <Route path="/2025_4" element={<Story2025_4 />} />
        <Route path="/2024_5" element={<Story2024_5 />} />
        <Route path="/pre_story" element={<Prestory />} />
        <Route path="/judgment_1" element={<Judgment_1 />} />
        <Route path="/judgment_2" element={<Judgment_2 />} />
        <Route path="/judgment_3" element={<Judgment_3 />} />
        <Route path="/judgment_4" element={<Judgment_4 />} />
        <Route path="/pre_judgment" element={<PreJudgment />} />
        <Route path="/report" element={<Report />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
