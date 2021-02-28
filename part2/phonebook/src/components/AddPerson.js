import React from 'react'

const NewPerson = (props) => {
    return (
        <form onSubmit={props.addPerson}>
        Name:
        <input
            value={props.newName}
            onChange={props.handleNameChange} />
            <br />
        Number:
        <input
            value={props.newNumber}
            onChange={props.handleNumberChange} />
            <br />
        <button type="submit">Add</button>
        </form> 
    ) 
}

export default NewPerson