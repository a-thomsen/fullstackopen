import React from 'react'

const Person = (props, deletePerson) => {
    return (
      <li>{props.name}  {props.number} <button onClick={props.deletePerson}>Delete</button></li>
    )
  }

  export default Person