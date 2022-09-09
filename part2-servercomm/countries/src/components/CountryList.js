import { useEffect } from "react"
import SingleView from "./SingleView"

const CountryList = ({ name, setSearch, search, country, setFiltered }) => {
    const handleShow = (event) =>  {
        console.log(search)
        console.log(event.target.id)
        setFiltered([country])
    }

    return (
        <tr>
            <td>{name}</td>
            <td><button id={name} key={name} country={country} onClick={(event) => handleShow(event)}>show</button></td>
        </tr>
        );    
}

export default CountryList