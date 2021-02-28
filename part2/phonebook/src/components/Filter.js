import React from 'react';

const Filter = ({onSearchFieldChange, search}) => {
    return (
        <div>
            Filter shown with
            <input onChange={onSearchFieldChange} value={search} />
        </div>
    )
}

export default Filter