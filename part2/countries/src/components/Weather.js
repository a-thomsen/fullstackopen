import React from 'react'

const Weather = ({ data }) => {
    const weather = data[0]
    if (data.length === 1) {
        const icon = `https://www.weatherbit.io/static/img/icons/${weather.weather.icon}.png`
        const weatheralter = weather.weather.description

        return (
            <div>
                <p><b>Temperature: </b> {weather.temp} Celsius</p>
                <img src={icon} alt={weatheralter} />
                <p><b>Wind:</b> {weather.wind_spd} m/s, direction: {weather.wind_cdir}</p>
            </div>)
    } else {
        return (
            <div>
                Unable to load weather
            </div>)
    }
}


export default Weather