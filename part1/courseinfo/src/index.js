import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({course}) => (
  <h1>{course}</h1>
)

const Content = ({parts}) => {
  return(
    <div>
    {parts.map(part => <Part key={part.name+part.exercises} p={part.name} e={part.exercises}/>)}
    </div>
  )
}

const Part = ({p, e}) => (
  <p>{p} {e}</p>
)

const Total = ({parts}) => {
  return (
    <h4>Total number of exercises {parts.map(e => e.exercises).reduce((sum, parts) => sum + parts)}</h4>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      },
      {
        name: 'Redux',
        exercises: 11
      }
    ]
  }

  return(
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))