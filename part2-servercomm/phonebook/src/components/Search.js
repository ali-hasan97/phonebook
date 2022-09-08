import React from "react";
import { useState } from "react";

const Book = ({ name, number, search }) => {
  if (
    name.toLowerCase().includes(search) | number.toLowerCase().includes(search)
  ) {
    return (
      <tr>
        <td>{name}</td>
        <td>{number}</td>
      </tr>
    );
  }
};

const Search = ({ persons }) => {
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
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Search;
