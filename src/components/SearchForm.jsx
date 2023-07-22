import { useRef, useEffect } from "react"

import { useGlobalContext } from "../context"

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = useRef('')

  useEffect(() => {
    searchValue.current.focus()
  }, [])

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <section className="shadow-xl shadow-green-200 lg:w-[70%] mx-auto  rounded-lg p-1 text-center">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col [&>*]:my-2">
          <label htmlFor="name" className="font-semibold text-green-700"> search for your favorite cocktail</label>
          <input type="text" id="name" ref={searchValue} onChange={searchCocktail} className='bg-slate-200 outline-none w-4/5 mx-auto rounded-md py-1 px-2 '/>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
