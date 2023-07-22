import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams, Link } from "react-router-dom"

import Loading from "../components/Loading"

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading,setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  const fetchCocktail = async () => {
    setLoading(true);
    try {
      
      const {data:{drinks}} = await axios(`${url}${id}`)
      
      if(drinks) {

        const {
          strDrink:name,
          strDrinkThumb:image,
          strAlcoholic:info,
          strCategory:category,
          strGlass: glass,
          strInstructions: instructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = drinks[0]

        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ]

        const newCocktails = {
          name,image,info,category,glass,instructions,ingredients
        }

        setCocktail(newCocktails)

        setLoading(false)
      } else {
        setCocktail(null)
      }

    } catch (error) {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCocktail()
  }, [id])

  if(loading) {
    return (
      <Loading/>
    )
  }

  if(!cocktail) {
    return <h2> no cocktail to display </h2>
  }

   const { name, glass, image, info, ingredients, instructions, category } = cocktail

  return (
    <section className="mt-20 flex flex-col p-3 items-center justify-center lg:w-[50%] mx-auto">
      <Link to='/' className="p-1 bg-green-500 rounded-md text-yellow-50 hover:text-green-600 hover:bg-slate-100 shadow-lg">Back home</Link>
      <h1 className="my-5 font-semibold tracking-widest">{name}</h1>
      <div className="my-5 mx-auto w-[90%]  flex flex-col justify-center items-center px-3">
        <img src={image} alt={name} className='rounded-full h-[200px] w-[200px] shadow-2xl shadow-gray-500 lg:w-[300px] lg:h-[300px] object-cover'/>
        <div className="my-10 ml-1">
          <p className="my-5">
            <span className="bg-green-600 text-white p-1 rounded-md mx-2">name :</span> {name}
          </p>
          <p className="my-5">
            <span className="bg-green-600 text-white p-1 rounded-md mx-2">category :</span> {category}
          </p>
          <p className="my-5">
            <span className="bg-green-600 text-white p-1 rounded-md mx-2">info :</span> {info}
          </p>
          <p className="my-5">
            <span className="bg-green-600 text-white p-1 rounded-md mx-2">info :</span> {glass}
          </p>
          <p className="my-5 leading-7">
            <span className="bg-green-600 text-white p-1 rounded-md mx-2">instructions :</span> {instructions}
          </p>
          <p className="my-5 [word-spacing:10px] leading-7">
            <span className="bg-green-600 text-white p-1 rounded-md mx-2">ingredients :</span> {ingredients.map((item,index) => item? <span className="[word-spacing:10px]" key={index}>{item}</span> : null )}
          </p>
        </div>
      </div>
    </section>
  )
}

export default SingleCocktail
