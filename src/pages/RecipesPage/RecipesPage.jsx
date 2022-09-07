import React, { useState, useEffect } from "react"
import "./RecipesPage.css"
import recipeStore from "../../Store/recipes"
import RecipeCard from "../../components/widgets/RecipeCard"

const RecipesPage = () => {
  const [recipes, setRecipes] = useState(null)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    setRecipes(recipeStore)
  }

  return (
    <div className='app__recipes app__flex flex-col pt-[10rem] w-full'>
      <div className='mt-2 w-full app__flex flex-wrap gap-4'>
        {recipes && recipes.map((recipe, index) => <RecipeCard recipe={recipe} key={index}/>)}
      </div>
    </div>
  )
}

export default RecipesPage
