import React from 'react'
import Earth from '../icons/Earth'

function Filter({filterCountryList}) {
  return (
    <div className="main-container">
      <div className='mx-auto w-1/2 p-2'>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm"><Earth /></span>
        </div>
        <input
          type="text"
          name="country"
          id="country"
          onChange={(e)=>filterCountryList(e.target.value)}
          className="block w-full rounded-md border-0 py-3 pl-12 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-200 sm:text-sm sm:leading-6"
          placeholder="Search For Country"
        />
      </div>

      </div>
    </div>
  )
}

export default Filter