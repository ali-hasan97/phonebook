import React from "react";
import { useState } from "react";

const Form = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let newPerson = {
      name: newName,
      number: newNum,
    };
    for (let x in persons) {
      if (persons[x].name === newPerson.name) {
        return alert(`${newPerson.name} is already in the phonebook!`);
      }
      if (persons[x].number === newPerson.number) {
        return alert(`${newPerson.number} is already in the phonebook!`);
      }
    }
    setPersons(persons.concat(newPerson));
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
