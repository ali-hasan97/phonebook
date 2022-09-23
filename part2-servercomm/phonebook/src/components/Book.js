const Book = ({ name, number, search, remove }) => {
    if (
      name.toLowerCase().includes(search) | number.toLowerCase().includes(search)
    ) {
      return (
        <tr>
          <td>{name}</td>
          <td>{number}</td>
          <td><button onClick={remove}>Delete</button></td>
        </tr>
      );
    }
  };

export default Book