import { createContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null)

export default function GlobalState({children}){
    const [searchParams,setSearchParams] = useState("")
    const [products,setProducts] = useState([])
    const [singleProduct,setSingleProduct] = useState([])

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
            }
       } catch (error) {
         console.log(error)
       }
    }
    return <GlobalContext.Provider value={{searchParams,setSearchParams,handleSubmit,products,productDetail,singleProduct}}>{children}</GlobalContext.Provider>
}