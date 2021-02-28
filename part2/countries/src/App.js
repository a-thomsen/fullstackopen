import React, {useEffect, useState} from 'react';
import Filter from './components/Filter'
import DisplayCountries from './components/DisplayCountries'
import axios from 'axios'
import DisplayCountry from './components/DisplayCountry';
import weatherService from './services/weather'

function App() {
  const [ countryData, setCountryData ] = useState([])
  const [ filter, setFilter ] = useState('')
  const [ weather, setWeather ] = useState(null)
  const [ gotWeather, setWeatherGotten ] = useState(false)

  useEffect(() => {
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(res => {setCountryData(res.data)})
  }, [])
  
  const scope = Filter.filteredData(countryData, filter)
  const single = () => scope.length === 1 ? scope[0] : null
  
  const getWeather = (capital) => {
    weatherService
    .getCurrent(capital)
    .then(res => {
      setWeather(res.data)
    })
  }

  const onFilterChange = (event) => setFilter(event.target.value)
  const onButtonClick = (data) => setFilter(data)

  if(!gotWeather && single()){
    getWeather(single().capital)
    setWeatherGotten(true)
  }

  if(!single() && gotWeather){
    setWeatherGotten(false)
  }
  

  return (
    <div>
      <Filter.filterBox onChange={onFilterChange} value={filter} />
      { 
        single() 
        ? <DisplayCountry country={scope[0]} weather={weather}/>
        : <DisplayCountries countryData={scope} onClick={onButtonClick}/>
      }
    </div>
  )
}

export default App