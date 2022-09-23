import React from "react";
import Book from './Book';
import phonebookServices from "../services/phonebook";
import { useState } from "react";

const remove = (id, name, personDeleted, setSuccess, setFailure) => {
  if (window.confirm(`Delete ${name}?`)) {
    phonebookServices
      .removeService(id)
      .then(personDeleted)
      .catch(error => {
        setFailure(`${name} has already been deleted from the phonebook`)
        setTimeout(() => {
          setFailure(null)
        }, 5000)
        return personDeleted()
      })
    setSuccess(`Deleted ${name} from the phonebook`)
    setTimeout(() => {
      setSuccess(null)
    }, 5000)
  }
}

const Search = ({ persons, personDeleted, setSuccess, setFailure }) => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <div>
        Search:{" "}
        <input
          onChange={(event) => setSearch(event.target.value.toLowerCase())}
        />
      </div>
      <h2>Numbers</h2>
      <table>
        <tbody>
          {persons.map((person) => (
            <Book
              key={person.name}
              name={person.name}
              number={person.number}
              search={search}
              remove={() => remove(person.id, person.name, personDeleted, setSuccess, setFailure)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Search;
