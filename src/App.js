import React from "react"
import HomePage from "./pages/HomePage/HomePage"
import Navbar from "./components/Navbar/Navbar"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
