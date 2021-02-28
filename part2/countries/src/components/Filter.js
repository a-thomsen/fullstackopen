import React from 'react'

const Filter = ({ newFilter, handleFilter }) => {
    return (
        <div>
            Find countries <input value={newFilter} onChange={handleFilter} />
        </div>
    )
}

export default Filter