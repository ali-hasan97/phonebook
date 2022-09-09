import React from "react";
import { useState,useEffect } from "react";
import CountryList from "./CountryList";
import SingleView from "./SingleView";

const Search = ({ countries }) => {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([])
  const [display, setDisplay] = useState(['Be more specific'])

  useEffect(() => {
    setFiltered(
      countries.filter((country) =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, countries]);

  useEffect(() => {
    if  (filtered.length > 20) {
      setDisplay('Be more specific')
    } else if (filtered.length === 1) {
      setDisplay('single')
    } else {
      setDisplay('filtered')
    }
    console.log(display)
    }, [[]]);

  const displayMethod = () => {
    if (display === 'filtered') {
      return (
        <table>
          <tbody>
            {filtered.slice(0,20).map(country => {
              return (
                      <CountryList name={country.name.common} key={country.name.common} />
              )
            })
            }
          </tbody>
        </table>
      )
    } else if (display === 'single') {
        return (
          <div>
            {filtered.map(country => {
              return (
                <SingleView country={country} key={country.name.common} />
              )
            })}
          </div>
        )
    } else {
      return <h2>Be more specific!</h2>
    }
  }

  return (
    <div>
      <div>
        Search:{" "}
        <input
          onChange={(event) => setSearch(event.target.value.toLowerCase())}
        />
      </div>
      <h1>Search a Country</h1>
      {displayMethod()}
    </div>
  );
};

export default Search;