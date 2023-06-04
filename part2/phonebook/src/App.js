import { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import axios from 'axios';
const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    // axios
    //   .get('http://localhost:3001/persons')
    //   .then(response => {
    //     setPersons(response.data)

    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:3001/persons')
        setPersons(response.data)
      } catch (error) {
        console.log(error)
      }
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
        const response = await axios.post("http://localhost:3001/persons", newPerson)
        setPersons(persons.concat(response.data))
        setNewName('')
        setNewNumber('')
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

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
      <PersonForm handleSubmit={handleSubmit} handleInputChange={handleInputChange} handleNumberChange={handleNumberChange} newName={newName} newNumber={newNumber} />
      <h2>Numbers</h2>
      <Persons persons={persons} searchTerm={searchTerm}></Persons>
    </div >
  )
}

export default App;
