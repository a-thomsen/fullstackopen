import React from 'react'
import Button from './Button'

const DisplayCountries = ({countryData, onClick}) => {
    if(countryData.length > 10){
        return(
            
            <div>Too many matches, please specify another filter
            </div>
        )
    }

    if(countryData.length === 0){
        return (
            <div>There is nothing... Please specify another filter</div>
        )
    }

    return (
    <div>
        {countryData.map(e => 
            <div 
                key={e.name}>
                {e.name} 
                <Button onClick={() => onClick(e.name)} text="show"/> 
            </div>
        )}
    </div>
    )
}

export default DisplayCountries