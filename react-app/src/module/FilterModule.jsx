import { useState } from 'react';
import Filter from '../component/Filter';
import CountryList from '../component/CountryList';
import countries from '../data/countryList';

function FilterModule() {    
      const [countryList, setCountryList] = useState(countries);
      const [searchArray, setSearchArray] = useState([]);
    
      const filterCountryList = (searchTerm) => {
        if(searchTerm == "") {
            setCountryList(countries);
        } else {
          const filteredCountries = countries.filter((country) =>  country.toLowerCase().includes(searchTerm.toLowerCase()));
          setCountryList(filteredCountries);
        }
      }

      const addSearchTerm = (addedTerm) => {
        countries.forEach((country) => {
            if(country.toLowerCase().includes(addedTerm.toLowerCase()) && !searchArray.includes(addedTerm.toLowerCase())) {
                setSearchArray([...searchArray, addedTerm.toLowerCase()]);
            }
        });        
      }

      const removeSearchTerm = (removedTerm) => {
        searchArray.filter((term) => !term.includes(removedTerm));
      }

  return (
    <div>
        <Filter filterCountryList={filterCountryList} addSearchTerm={addSearchTerm} removeSearchTerm={removeSearchTerm} searchedData={searchArray} />
        <CountryList countries={countryList} />
    </div>
  )
}

export default FilterModule