import React, {useState, useEffect} from 'react'
// import icons
import { CgMenuRight, CgClose } from 'react-icons/cg';

import usa from '../../images/US.png'


import { Link } from 'react-router-dom'
import MobileNav from './MobileNav';
import { MdMail, MdPower } from 'react-icons/md';


const Navbar = () => {
    const [mobileNav, setMobileNav] = useState(false);


  return (
    <nav className='h-12 bg-blue-700 flex justify-center text-white'>
     
        <div className="container mx-auto flex w-full max-w-[1020px] items-center justify-between">

            {/* menu icon */}

            <div onClick={() => setMobileNav(!mobileNav)} className='text-2xl text-white md:hidden lg:3xl cursor-pointer z-50'>
             {mobileNav ? <CgClose color='#000'/> : <CgMenuRight /> }
            </div>
            
            <Link to='/'><span className='text-sm lg:text-2xl font-semibold text-gray-300'>Bookings.com</span></Link>
            
            <div className='navitems hidden lg:flex items-center justify-center gap-x-4 gap-y-3'>

              
                  <h1>USA</h1>
                  <span><img src={usa} alt="" className='w-7'/></span>

                  <MdPower className='rounded-full py-1 border' size={30}/>
                  
                  <button className='text-gray-200 border border-gray-50 py-1 px-3 capitalize'>list your property</button>
           

                <button className='px-6 py-2 bg-white text-blue-500 capitalize rounded-md'>register</button>
                <button className='px-6 py-2 bg-white text-blue-500 capitalize rounded-md'>login</button>
            </div>
        
        </div>


        <div className={`${ mobileNav ? 'left-0' : '-left-full'} md:hidden fixed bottom-0 w-full max-w-xs h-screen transition-all z-40`}>
        <MobileNav />
        </div>


    </nav>
  )
}

export default Navbar