import React from 'react'

const Mail = () => {
  return (
    <section className='w-full mt-12 bg-black text-white flex flex-col items-center gap-5 p-10'>
       
      <h1 className="text-xl lg:text-3xl capitalize text-gray-300">join our mailing list today</h1>
      <span className="text-gray-300 capitalize text-sm">Sign up and we'll send the best deals to you</span>

      <div className="flex flex-col lg:flex-row gap-x-3 gap-y-3">
        <input type="text" placeholder="Enter Your Email" className='py-2 px-4' />
        <button className='px-4 py-2 bg-red-400 hover:bg-red-500'>Subscribe</button>
      </div>


    </section>
  )
}

export default Mail