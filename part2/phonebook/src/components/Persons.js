import React from 'react';

const Persons = ({data, filter, del}) => {
    
    return(
        <div>
            {data
            .filter(e => e.name.toLowerCase().includes(filter.toLowerCase()))
            .map(n => <div key={n.name}>{n.name} {n.number} {<button onClick={() => del(n.id)}>Delete</button>}</div>)}
        </div>
    )
    
}


export default Persons;