import React from 'react'
import { placesData } from '../data/FeaturesData'

const Places = () => {
  return (
    <section className='w-full max-w-[1024] flex flex-col lg:flex-row gap-y-5 justify-between gap-x-5 container mx-auto '>
            <div className='grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4  gap-y-4'>
                {placesData.map(({image, desc, title, index}) => {
                    return (
                        <div className=''>
                                <div className='relative'>
                                    <img src={image} alt="" className='cursor-pointer'/>
                                    <div className='absolute bottom-5 left-4 text-white'>
                                        <h2 className='capitalize font-semibold text-xl lg:text-2xl'>{title}</h2>
                                        <h5>{desc}</h5>
                                    </div>
                                </div>
                        </div>
                    )
                })}
            </div>
    </section>
  )
}

export default Places