import React from 'react';

const Header = ({text}) => (
    <h1>{text}</h1>
  )
  
  const Content = ({parts}) => 
    <div>
      {parts
        .map(part => 
          <Part 
            key={part.name+part.exercises} 
            p={part.name} 
            e={part.exercises}
          />
        )
      }
    </div>
  
  const Part = ({p, e}) => <p>{p} {e}</p>
  
  const TotalExercises = ({parts}) => <b>
    Total of {
      parts
      .map(e => e.exercises)
      .reduce((prev, curr) => prev + curr)
    } exercises
    </b>
  
  const Course = ({course}) => {
    return (
      <div>
        <Header text={course.name}/>
        <Content parts={course.parts}/>
        <TotalExercises parts={course.parts}/>
      </div>
    );
  }

export default Course