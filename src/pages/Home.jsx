import React, { useContext } from 'react'
import { GlobalContext } from '../context/context'
import ProductCard from '../components/ProductCard'

function Home() {
  const { searchParams,setSearchParams,handleSubmit,products } = useContext(GlobalContext)
  console.log(products)
  return (
    <div className='bg-gray-100 font-serif w-full h-full py-10'>
      <div className='max-w-7xl md:w-[80%] mx-auto px-2 w-full'>
        <form onSubmit={handleSubmit} className='flex md:flex-row  w-full gap-2 flex-col justify-center items-center'>
          <input type="text"
          value={searchParams}
          onChange={(event) => setSearchParams(event.target.value)}
          placeholder='Enter food...' className=' bg-white p-2 md:w-[50%] w-full rounded-md shadow-sm'/>
          <button className='py-2 bg-amber-900 rounded-md cursor-pointer text-white font-bold w-full md:w-[20%]'>Search recipe</button>
        </form>
        <div className='mt-10'>
          {
            products.length > 0 ? <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
              {
                products.map((item) => <ProductCard item={item}/> )
              }
            </div> : <h1 className='font-bold text-center text-2xl'>No recipes found enter your food to get a recipe</h1>
          }
        </div>
      </div>
    </div>
  )
}

export default Home