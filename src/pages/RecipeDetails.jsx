import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../context/context'

function RecipeDetails() {
  const { productDetail,singleProduct } = useContext(GlobalContext)
  const { id } = useParams()
  productDetail(id)
  console.log(singleProduct)
  return (
    <div>RecipeDetails</div>
  )
}

export default RecipeDetails