import React, { useContext } from 'react'
import { GlobalContext } from '../context/context'
import ProductCard from '../components/ProductCard'
import { FaSpinner } from 'react-icons/fa'

function Home() {
  const { searchParams,setSearchParams,handleSubmit,products ,setloading,loading} = useContext(GlobalContext)
  return (
    <div className= {`bg-gray-100 font-serif w-full py-10 ${products.length > 0 ? 'h-full' : 'h-[100vh]'}`}>
      <div className='max-w-7xl md:w-[80%] mx-auto px-2 w-full'>
        <form onSubmit={handleSubmit} className='flex md:flex-row  w-full gap-2 flex-col justify-center items-center'>
          <input type="text"
          value={searchParams}
          onChange={(event) => setSearchParams(event.target.value)}
          placeholder='Enter food...' className=' bg-white p-2 md:w-[50%] w-full rounded-md shadow-sm'/>
          <button className='py-2 bg-amber-900 rounded-md cursor-pointer flex items-center justify-center text-white font-bold w-full md:w-[20%]' onClick={() => setloading(true)}>{
            loading ? <FaSpinner className='text-center animate-spin'/> : <h1>Search recipe</h1>   
          }</button>
        </form>
        <div className='mt-10 z-0'>
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