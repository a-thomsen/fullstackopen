import React from 'react'

const DisplayCountry = ({country, weather}) => {
    return (
    <div>
        <h1>{country.name}</h1>
        <div>Capital {country.capital}</div>
        <div>Population {country.population}</div>
        <h2>Languages</h2>
        <ul>
            {country.languages.map(e => <li key={e.name}>{e.name}</li>)}
        </ul>
        <img width={100} hight={100} src={country.flag} alt={`Flag of ${country.name}`}/>
        {
            !weather ? 
            <div>Loading data...</div> 
            :
            <div>
                <h2>Weather in {weather.location.name}</h2>
                <div><strong>Temperature:</strong> {weather.current.temperature} degree Celsius</div>
                <img width={40} height={40} src={weather.current.weather_icons[0]} alt={weather.current.weather_descriptions[0]}/>
                <div><strong>Wind:</strong> {weather.current.wind_speed} mph, Direction {weather.current.wind_dir}</div>
            </div>
        }
        
    </div>
    )
}

export default DisplayCountry