import React, { useContext } from 'react'
import { GlobalContext } from '../context/context'
import ProductCard from '../components/ProductCard'
import FavoriteCard from '../components/FavoriteCard'

function Favorites() {
  const { favorite } = useContext(GlobalContext)
  return (
    <div className='h-[100vh] bg-gray-100'>
      <div className='max-w-7xl md:w-[80%] mx-auto px-2 font-serif'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-2 pt-4'>
          {
            favorite.map((item) => <FavoriteCard item={item}/>)
          }
        </div>
      </div>
    </div>
  )
}

export default Favorites