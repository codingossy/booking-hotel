import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar/Navbar'
import {useLocation} from 'react-router-dom'
import { useState } from 'react'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import Search from '../components/Search'
import Mail from '../components/Mail'
import Footer from '../components/Footer'


const List = () => {

  const location = useLocation()
  // console.log(location)

  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [options, setOptions] = useState(location.state.options)
  const [openDate, setOpenDate] = useState(false);





  return (
    <section>
      <Navbar />
      <Header type='list'/>

      <div className="flex justify-center mt-5">

          <div className="w-full max-w-[1024px] container mx-auto flex flex-col sm:flex-col md:flex-row lg:flex-row gap-5">

            <div className="seacrh flex-1 bg-pink-400 p-3 rounded-md block lg:sticky top-3 h-max">
              <h1 className='text-xl lg:text-2xl text-white'>Book</h1>

              <div className="SearchhItems flex flex-col gap-2 mb-3">
                  <label htmlFor="" className='text-sm'>Destination</label>
                  <input className='h-6 border-none text-black p-1' type="text" placeholder={destination}/>
              </div>
              <div className="litsItems">
                  <label htmlFor="" className='text-sm'>Check-in Date</label>
                  <span  className='h-10 p-1 bg-white flex text-black items-center cursor-pointer' onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} - ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>


        {/* constion to toffle it */}

        {openDate && ( 
              <DateRange onChange={(item) => setDate([item.selection])} minDate={new Date()} ranges={date}/>
              )}

              </div>

              {/* options */}
              <div className="options flex flex-col gap-2 mb-2">
              <label htmlFor="" className='capitalize font-semibold mt-3'>options</label>

              <div className='optionsWrapper text-black'>
                  <div className='optionsItems'>
                    <span className='OptionsText'>Min price <small>per night</small> </span>

                    <input type="number" className='OptionsInput'/>
                  </div>
                  <div className='optionsItems'>
                   
                    <span className='OptionsText'>Max price <small>per night</small> </span>

                    <input type="number" className='OptionsInput'/>
                  </div>
                 
                  <div className='optionsItems'>
                    
                    <span className='OptionsText'>Adults </span>

                    <input type="number" min={1} placeholder={options.adult} className='OptionsInput'/>
                  </div>
                  <div className='optionsItems'>
                    
                    <span className='OptionsText'>children</span>

                    <input type="number" placeholder={options.children} min={0} className='OptionsInput'/>
                  </div>
                  <div className='optionsItems'>
                    
                    <span className='OptionsText'>Room</span>

                    <input type="number" min={1} placeholder={options.room} className='OptionsInput'/>
                  </div>

              </div>

              </div>

              <button className='px-5 py-2 w-full bg-black text-white cursor-pointer border-none hover:bg-gray-700'>Search</button>
               
            </div>





          {/* import seacrh */}

            <div className='results flex-3'>
              <Search />
              <Search />
              <Search />
              <Search />
              <Search />
              <Search />
              <Search />
              <Search />
            </div>

          </div>
      </div>

      <Mail />
      <Footer />



    </section>
  )
}

export default List