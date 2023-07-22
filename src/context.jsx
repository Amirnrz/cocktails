import { useContext, createContext, useState, useEffect } from "react";

import axios from "axios";

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [cocktails, setCocktails] = useState([]);

  const fetchData = async () => {
    setLoading(true)
    try {
      const { data:{drinks} } = await axios(`${url}${searchTerm}`)
      setLoading(false)

      if(drinks) {

        const newCocktails = drinks.map(item => {
          const {
            idDrink,
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strGlass
          } = item;

          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass:strGlass
          }
        })

        setCocktails(newCocktails)

      } else {
        setCocktails([])
      }

    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  },[searchTerm])

  return (
    <AppContext.Provider
      value={{
        loading,
        searchTerm,
        cocktails,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }