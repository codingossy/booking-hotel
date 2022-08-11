import React, {useState} from 'react'
import { FaBed} from 'react-icons/fa'
import { MdCalendarViewMonth, MdPerson } from 'react-icons/md'
import { DateRange } from 'react-date-range'
import { format } from 'date-fns'
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useNavigate } from "react-router-dom";



const HeaderSearch = () => {
    const [openDate, setOpenDate] = useState(false);
    const [destination, setDestination] = useState("");

    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: "selection",
        },
      ]);

      const [openOptions, setOpenOptions] = useState(false);
      const [options, setOptions] = useState({
            adult: 1,
            children: 0,
            room: 1,
  });



  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/list", { state: { destination, date, options } });
  };

// remember to handle the onchange when settint the destination beofre adding the state changes

  return (
    <div className='h-[50%] w-[85%] bg-white -bottom-56 px-4 border border-green-300 grid grid-cols-1 sm:grid sm:-bottom-48 md:flex md:items-center md:justify-around md:h-16 md:w-[90%] md:-bottom-8 lg:flex lg:items-center lg:justify-around py-2 absolute lg:-bottom-4 lg:h-8 lg:w-full max-w-[1024px]'>
            
            <div className="headerSearchItem">
                <FaBed className='headerIcon'/>
                <input type="text"  placeholder='Where you wan go?'
                    className='headerinput text-black'
                    onChange={(e) => setDestination(e.target.value)}
                />

            </div>

            {/* date  */}

            <div className="headerSearchItem cursor-pointer z-30">
                <MdCalendarViewMonth className='headerIcon'/>
                <span
                onClick={() => setOpenDate(!openDate)}
                className="headerSearchText text-gray-400"
              >{`${format(date[0].startDate, "dd/MM/yyyy")} -  ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}</span>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="date absolute top-32 lg:top-10 z-10"
                  minDate={new Date()}
                />
              )}
                
            </div>




            <div className="headerSearchItem">
                <MdPerson className='headerIcon'/>
               
                <span onClick={() => setOpenOptions(!openOptions)}className='headersearchtext'>{`${options.adult} adult . ${options.children} children . ${options.room} room `}</span>

               
               {/* bookings */}

                {openOptions && ( 
                <div className="z-30 absolute top-5 lg:top-12 bg-white text-black rounded-md shadow-md">
                  
                   <div className=''>
                         <div className="w-[200px] flex justify-between m-2">
                        <span className='capitalize'>adult</span>
                        <div className='optionsDetails'>
                            <button disabled={options.adult <= 1} className='boxSpan' onClick={() => handleOption("adult", "d" )}>-</button>
                            <span className=''>{options.adult}</span>
                            <button className='boxSpan' onClick={() => handleOption("adult", "i" )}>+</button>
                        </div>
                       

                    </div>

                      <div className="w-[200px] flex justify-between m-2">

                        <span className='capitalize'>children</span>
                        <div className='optionsDetails'>
                            <button  disabled={options.children <= 0} className='boxSpan' onClick={() => handleOption("children", "d" )}>-</button>
                            <span className=''>{options.children}</span>
                            <button className='boxSpan' onClick={() => handleOption("children", "i" )}>+</button>
                        </div>

                    </div>

                      <div className="w-[200px] flex justify-between m-2">

                        <span className='capitalize'>room</span>
                       <div className='optionsDetails'>
                       <button  disabled={options.room <= 1} className='boxSpan' onClick={() => handleOption("room", "d" )}>-</button>
                        <span className=''>{options.room}</span>
                        <button className='boxSpan' onClick={() => handleOption("room", "i" )}>+</button>
                       </div>

                    </div>

                   </div>

                </div>

            )}
                
            </div>
        



            <div className="search">
                <button onClick={handleSearch} className='px-4 bg-red-400 w-full'>search</button>
            </div>

    </div>
  )
}

export default HeaderSearch