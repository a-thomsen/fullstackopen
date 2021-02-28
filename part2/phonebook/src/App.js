import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import contactService from './services/contacts'
import Message from './components/Message'


const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ search, setSearch ] = useState('')
  const [ messages, setMessages ] = useState(null)
  var msgTimeout;

  useEffect(() => {
    contactService.getAll().then(res => {setPersons(res)})
    .catch(error => {
      console.log(error.response.data)
    })
  }, [])

  const inform = (message, error) => {
    clearTimeout(msgTimeout)
    const theMessage = <Message message={message} error={error}/>
    setMessages(theMessage)
    msgTimeout = setTimeout(() => {
      setMessages(null)
    }, 10000)
  }

  const addOrUpdateContact = (event) => {
    event.preventDefault()
    if(persons.map(e => e.name).includes(newName)){
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with new one?`)){
        updateNumber(persons.find(e => e.name === newName).id, newNumber)
      }
    } else {
      addName(event)
    }

    setNewName('')
    setNewNumber('')
  }

  const addName = (event) => {
    const personObj = {
        name: newName,
        number: newNumber
    }
    persons.map(e => e.name).includes(personObj.name) ? window.alert(`${personObj.name} is already added to phonebook`) :
    contactService.create(personObj).then(resObj => {
      setPersons(persons.concat(resObj))
      inform(`Added ${resObj.name}`, false)
    })
    .catch(error => {
      console.log(error.response.data)
      inform(`${error.response.data.error}`, true)
    })
    
  }

  const removeContact = (id) => {
    const saveContact = persons.find(e => e.id === id)
    contactService
    .remove(id).then(res => {
      inform(`Deleted contact ${saveContact.name}`, false)
    })
    .catch(error => {
      console.log(error.response.data)
      const data = error.response.data
      inform(`${data.error}`, true)
    })
    const updatedContacts = persons.filter(e => e.id !== id)
    setPersons(updatedContacts)
  }

  const updateNumber = (id, number) => {
    const contact = persons.find(n => n.id === id)
    const changed = {...contact, number: number }
    contactService.update(id, changed).then(returnedContact => {
      setPersons(persons.map(person => person.id !== id ? person : returnedContact))
      inform(`Updated number of ${returnedContact.name} to ${returnedContact.number}`, false)
    })
    .catch(err => {
      setPersons(persons.filter(p => p.id !== id))
      inform(`Information of ${contact.name} has already been removed from server`, true)
    })
  }

  const onFormNameChange = (event) => setNewName(event.target.value)
  const onFormNumberChange = (event) => setNewNumber(event.target.value)
  const onSearchFieldChange = (event) => setSearch(event.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
      <div>{messages ? messages : <div></div>}</div>
      <Filter onSearchFieldChange={onSearchFieldChange} search={search} />
      <PersonForm 
        addName={addOrUpdateContact} 
        onFormNameChange={onFormNameChange} 
        newName={newName}
        onFormNumberChange={onFormNumberChange} 
        newNumber={newNumber} 
      />
      <h2>Numbers</h2>
      <Persons data={persons} filter={search} del={removeContact}/>
    </div>
  )

}

export default App