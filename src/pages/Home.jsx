import SearchForm from "../components/SearchForm"
import CocktailList from "../components/CocktailList"

const Home = () => {
  return (
    <main className="mt-10 mx-4 md:w-[60%] md:mx-auto">
      <SearchForm/>
      <CocktailList/>
    </main>
  )
}

export default Home
