import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between items-center h-auto p-2 shadow-xl sticky top-0 md:p-3 rounded-xl xl:w-[60%] md:w-[70%] z-10 bg-white mx-auto [&>*]:transition-all">
      <NavLink className='text-green-500 font-bold bg-green-50 rounded-md p-2 md:text-xl hover:bg-green-700 hover:text-green-50 shadow-md shadow-green-400' to='/'>
      𝓬𝓸𝓬𝓴𝓽𝓪𝓲𝓵𝓼
      </NavLink>
      <div className="mx-1  [&>*]:mx-2 [&>*]:md:mx-5 [&>*]:xl:text-xl">
        <NavLink to='/' className={({isActive}) => isActive ? 'font-bold text-green-500' : 'hover:drop-shadow hover:font-bold hover:text-green-600'}>
          Home
        </NavLink>
        <NavLink to='about' className={({isActive}) => isActive ? 'font-bold text-green-500' : 'hover:drop-shadow hover:font-bold hover:text-green-600'}>
          About
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
