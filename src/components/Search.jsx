import React from 'react'
import { SearchedData } from '../data/SearchData'
import { useNavigate } from "react-router-dom";



const Search = () => {

    const navigate = useNavigate()

  const handleAvailability = () => {
    navigate('/hotel')
  }


  return (
     <section className='border border-gray-600 px-2 overflow-hidden'>

        <div className=''>
            {SearchedData.map(({image, title, distance, taxi, subtitle, features, cancel, price, tax, canceltwo, rating, review, button, id}) => {
                return (
                    <div key={id} className='border border-gray-400 rounded-md flex flex-col lg:flex-row lg:justify-between gap-5 mb-5 px-3 py-2'>
                        <img src={image} alt="" className='w-[300px] h-[300px] rounded-sm object-cover'/>

                    <div key={id} className='flex flex-col gap-3 SearchDesc'>
                        <h1 className='text-sm text-gray-400 capitalize'>{title}</h1>
                        <span className='text-xs'>{distance}</span>
                        <span className='text-xs bg-red-400 rounded-md hover:bg-red-500 text-white px-3 py-1 cursor-pointer w-max'>{taxi}</span>
                        <span className='text-xs font-semibold'>{subtitle}</span>
                        <span className='text-xs'>{features}</span>
                        <span className='text-xs text-red-600 font-bold'>{cancel}</span>
                        <span className='text-xs text-red-500'>{canceltwo}</span>

                        <div className='flex flex-1 flex-col justify-between'>
                            <div className='flex justify-between '>
                                <span className='font-light'>{review}</span>
                                <button className='bg-black p-1 font-semibold border-none text-white rounded-md mb-2 lg:mb-0'>{rating}</button>
                            </div>

                           <div className='flex text-right gap-1'>
                                <span className='text-2xl'>${price}</span>
                                <span className='text-gray-600 text-xs'>{tax}</span>
                                <div className='px-4'>
                                <button onClick={handleAvailability} className='px-5 py-2 bg-red-500 hover:bg-red-300 text-white text-xs'>{button}</button>

                                </div>
                           </div>

                        </div>

                    </div>

                    </div>
                )
            })}
        </div>

    </section>
  )
}

export default Search