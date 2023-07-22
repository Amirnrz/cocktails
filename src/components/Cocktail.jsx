import { Link } from "react-router-dom"


const Cocktail = ({ image, id, name, glass, info }) => {
  return (
    <div className="flex flex-col h-[440px] w-[300px] overflow-hidden m-5 bg-slate-100 rounded-xl shadow-xl shadow-orange-200 md:h-96 lg:w-[300px] lg:h-[400px]">
      <div className="h-[80%] w-full">
        <img src={image} alt={name} className='h-full w-full object-cover'/>
      </div>
      <div className="p-2 flex flex-row justify-between">
        <div>
          <h3>{name}</h3>
          <h4>{glass}</h4>
          <p className="mb-2">{info}</p>
        </div>
        <div className="mt-2 self-start p-[1px]">
          <Link to={`cocktail/${id}`} className="bg-orange-400 p-1 rounded-xl mt-2 hover:bg-black hover:text-orange-400 transition-all">
            details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Cocktail
