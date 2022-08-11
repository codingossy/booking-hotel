import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import { propData } from '../data/PropertiesData'



const PropertyList = () => {
  return (
    <Swiper className='' autoplay grabCursor={true} breakpoints={{
        320: {
            slidesPerView: 2,
            spaceBetween: 18,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    }}
    >
        {propData.map(({image, title, desc, index}) => {
            return(
                <SwiperSlide className='max-w-[300px]' key={index}>
                   <div className='relative container mx-auto'>
                        <img src={image} alt="" className='h-[150px] object-cover shadow-2xl rounded-md w-full'/>

                        <div className='mt-2'>
                            <h1 className='text-2xl capitalize font-semibold'>{title}</h1>
                            <h4 className='font-light mt-0'>{desc}</h4>
                        </div>
                   </div>
                </SwiperSlide>
            )
        })}
    
    </Swiper>
  )
}

export default PropertyList