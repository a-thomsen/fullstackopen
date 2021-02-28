import React from 'react'

const filterBox = ({onChange, value}) => {
    return (
        <div>
            Find countries
            <input onChange={onChange} value={value} />
        </div>
    )
}

const filteredData = (countryData, filter) => countryData
    .filter(e => e.name
        .toLowerCase()
        .includes(filter
            .toLowerCase()
        )
    )

export default { filterBox, filteredData }