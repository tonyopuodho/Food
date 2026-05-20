import React, { Fragment, useState } from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6'
import { Link, NavLink } from 'react-router-dom'

function NavigationBar() {
  const navLinks = [
    {
      name:"Home",
      link:"/"
    },{
      name:"Favorites",
      link:"favorites"
    }
  ]
  const [isOpen,setIsOpen] = useState(false)
  return (
    <Fragment>
        <div className='bg-amber-900 w-full h-[10vh] font-serif flex items-center'>
        <div className='max-w-7xl md:w-[80%] w-full mx-auto px-2 flex justify-between items-center'>
          <h1 className='text-white text-4xl font-extrabold'>FoodRecipe</h1>
          {/* desktop navigation */}
          <ul className='md:flex justify-between gap-10 text-white hidden'>
            {
              navLinks.map(({name,link}) => (

                <li className='text-xl font-bold outline-none'>
                    <NavLink to={link} className={({isActive,pending}) => 
                              isActive ? "active" :
                              pending ? "pending" : ""
                              
                    } key={link}>{name}</NavLink>
                </li>           
              ))
            }
          </ul>
          <div className='md:hidden flex justify-center items-center text-white text-2xl' onClick={() => setIsOpen(!isOpen)}>
            {
              isOpen ? <FaXmark/> : <FaBars/>
            }      
          </div>
        </div>
      </div>
      {/* mobile navigation */}
      <div className='relative'>
        <ul  className={`text-white font-serif md:hidden block  inset-0 h-[100vh]  w-[60%] transition-all duration-300 ease-in absolute ${isOpen ? ' left-0' : 'left-[-100%]'}  bg-amber-900`}>
            {
              navLinks.map(({name,link}) => (

                <li className='text-xl font-bold pt-10 pl-10'>
                    <NavLink to={link} className={({isActive,pending}) => 
                              isActive ? "active" :
                              pending ? "pending" : ""
                              
                    } key={link}>{name}</NavLink>
                </li>           
              ))
            }
          </ul>
      </div>
    </Fragment>
  )
}

export default NavigationBar