import React from 'react';

const PersonForm = ({onFormNameChange, onFormNumberChange, addName, newName, newNumber}) => {
    return (
        <form onSubmit={addName}>
        <div>
          Name: <input onChange={onFormNameChange} value={newName}/>
        </div>
        <div>
          Number: <input onChange={onFormNumberChange} value={newNumber}/>
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    )
}

export default PersonForm;