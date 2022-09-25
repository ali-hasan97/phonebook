import { useState, useEffect } from 'react'
import Search from './components/Search'
import Form from './components/Form'
import Success from './components/Success'
import Failure from './components/Failure'
import phonebookService from './services/phonebook'

const App = () => {
  const [persons, setPersons] = useState([])
  const [success, setSuccess] = useState(null)
  const [failure, setFailure] = useState(null)

  const hook = () => {
    phonebookService
      .getService()
      .then(returnedPersons => {
        setPersons(returnedPersons)
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