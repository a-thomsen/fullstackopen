import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import DisplayCountries from './components/DisplayCountries'


const App = () => {
    const [newFilter, setFilter] = useState('')
    const [countries, setCountries] = useState([])


    const hook = () => {
        //console.log('effect')
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                //console.log('promise fulfilled')
                setCountries(response.data)
            });
    }
    useEffect(hook, [])


    const handleFilter = (event) => {
        setFilter(event.target.value)
    }
    const showHandler = (event) => {
        setFilter(event.target.id)
    }

    return (
        <div>
            <Filter newFilter={newFilter} handleFilter={handleFilter} />
            <DisplayCountries data={countries} filter={newFilter} showHandler={showHandler} />
        </div>
    )
}

export default App