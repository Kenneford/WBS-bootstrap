import React from 'react'

export default function Countries({countries, continent}) {
    const countriesList = countries.map((country, id)=>{
        <div key={id}>
            <div>{country.code}</div>
            <div>{country.name}</div>
            <div>{country.capital}</div>
        </div>
    })
  return (
    <div>
        <h1>Counties in {continent}</h1>
        {countriesList}
    </div>
  )
}
