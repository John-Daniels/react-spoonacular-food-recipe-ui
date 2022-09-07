import React from "react"
import RecipeCard from "../widgets/RecipeCard"
import "./Recipes.css"

function Recipes() {
  return (
    <div className='app__recipe flex flex-col justify-center items-center text-center gap-[1.2rem]'>
      <h1 className='text-[1.4rem] font-base sm:text-[2rem]'>
        RECIPES YOU MAY LIKE
      </h1>

      <span className='text-[300] text-gray-700 font-thin'>
        Want to learn to cook but confused how to start? <br />
        No need to worry again!
      </span>

      <div className='w-[95%] mt-[4rem] mx-auto flex flex-wrap justify-center items-center gap-8'>
        {[1, 2, 3, 4].map((x) => (
          <RecipeCard key={x} />
        ))}
      </div>
    </div>
  )
}

export default Recipes
