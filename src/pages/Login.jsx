import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Navbar from '../components/Navbar/Navbar'

import a1 from '../images/a2.jpeg'

const Login = () => {
  return (
   <section>
    <Navbar />
    <Header type='list'/>
    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 h-[70vh] lg:h-[100vh] w-full lg:grid-cols-2'>
        <div className='hidden md:block lg:block'>
            <img src={a1} alt="" className='w-full h-full object-cover'/>
        </div>

        <div className='bg-gradient-to-r py-10 from-pink-400 to bg-gray-700 flex flex-col justify-center px-4'>
            <form action="" className='max-w-[350px] w-full mx-auto bg-black rounded-lg p-8 px-8 text-white'>
                <h2 className='text-3xl font-semibold text-center'>LOGIN</h2>

                <div className='flex flex-col text-gray-300 capitalize py-2'>
                    <label htmlFor="">username </label>
                    <input type="text"  className='text-black mt-2 p-2 focus:border-gray-300 focus:bg-gray-600 focus:outline-none cursor-pointer'/>
                </div>

                <div className='flex flex-col text-gray-300 capitalize py-2'>
                    <label htmlFor="">password </label>
                    <input type="password" className='text-black mt-2 p-2 focus:border-gray-300 focus:bg-gray-600 focus:outline-none cursor-pointer'/>
                </div>

                <div className='flex justify-between text-gray-300 py-2'>
                    <p className='flex items-center'><input className='mr-2' type="checkbox" /> remember me</p>
                    <p className='cursor-pointer'>forgot password?</p>
                </div>

                <button className='w-full my-5 py-2 bg-red-400 hover:bg-red-500/80 shadow-2xl capitalize'>sign in</button>

                    <Link to='/register' className='text-xs'><a href="">or  <b className='uppercase'>sign up</b> if you dont have an account</a></Link>
            </form>
        </div>

    </div>
    </section>
  )
}

export default Login