import React from 'react'

function CountryList({countries, addSearchTerm}) {  
  return (
    <div className='mx-auto w-1/2 p-2'>
        <div className='block w-full  border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-200 sm:text-sm sm:leading-6'>
            {countries.map((country) => <div onClick={()=>addSearchTerm(country)} key={country} className='p-4 ring-1 ring-inset ring-gray-300'>{country}</div>)}
        </div>
    </div>
  )
}

export default CountryList