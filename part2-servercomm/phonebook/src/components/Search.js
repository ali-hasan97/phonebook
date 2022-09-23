import React from "react";
import Book from './Book';
import phonebookServices from "../services/phonebook";
import { useState } from "react";
import axios from 'axios'

const remove = (id, name, personDeleted) => {
  if (window.confirm(`Delete ${name}?`)) {
    phonebookServices
      .removeService(id)
      .then(personDeleted)
  }
}

const Search = ({ persons, personDeleted }) => {
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
              remove={() => remove(person.id, person.name, personDeleted)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Search;
