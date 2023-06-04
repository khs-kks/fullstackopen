import { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personService from './services/bckend.js';
const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const data = await personService.getAll()
      setPersons(data)
    }
    fetchData()
  }, [])

  // useEffect(() => {
  //   setNewName('')
  //   setNewNumber('')
  // }, [persons])
  const handleSubmit = async (event) => {
    event.preventDefault()

    const nameToAdd = newName;
    if (persons.some(person => person.name === nameToAdd)) {
      alert(`${nameToAdd} is already added to the phonebook`)
    } else {
      const newPerson = { name: newName, number: newNumber };

      try {
        const data = await personService.create(newPerson)
        setPersons(persons.concat(data))
      } catch (error) {
        console.log(error)
      }
    }
  }

  const handleInputChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleDeletePerson = async (id) => {
    const personToDelete = persons.find(person => person.id === id);
    const confirmDelete = window.confirm(`Delete ${personToDelete.name}?`);
    if (confirmDelete) {
      try {
        await personService.remove(id)
        setPersons(persons.filter(person => person.id !== id))
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
      <PersonForm handleSubmit={handleSubmit} handleInputChange={handleInputChange} handleNumberChange={handleNumberChange} newName={newName} newNumber={newNumber} />
      <h2>Numbers</h2>
      <Persons persons={persons} searchTerm={searchTerm} handleDeletePerson={handleDeletePerson}></Persons>
    </div >
  )
}

export default App;
