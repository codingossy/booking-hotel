import React from 'react'
import { FaBed, FaCar, FaFutbol, FaPlane, FaTaxi } from 'react-icons/fa'
import HeaderSearch from './HeaderSearch'

const Header = ( {type} ) => {
  return (
    <header className=' text-gray-300 bg-home bg-no-repeat bg-cover bg-center flex flex-col lg:flex-row justify-center relative'>
        
        <div className="container mx-auto mt-4 max-w-[1024px]">
            
            <div className="headerlist grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-12 capitalize">

            <div className="headerlistitem flex items-center gap-x-2 active cursor-pointer">
                <FaBed />
                <span>stay</span>
            </div>

            <div className="headerlistitem flex items-center gap-x-2 cursor-pointer">
                <FaPlane />
                <span>flights</span>
            </div>

            <div className="headerlistitem flex items-center gap-x-2 cursor-pointer">
                <FaCar />
                <span>Car Rental</span>
            </div>

            <div className="headerlistitem flex items-center gap-x-2 cursor-pointer">
                <FaFutbol />
                <span>activities</span>
            </div>

            <div className="headerlistitem flex items-center gap-x-2 cursor-pointer">
                <FaTaxi />
                <span>airport taxi</span>
            </div>

            </div>

            { type !== "list" && (
            <>
            <div className='mb-12'>

               
            <h1 className='text-white text-2xl lg:text-4xl'>A lifetime of discounts? It's Genius.</h1>
            <p className='desc my-4'> Get rewarded for your travels – unlock instant savings of 10% or
              more with a free booking account</p>
            <button className='btn hover:bg-red-300'>sign in</button>

            </div>
            
            <HeaderSearch />
            
            
            </>
            

        
            )}
        </div>
        
   
   
    </header>
  )
}

export default Header