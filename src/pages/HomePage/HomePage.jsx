import React, { useState } from "react"
import LandingPage from "../../components/LandingPage/LandingPage"
import Recipes from "../../components/Recipes/Recipes"
import Footer from "../../components/Footer/Footer"

const HomePage = () => {
  const [search, setSearch] = useState("")

  return (
    <div>
      <LandingPage />
      <Recipes />
      <Footer />
    </div>
  )
}

export default HomePage
