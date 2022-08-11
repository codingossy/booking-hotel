import React from 'react'

import img1 from '../images/1660045944919.jpeg'
import img2 from '../images/1660045944919.jpeg'
import img3 from '../images/1660045944893.jpeg'
import img4 from '../images/1660045944906.jpeg'
import { FeatsData } from '../data/FeatPropertyData'


const FeaturedProperty = () => {
  return (
   <section className='w-full max-w-[1024] flex flex-col lg:flex-row gap-y-5 justify-between gap-x-5 container mx-auto mb-14'>
       <div className='grid grid-col-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-x-4 gap-y-4'>

        {FeatsData.map(({title, location, price, image, rating, button}) => {
            return (
                <div className='relative'>
                    <img src={image} alt="" className='cursor-pointer h-[350px] object-cover'/>
                    <div>
                        <h2 className='text-black font-semibold capitalize text-xl mt-3'>{title}</h2>
                        <h5 className='text-gray-400 text-sm capitalize'>{location}</h5>
                        <h2>${price}</h2>

                        <div className='flex  gap-x-2 gap-y-3'>
                            <button className='px-2 py-1 bg-red-500 text-white rounded-md'>{button}</button>
                            <h5 className='capitalize'>{rating}</h5>
                        </div>
                    </div>

                </div>
            )
        })}

       </div>

   </section>
  )
}

export default FeaturedProperty