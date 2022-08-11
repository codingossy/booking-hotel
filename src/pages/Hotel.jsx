import React, { useState } from 'react'
import { MdLocationCity } from 'react-icons/md'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Mail from '../components/Mail'
import Navbar from '../components/Navbar/Navbar'
import Images from '../data/Images'



const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  


  return (

    
    <section>
      <Navbar />
      <Header type='list'/>

      <div className=' flex flex-col items-center gap-5 mt-5 mb-10'>
        <div className="w-full container mx-auto max-w-[1024px] flex flex-col gap-3 relative">
          <button className='absolute top-3 right-5 lg:right-6 border-none bg-red-400 text-white capitalize font-semibold rounded-md cursor-pointer px-6 lg:px-14 hover:bg-red-500 py-2'>book now</button>
          <h1 className='text-2xl font-semibold'>Highrise Hotel</h1>

          <div className='text-xs flex items-center gap-1'>
            <MdLocationCity />
            <span>maryland lagos</span>
          </div>
            <span className='text-blue-500 font-light capitalize'>
              112km from the mall
            </span>
            <span className='text-blue-500 capitalize'>
              book stay at $3000 a night 
            </span>
            <div className="flex flex-wrap flex-col lg:flex-row lg:justify- gap-1">
              {Images.map(image => {
                return (
                  <div className='w-full lg:w-[33%]'>
                    <img onClick={(i) => handleOpen(i)}
                   src={image} alt="" className='w-full object-cover cursor-pointer'/>
                  </div>
                )
              })}
            </div>

            <div className="flex flex-col lg:flex-row justify-between gap-3 mt-5">
              <div className="hotelDetailsText">
                <h1 className='text-2xl font-semibold mt-4 lg:text-3xl capitalize'>Stay in the heart of lagos</h1>
                <p className='gap-5 rounded-md mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda quibusdam tenetur eligendi in molestias debitis at, facilis officia dolor ea, repellendus enim cumque ab est quisquam amet, optio harum omnis. Maxime quasi commodi nesciunt iure beatae tenetur culpa sit omnis, provident adipisci totam est voluptate corrupti rem, modi magnam illum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas voluptatem modi hic corporis, excepturi quod nobis quos eum nemo dolor!</p>
              </div>

              <div className='flex-1 bg-pink-200 rounded-md p-5 flex flex-col gap-5'>
                <h1 className='text-sm font-semibold capitalize text-gray-800'>stay a night or more with us</h1>
                <span className='text-xs'>located in the heart of ikeja, the urban city of lagos state </span>

                <h2 className='font-light'>
                  <b className='text-2xl font-semibold'>$9000</b> (2 nights)
                </h2>
                <button className='px-5 py-1 bg-blue-500 text-white hover:bg-blue-700'>book now</button>
              </div>

            </div>

        </div>
        <Mail />
        <Footer />

      </div>

    </section>
  )
}

export default Hotel