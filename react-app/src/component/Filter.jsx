import React, { useState } from 'react'
import Earth from '../icons/Earth'

function Filter({filterCountryList, addSearchTerm, searchedData}) {
  const [inputVal, setInputVal] = useState('');
  const handleKeyEvent =(e)=> {
    if(e.key == " " ||
    e.code == "Space" ||      
    e.keyCode == 32 || e.keyCode == 13) {
      addSearchTerm(e.target.value);     
      setInputVal("");
      filterCountryList("");
    }
  }

  const handleChangeEvent =(e)=> {
    setInputVal(e.target.value);
    filterCountryList(e.target.value);
  }

  return (
    <div className="main-container">
      <div className='mx-auto w-1/2 p-2'>
        <div className="relative mt-2 rounded-md shadow-sm">
          <div>
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-500 sm:text-sm"><Earth /></span>
            </div>        
            <input
              type="text"
              name="country"
              id="country"
              value={inputVal}
              onChange={(e)=>handleChangeEvent(e)}
              onKeyUp={(e)=>handleKeyEvent(e)}
              className="block w-full rounded-md border-0 py-3 pl-12 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-200 sm:text-sm sm:leading-6"
              placeholder="Search For Country"
            />
          </div>        
        </div>
        <div>
          {
            searchedData.length > 0 && <div className='rounded-md px-2 pt-2 flex flex-wrap w-full border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-200 sm:text-sm sm:leading-6'>
            {searchedData.map((searchTerm)=><div key={searchTerm} className='capitalize rounded-md px-2 mx-1 mb-2 ring-1 ring-inset ring-gray-300'>{searchTerm}</div>)}
          </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Filter