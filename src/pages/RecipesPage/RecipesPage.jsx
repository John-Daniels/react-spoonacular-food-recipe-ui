import React, { useState, useEffect } from "react"
import "./RecipesPage.css"
import recipeStore from "../../Store/recipes"
import RecipeCard from "../../components/widgets/RecipeCard"
import { SPOONACULAR_API_KEY } from "../../constants"

const RecipesPage = () => {
  const [recipes, setRecipes] = useState(null)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    // setRecipes(recipeStore)

    fetch(
      `https://api.spoonacular.com/recipes/random?number=20&apiKey=${SPOONACULAR_API_KEY}`
    )
      .then((data) => {
        data.json().then((data) => {
          setRecipes(data.recipes)
        })
      })
      .catch(() => {
        const _recipe = recipeStore.slice(0, 4)
        setRecipes(_recipe)
      })
  }

  return (
    <div className='app__recipes app__flex flex-col pt-[10rem] w-full'>
      <div className='mt-2 w-full app__flex flex-wrap gap-8'>
        {recipes &&
          recipes.map((recipe, index) => (
            <RecipeCard recipe={recipe} key={index} />
          ))}
      </div>
    </div>
  )
}

export default RecipesPage
