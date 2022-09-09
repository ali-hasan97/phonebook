const CountryList = ({ name, setSearch, search }) => {
    const handleShow = (event) =>  {
        setSearch(event.target.id)
        console.log(search)
        console.log(event.target.id)
    }

    return (
        <tr>
            <td>{name}</td>
            <td><button id={name} key={name} onClick={(event) => handleShow(event)}>show</button></td>
        </tr>
        );    
}

export default CountryList