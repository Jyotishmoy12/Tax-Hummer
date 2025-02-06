import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import AboutUsSection from './pages/AboutUsSection'
import GetStarted from './pages/GetStarted'
import ITRFiling from './pages/ITRFiling'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUsSection />} />
        <Route path ="/get-started" element={<GetStarted />} />
        <Route path="/itrfiling" element={<ITRFiling />} />
      </Routes>
    </Router>
  )
}

export default App