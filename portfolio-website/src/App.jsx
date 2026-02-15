import { useState } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Services from './pages/Services'
import { Route, Routes } from 'react-router-dom'
import CaseOne from './components/CaseOne'
import CaseTwo from './components/CaseTwo'

function App() {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />

        {/* CASE PAGE */}
        <Route path="/portfolio/case-one" element={<CaseOne />} />
        <Route path="/portfolio/case-two" element={<CaseTwo />} />
      </Routes>
    </div>
  )
}

export default App
