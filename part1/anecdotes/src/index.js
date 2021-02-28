import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({text}) => <h1>{text}</h1>
const Button = ({handler, text}) => <button onClick={handler}>{text}</button>
const Random = (max) => () => Math.floor(Math.random() * Math.floor(max))
const UpdateList = (list, givenIndex) => () => list.map((e, index) => index === givenIndex ? { ...e, votes: e.votes + 1 } : e)
const Statistics = ({data}) => {
  return(
    <div>
      <div>{data.anecdote}</div>
      <div>has {data.votes} votes</div>
    </div>
  )
}
const ShowMostVoted = ({array}) => <Statistics 
  data={array.reduce((prev, curr) => (prev.votes >= curr.votes) ? prev : curr)}
/>

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)
  const [anecdoteState, setAnecdoteState] = useState(() => anecdotes.map(e => ({anecdote: e, votes: 0})))
  const handleClick = (state, setState) => () => setState(state)
  return (
    <div>
      <Header text="Anecdote of the day"/>
      <Statistics data={anecdoteState[selected]}/>
      <Button 
        handler={handleClick(UpdateList(anecdoteState, selected), setAnecdoteState)}
        text="Vote"
      />
      <Button handler={handleClick(Random(anecdoteState.length), setSelected)} text="Next anecdote"/>
      <Header text="Anecdote with most votes"/>
      <ShowMostVoted array={anecdoteState}/>
    </div>
  )
}


const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)