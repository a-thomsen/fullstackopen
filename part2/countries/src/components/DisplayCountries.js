import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Weather from './Weather'

const DisplayCountries = ({ data, filter, showHandler }) => {
    const [weather, setWeather] = useState([])

    const filtered = data.filter(country =>
        country.name.toLowerCase().includes(filter.toLowerCase())
    )
    const found = filtered.length;

    const hook = () => {
        if (found === 1) {
            const apikey = process.env.REACT_APP_API_KEY
            const options = {
                method: 'GET',
                url: 'http://api.weatherbit.io/v2.0/current',
                params: { lat: `${filtered[0].latlng[0]}`, lon: `${filtered[0].latlng[1]}`, key: `${apikey}` },
            };

            axios.request(options).then(function (response) {
                setWeather(response.data.data)
            }).catch(function (error) {
                console.error(error);
            });

        }
    }
    // eslint-disable-next-line
    useEffect(hook, [found])


    if (found === 1) {
        return (
            <div>
                <h1>{filtered[0].name}</h1>
                <p>Capital {filtered[0].capital}</p>
                <p>Population {filtered[0].population}</p>
                <h2>Languages</h2>
                <ul>
                    {filtered[0].languages.map(lan =>
                        <li key={lan.name} >{lan.name}</li>
                    )}
                </ul>

                <img src={filtered[0].flag} height="100" alt="flag" />
                <Weather data={weather} />
            </div>
        )
    } else if (found === 0) {
        return (
            <div>Country not found</div>
        )
    }
    else if (found<= 10) {
        return (
            <div>
                <ul>
                    {filtered.map(country =>
                        <li key={country.numericCode}>{country.name} <button id={country.name} onClick={showHandler}>Show</button></li>
                    )}
                </ul>
            </div>
        )
    } else {
        return (
            <div>Multiple matches, specify another filter</div>
        )
    }
}

export default DisplayCountries