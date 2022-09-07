import { useState } from "react"

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const Display = ({counter}) => <div>{counter}</div>
  const Increment = () => setCounter(counter + 1)
  const Decrement = () => setCounter(counter - 1)
  const Zero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={Increment} text='plus' />
      <Button onClick={Decrement} text='minus' />
      <Button onClick={Zero} text='reset' />
    </div>
  )
}

export default App;