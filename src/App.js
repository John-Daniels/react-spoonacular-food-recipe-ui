import React from "react"
import HomePage from "./pages/HomePage/HomePage"
import Navbar from "./components/Navbar/Navbar"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import RecipesPage from "./pages/RecipesPage/RecipesPage"

function App() {
  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/recipes' element={<RecipesPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
