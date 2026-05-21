import React from 'react'

function FavoriteCard({item}) {
  return (
     <div className='p-2 relative  bg-white rounded-sm shadow-md font-serif  w-full'>
        <div className='w-full h-40'>
           <img src={item.image_url} alt="" className='w-full h-full object-cover' /> 
        </div>
        <div className='h-[50%]'>
            <h1 className='text-gray-700 pt-4 font-extrabold'>{item.title}</h1>
            <p className='text-gray-600 text-sm'>Publisher: {item.publisher}</p>
             <Link to={`/recipeDetails/${item.id}`}>
             <button className='py-2 text-xl bg-amber-900 rounded-md mt-2 font-bold cursor-pointer w-full text-white'>view recipe</button>
             </Link> 
            
        </div>
    </div>
  )
}

export default FavoriteCard