import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({text}) => <h1>{text}</h1>
const Button = ({handler, text}) => <button onClick={handler}>{text}</button>
const Statistics = ({good, neutral, bad}) => {
  const sum = good + neutral + bad
  const average = (good - bad) / sum
  const positivePercent = good / sum * 100
  if(sum === 0){
    return (
      <div>No feedback given</div>
    )
  }
  return(
    <div>
    <table>
      <tbody>
        <StatisticLine text="good" value={good}/>
        <StatisticLine text="neutral" value={neutral}/>
        <StatisticLine text="bad" value={bad}/>
        <StatisticLine text="all" value={sum}/>
        <StatisticLine text="average" value={average}/>
        <StatisticLine text="positive" value={positivePercent + " %"}/>
      </tbody>
    </table>
    </div>
  )
}

const StatisticLine = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = (state, setState) => () => setState(state + 1)
  
  return (
    <div>
      <Header text="Give feedback"/>
      <Button handler={handleClick(good, setGood)} text="Good" />
      <Button handler={handleClick(neutral, setNeutral)} text="Neutral" />
      <Button handler={handleClick(bad, setBad)} text="Bad" />
      <Header text="Statistics"/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)