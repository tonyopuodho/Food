import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../context/context'

function RecipeDetails() {
  const { productDetail,singleProduct } = useContext(GlobalContext)
  const { id } = useParams()

  useEffect(() => {
    productDetail(id)
  },[])
  
  console.log(singleProduct)
  return (
    <div className='py-10 bg-gray-100 h-[100vh]'>
      <div className='max-w-7xl md:w-[80%] mx-auto px-2 flex items-center'></div>
    </div>
  )
}

export default RecipeDetails