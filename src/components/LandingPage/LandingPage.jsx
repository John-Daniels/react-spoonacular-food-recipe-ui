import React from "react"
import "./LandingPage.css"

import plateImg from "../../assets/images/ice-cream-plate.png"

const LandingPage = () => {
  return (
    // <div className='w-[100%] flex bg-white'>
    <div className='app__landing-page flex items-center justify-center gap-[12%] '>
      {/* big header */}
      <div className='text-center md:text-left flex flex-col gap-[18px] justify-center items-center md:items-start'>
        <h1 className='font-[700] text-[50px]'>
          Let's Start <br />
          Cooking with <br />
          Popular Recipes
        </h1>

        <span className='text-[300] text-gray-700 font-thin'>
          Want to learn to cook but confused how to start? <br />
          No need to worry again!
        </span>

        {/* button */}

        <button className='transition block bg-green-600 hover:bg-green-500 text-white font-[400] py-2 px-4 rounded w-[50%] '>
          Explore Recipes
        </button>
      </div>

      {/* image */}

      <div className='hidden md:block relative'>
        <img className='plate-img drop-shadow-2xl' src={plateImg} alt='plate' />

        {/* <div className='bg-white w-[120px] h-[120px] shadow-2xl absolute bottom-[-1rem] left-[-2rem]  lg:bottom-[2rem] lg:left-[2rem]'></div>

        <div className='bg-white w-[120px] h-[100px] shadow-2xl absolute bottom-[-2rem] right-[-2rem] lg:bottom-[0rem] lg:right-[1.5rem]'></div> */}
      </div>
    </div>
    // </div>
  )
}

export default LandingPage
