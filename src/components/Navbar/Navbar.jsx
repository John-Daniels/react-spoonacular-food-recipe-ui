import React, { useState } from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"
import { BiSearchAlt } from "react-icons/bi"
import { GiHamburgerMenu } from "react-icons/gi"
import { useNavigate } from "react-router-dom"

const Navbar = () => {
  const navigate = useNavigate()

  const [search, setSearch] = useState("koder")

  const handleChange = (e) => setSearch(e.target.value)

  const searchQuery = (e) => {
    e.preventDefault()
    navigateToSearchQuery(search)
  }

  const navigateToSearchQuery = (query) => {
    if (query) {
      navigate(`/recipes?query=${query}`)
    }
  }

  return (
    <div className='app__navbar flex p-6 lg:pl-[5rem] justify-between items-center w-full z-10'>
      <div className='flex items-center justify-between gap-10'>
        {/* brand name */}
        <h1 className='text-[1.4rem] font-base sm:text-[2rem]'>
          HOT<span className='text-green-600'>RECIPE</span>
        </h1>

        {/* links */}
        <ul className='hidden links flex md:flex'>
          {[
            { name: "Home", link: "/" },
            { name: "Recipes", link: "/recipes" },
            { name: "Your liked recipes", link: "/recipes?liked=true" },
          ].map(({ name, link }, index) => (
            <Link key={index} to={link}>
              <li className='mx-4 truncate'>{name}</li>
            </Link>
          ))}
        </ul>
      </div>

      {/* search bar */}

      {/*  mobile */}
      <button className='md:hidden'>
        <GiHamburgerMenu className='w-6 h-7 fill-current' />
      </button>

      {/* desktop */}
      <form
        className='pt-2 relative ml-3 text-gray-600 flex-4 hidden md:block'
        onSubmit={searchQuery}
      >
        <input
          className='border-1 border-gray-300 bg-white h-[50px] pl-10 rounded-lg text-sm focus:outline-none'
          type='search'
          name='search'
          placeholder='Search'
          value={search}
          onChange={handleChange}
        />
        <button type='submit' className='search-button'>
          <BiSearchAlt className='text-gray-600 h-6 w-6 fill-current' />
        </button>
      </form>
    </div>
  )
}

export default Navbar
