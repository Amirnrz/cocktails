import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"

// pages import
import Home from "./pages/Home"
import ErrorPage from "./pages/ErrorPage"
import About from "./pages/About"
import SingleCocktail from "./pages/SingleCocktail"

// component imports
import Layout from "./components/Layout"


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout/>}>
      <Route path="*" element={<ErrorPage/>}/>
      <Route index element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="cocktail/:id" element={<SingleCocktail/>}/>
  </Route>
))

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
