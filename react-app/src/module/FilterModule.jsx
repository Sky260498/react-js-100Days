import { useState } from 'react';
import Filter from '../component/Filter';
import CountryList from '../component/CountryList';
import countries from '../data/countryList';

function FilterModule() {    
      const [countryList, setCountryList] = useState(countries);
    
      const filterCountryList = (searchTerm) => {
        if(searchTerm == "") {
          return;
        } else {
          const filteredCountries = countries.filter((country) =>  country.toLowerCase().includes(searchTerm.toLowerCase()));
          setCountryList(filteredCountries);
        }
      }
  return (
    <div>
        <Filter filterCountryList={filterCountryList} />
      <CountryList countries={countryList} />
    </div>
  )
}

export default FilterModule