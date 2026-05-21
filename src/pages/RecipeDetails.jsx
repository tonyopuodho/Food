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
    <div className='py-10 bg-gray-100 h-[100vh] font-serif'>
      <div className='max-w-7xl md:w-[80%] mx-auto px-2 flex items-center'>
        {
           singleProduct.map((item) => (
            <div className='flex flex-col p-2 w-full'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full'>
                <div className='w-full md:w-[100%] h-[70vh] bg-amber-600'>
                  <img src={item.image_url} alt="" className='w-full h-full object-cover' />
                </div>
                <div className='w-full md:w-[100%] md:pl-4'>
                  <h1 className='text-3xl font-extrabold text-gray-600'>{item.title}</h1>
                  <h3 className='text-2xl text-gray-400 font-semibold'>Publisher: {item.publisher}</h3>
                  <h3 className='text-2xl text-gray-400 font-semibold'>Servings: {item.servings}</h3>
                  <button className='py-2 w-[50%] bg-amber-900 text-white font-bold cursor-pointer rounded-md mt-2'>Add to favorites</button>
                  <h2 className='text-3xl font-extrabold text-gray-600 mt-3 mb-2'>Ingredients</h2>                  
                  <ul className='flex flex-col gap-3 pl-6 text-xl text-gray-600'>
                    {
                      item.ingredients.map((items) => (
                        <li className='list-disc'>
                          <span className='mr-2'>{items.quantity}</span>
                          <span>{items.unit}</span>
                          <span className='ml-2'>{items.description}</span>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </div>
           ))
        }
      </div>
    </div>
  )
}

export default RecipeDetails