import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
    <section className="mt-20 p-1 mx-auto w-[90%] md:w-[40%] text-center [&>*]:my-5 [&>*]:transition-all">
      <h1 className="font-semibold bg-red-600 w-20 mx-auto text-white rounded shadow-md">Sorry!</h1>
      <p>the page that you tried to reach is have a problem nor does not exist</p>
      <Link className="p-1 bg-green-500 rounded-md text-yellow-50 hover:text-green-600 hover:bg-slate-100 shadow-lg">Back home</Link>
    </section>
  )
}

export default ErrorPage
