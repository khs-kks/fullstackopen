import { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personService from './services/bckend.js';
import Notification from './components/Notification';
const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [notifyMessage, setNotifyMessage] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const data = await personService.getAll()
      setPersons(data)
    }
    fetchData()
  }, [])

  useEffect(() => {
    setNewName('')
    setNewNumber('')
  }, [persons])
  const handleSubmit = async (event) => {
    event.preventDefault()

    const nameToAdd = newName;
    const existingPerson = persons.find(person => person.name === nameToAdd)

    if (existingPerson) {
      // If the person already exists, ask the user to confirm updating the number
      const confirmUpdate = window.confirm(`${nameToAdd} is already added to the phonebook, replace the old number with a new one?`);

      if (confirmUpdate) {
        const updatedPerson = { ...existingPerson, number: newNumber };

        try {
          const data = await personService.update(existingPerson.id, updatedPerson)
          setPersons(persons.map(person => person.id === existingPerson.id ? data : person))
          setNotifyMessage(`Updated ${data.name}`)
          setTimeout(() => {
            setNotifyMessage(null)
          }, 5000)
        } catch (error) {
          console.log(error)
        }
      }
    } else {
      const newPerson = { name: newName, number: newNumber };

      try {
        const data = await personService.create(newPerson)
        setPersons(persons.concat(data))
        setNotifyMessage(`Added ${data.name}`)
        setTimeout(() => {
          setNotifyMessage(null)
        }, 5000)
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
        setNotifyMessage(`Deleted ${personToDelete.name}`)
        setTimeout(() => {
          setNotifyMessage(null)
        }, 5000)
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notifyMessage} />
      <Filter searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
      <PersonForm handleSubmit={handleSubmit} handleInputChange={handleInputChange} handleNumberChange={handleNumberChange} newName={newName} newNumber={newNumber} />
      <h2>Numbers</h2>
      <Persons persons={persons} searchTerm={searchTerm} handleDeletePerson={handleDeletePerson}></Persons>
    </div >
  )
}

export default App;
