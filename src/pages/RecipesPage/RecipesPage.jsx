import React, { useState, useEffect } from "react"
import "./RecipesPage.css"
import recipeStore from "../../Store/recipes"
import RecipeCard from "../../components/widgets/RecipeCard"
import { SPOONACULAR_API_KEY } from "../../constants"
import { useSearchParams } from "react-router-dom"

const RecipesPage = () => {
  const [search] = useSearchParams()
  const query = search.get("query")

  const [recipes, setRecipes] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(fetchData, 2000)
  }, [query])

  const fetchData = () => {
    // setRecipes(recipeStore)
    setLoading(true)

    if (query) {
      return fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${query}&addRecipeInformation=true&instructionsRequired=true&apiKey=${SPOONACULAR_API_KEY}`
      )
        .then((data) => {
          data.json().then((data) => {
            if (data.results) {
              setRecipes(data.results)
              setLoading(false)
            }
          })
        })
        .catch(() => {
          // const _recipe = recipeStore.slice(0, 4)
          // setRecipes(_recipe)
        })
    }

    fetch(
      `https://api.spoonacular.com/recipes/random?number=20&apiKey=${SPOONACULAR_API_KEY}`
    )
      .then((data) => {
        data.json().then((data) => {
          if (data.recipes) {
            setRecipes(data.recipes)
            setLoading(false)
          }
        })
      })
      .catch(() => {
        const _recipe = recipeStore.slice(0, 4)
        setRecipes(_recipe) // fallback to our recipe store
      })
  }

  return (
    <div className='app__recipes app__flex flex-col pt-[10rem] w-full'>
      {loading && <h1>Loading...</h1>}

      {!loading && recipes.length === 0 && (
        <h1>
          Couldn't find a recipe named{" "}
          <span className='bg-red-400 rounded-full px-2 py-1 text-white'>
            {query}
          </span>
        </h1>
      )}

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
