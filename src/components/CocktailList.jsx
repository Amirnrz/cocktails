
import { useGlobalContext } from "../context"

import Loading from "./Loading"
import Cocktail from "./Cocktail"

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext()

  console.log(cocktails);

  if(loading) {
    return (
      <Loading/>
    )
  }

  if(cocktails.length < 1) {
    return (
      <div className="mt-10 mx-auto text-center lg:w-[60%] ">
        <h2 className="border-green-400 rounded-lg border-2 p-2 font-bold">
          no cocktails matched your search!
        </h2>
      </div>
    )
  }

  return (
    <section className="mt-20 mx-auto">
      <h2 className="my-10 text-center font-semibold text-orange-500">ｃｏｃｋｔａｉｌｓ</h2>
      <div className="flex flex-row flex-wrap justify-center">
        {
          cocktails.map(item => <Cocktail key={item.id} {...item}/>)
        }
      </div>
    </section>
  )
}

export default CocktailList
