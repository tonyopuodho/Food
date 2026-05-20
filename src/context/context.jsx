import { createContext, useState } from "react";

export const GlobalContext = createContext(null)

export default function GlobalState({children}){
    const [searchParams,setSearchParams] = useState("")
    const [products,setProducts] = useState([])
    async function handleSubmit(event) {
        event.preventDefault()
       try {        
            const apiRequest = await fetch(`https://forkify-api.jonas.io/api/v2/recipes?search=${searchParams}&key=76bf349e-c0b1-49c6-b375-686b22c6dfe1`)
            const apiResponse = await apiRequest.json()
            
            if (apiResponse?.data.recipes){
                setProducts(apiResponse?.data.recipes)
            }
       } catch (error) {
         console.log(error)
       }
    }
    return <GlobalContext.Provider value={{searchParams,setSearchParams,handleSubmit,products}}>{children}</GlobalContext.Provider>
}