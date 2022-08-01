import React from 'react'

function Countries({countries, continent}) {
    const countriesList = countries.map((country, id)=>(
        <div key={id} className="continent">
            <div><p>{country.code}</p></div>
            <div><p>{country.name}</p></div>
            <div><p>{country.capital}</p></div>
        </div>
    ))
  return (
    <div>
        <h1>Countries in {continent}</h1>
        {countriesList}
    </div>
  )
}
export default Countries;
