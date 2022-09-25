import { useState, useEffect } from 'react'
import Search from './components/Search'
import Form from './components/Form'
import axios from 'axios'
import Success from './components/Success'
import Failure from './components/Failure'

const App = () => {
  const [persons, setPersons] = useState([])
  const [success, setSuccess] = useState(null)
  const [failure, setFailure] = useState(null)

  const hook = () => {
    axios
    .get('/api/persons')
    .then((response) => {
      setPersons(response.data)
    })
  }
  useEffect(hook,[])

  const personDeleted = hook

  return (
    <div>
      <h2>Phonebook</h2>
      <Success success={success} />
      <Failure failure={failure} />
      <Form 
        persons={persons} 
        setPersons={setPersons} 
        personDeleted={personDeleted} 
        setSuccess={setSuccess}
        setFailure={setFailure}
      />
      <Search 
        persons={persons} 
        personDeleted={personDeleted} 
        setSuccess={setSuccess}
        setFailure={setFailure}
      />
    </div>
  )
}

export default App