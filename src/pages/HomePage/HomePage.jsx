import React, { useState } from "react"
import LandingPage from "../LandingPage/LandingPage"
import Recipes from "../Recipes/Recipes"
import Navbar from "../../components/Navbar/Navbar"

const HomePage = () => {
  const [search, setSearch] = useState("")

  return (
    <div>
      <LandingPage />
      <Recipes />
    </div>
  )
}

export default HomePage
