import axios from "axios";
import React from "react";
import { useState } from "react";
import phonebookService from '../services/phonebook'

const Form = ({ persons, setPersons, personDeleted, setSuccess, setFailure }) => {
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let newPerson = {
      name: newName,
      number: newNum
    };

    // check if number already in phonebook
    for (let x in persons) {
      if (persons[x].number === newPerson.number) {
        return alert(`${newPerson.number} is already in the phonebook!`);
      }
    }

    // if person already in phonebook, ask to update
    for (let x in persons) {
      if (persons[x].name === newPerson.name) {
        if (window.confirm(`${newPerson.name} is already in the phonebook, replace the old number with this new one?`)) {
          const id = persons[x].id
          phonebookService
            .updateService(newPerson, id)
            .then(personDeleted)
            .catch(error => {
              setFailure(`${newPerson.name} has already been deleted from the phonebook`)
              setTimeout(() => {
                setFailure(null)
              }, 5000)
              return personDeleted()
            })
          setSuccess(`Updated ${newPerson.name}'s number`)
          setTimeout(() => {
            setSuccess(null)
          }, 5000)
          return
        } else {
          return
        }
      }
    }

    // if person and number are not already in phonebook, add person
    phonebookService
      .createService(newPerson)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
      })
    setSuccess(`Added ${newPerson.name} to the phonebook`)
    setTimeout(() => {
      setSuccess(null)
    }, 5000)
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={(event) => setNewName(event.target.value)} />
        </div>
        <div>
          number: <input onChange={(event) => setNewNum(event.target.value)} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
