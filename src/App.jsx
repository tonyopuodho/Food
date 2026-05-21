import { Fragment } from "react"
import NavigationBar from "./components/NavigationBar"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Favorites from "./pages/Favorites"
import RecipeDetails from "./pages/RecipeDetails"
import Categories from "./pages/Categories"


function App() {
  
  return (
   <Fragment>
    <NavigationBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/favorites" element={<Favorites/>}/>
      <Route path="/categories" element={<Categories/>}/>
      <Route path="/recipeDetails/:id" element={<RecipeDetails/>}/>
    </Routes>
   </Fragment>
  )
}

export default App
