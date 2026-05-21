import { createContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null)

export default function GlobalState({children}){
    const [searchParams,setSearchParams] = useState("")
    const [products,setProducts] = useState([])
    const [singleProduct,setSingleProduct] = useState([])
    const [loading,setloading] = useState(false)
    const [favorite,setFavorite] = useState([])

    function addToFavorites(ingredient){
        let copyIngredients = [...singleProduct]
        const findExistingproduct = copyIngredients.findIndex((item) => item.id === ingredient.id)
        if (findExistingproduct === -1) {
            copyIngredients.push({
                ...ingredient,
                quantity: 1
            })
        } else {
            console.log("Item already added")
        }

        setFavorite(copyIngredients)
        localStorage.setItem("ingredients",JSON.stringify(copyIngredients))
    }

    async function productDetail(id) {
        try {
            const apiRequest = await fetch(`https://forkify-api.jonas.io/api/v2/recipes/${id}?key=53692461-12d5-4427-b225-ae5f8d7916f2`)
            const apiResponse = await apiRequest.json()

            if (apiResponse?.data.recipe) {
                setSingleProduct([apiResponse?.data.recipe])
            }           
        } catch (error) {
            console.log(error)
        }

    }

    async function handleSubmit(event) {
        event.preventDefault()
       try {        
            const apiRequest = await fetch(`https://forkify-api.jonas.io/api/v2/recipes?search=${searchParams}&key=53692461-12d5-4427-b225-ae5f8d7916f2`)
            const apiResponse = await apiRequest.json()
            
            if (apiResponse?.data.recipes){
                setProducts(apiResponse?.data.recipes)
                setloading(false)
            }
       } catch (error) {
         setloading(false)
         console.log(error)
       }
    }
    return <GlobalContext.Provider value={{searchParams,setSearchParams,handleSubmit,products,productDetail,singleProduct, setloading,loading,addToFavorites}}>{children}</GlobalContext.Provider>
}