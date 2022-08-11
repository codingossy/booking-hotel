import React from 'react'
import { MdDeck, MdDepartureBoard, MdHome, MdNewLabel, MdPhone, MdQuestionAnswer, MdSupport } from 'react-icons/md'
import { navigation } from '../../data/NavData'

import usa from '../../images/US.png'


const MobileNav = () => {
  return (
    <nav className='bg-gray-100 text-black shadow-2xl h-full w-[100vw]'>

        <div className='pt-10 px-5'>
            <div className='text mb-8'>
                <h1 className='font-semibold text-3xl mb-8'>More</h1>
                <h2>US, USA, Dollar</h2>

            </div>

            <div className='text2 flex flex-col gap-y-10 capitalize'>

                <div className='flex gap-x-4'>
                <img src={usa} alt="" className='rounded-full w-7 h-7'/>
                <h3>United states (US)</h3>
                </div>

                <div className='flex gap-x-4'>
                    <MdPhone size={30}/> 
                    <h4>download andriod App</h4>
                </div>

                <div className='flex gap-x-4'>
                    <MdSupport size={30}/>
                    <h4>genius loyalty programme</h4>
                </div>

                <div className='flex gap-x-4'>
                    <MdHome size={30}/>
                    <h4>list your property</h4>
                </div>

            </div>

        </div>

        <div className='px-5 mt-6 capitalize'>
            <div className='text mb-8'>
            <h1 className='font-semibold text-3xl mb-8 capitalize'>help and support</h1>
            </div>

            <div className='text2 flex flex-col gap-y-10 capitalize'>

                <div className='flex gap-x-4'>
                <MdQuestionAnswer size={30}/>
                <h3>contact customer support</h3>
                </div>

                <div className='flex gap-x-4'>
                <MdDeck size={30}/>
                <h3>partnership</h3>
                </div>


         </div>

        </div>

        <div className='px-5 mt-6 capitalize'>
            <div className='mb-8'>
                <h1 className='text-3xl font-semibold mb-8 capitalize'> inspiration</h1>
            </div>

       
                <div className='flex gap-x-4'>
                <MdDepartureBoard size={30}/>
                <h3>deals</h3>
                </div>

                <div className='flex gap-x-4'>
                <MdNewLabel size={30}/>
                <h3>travel articles</h3>
                </div>


                </div>

  
        

    </nav>
  )
}

export default MobileNav