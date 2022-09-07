import React, { useEffect, useState } from "react"
import { SPOONACULAR_API_KEY } from "../../constants"
import recipeStore from "../../Store/recipes"
import RecipeCard from "../widgets/RecipeCard"
import "./Recipes.css"

function Recipes() {
  const [recipes, setRecipes] = useState(null)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/random?number=20?apiKey=${SPOONACULAR_API_KEY}`
    )
    console.log(data)

    const _recipe = recipeStore.slice(0, 4)
    setRecipes(_recipe)
  }

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
        {recipes &&
          recipes.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} />
          ))}
      </div>
    </div>
  )
}

export default Recipes
