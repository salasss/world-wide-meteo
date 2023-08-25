import React, { useState } from 'react'
import { AsyncPaginate } from "react-select-async-paginate";
import { geo_api, geoApiOptions } from '../Api/Api'
function Searchbar({ onSearchChange }) {

  const [search, setSearch] = useState(null);
  const handelOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  }
  const loadOptions = (inputValue) => {
    return fetch(`${geo_api}/cities?minPopulation=1000&namePrefix=${inputValue}`, geoApiOptions)
      .then(Response => Response.json())
      .then(Response => {
        return {
          options: Response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name} ${city.countryCode}`,
            }
          })
        }
      })
      .catch(err => console.error(err));
  }


  return (
    <div className="container">
      <AsyncPaginate
        placeholder="Trouver la météo dans une ville"
        debounceTimeout={600}
        value={search}
        onChange={handelOnChange}
        loadOptions={loadOptions}
      />
    </div>
  )
}

export default Searchbar;
