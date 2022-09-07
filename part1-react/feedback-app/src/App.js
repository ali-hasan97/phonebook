import { useState } from 'react'

const Heading = () => <h1>Give Feedback!</h1>
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>
const Statistics = () => <h1>Statistics</h1>

const Stats = ({ good, neutral, bad }) => {
  let total = good + neutral + bad

  if (total === 0) {
    return <p>No feedback given</p>
  }

  const averageCalc = () => ((good-bad)/total).toFixed(2)
  const positiveCalc = () => (100*good/total).toFixed(2)

  return (
  <table>
    <tbody>
      <tr><td>Good:</td><td>{good}</td></tr>
      <tr><td>Neutral:</td><td>{neutral}</td></tr>
      <tr><td>Bad:</td><td>{bad}</td></tr>
      <tr><td>Total:</td><td>{total}</td></tr>
      <tr><td>Average:</td><td>{averageCalc()}</td></tr>
      <tr><td>Positive:</td><td>{positiveCalc()}%</td></tr>
    </tbody>
  </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Heading />
      <Button onClick={() => setGood(good+1)} text='Good' />
      <Button onClick={() => setNeutral(neutral+1)} text='Neutral' />
      <Button onClick={() => setBad(bad+1)} text='Bad' />
      <Statistics />
      <Stats good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App