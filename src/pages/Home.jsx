import React from 'react'

function Home() {
  return (
    <div className='bg-gray-100 font-serif w-full h-[100vh] py-10'>
      <div className='max-w-7xl md:w-[80%] mx-auto px-2 w-full'>
        <form action="" className='flex md:flex-row  w-full gap-2 flex-col justify-center items-center'>
          <input type="text" placeholder='Enter food...'  onChange={() => {}} className='bg-white p-2 md:w-[50%] w-full rounded-md shadow-sm'/>
          <button className='py-2 bg-amber-900 rounded-md cursor-pointer text-white font-bold w-full md:w-[20%]'>Search recipe</button>
        </form>
      </div>
    </div>
  )
}

export default Home