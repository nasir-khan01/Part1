 import React from "react";

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
};

const Part1=(props)=>{
console.log("prop part 1",props)
  return(
  <>
  <p>
  {props.part1.name} {props.part1.exercises}
</p>
</>
  )
};

const Part2=(props)=>{
  return(
  <>
 <p>
        {props.part2.name} {props.part2.exercises}
      </p>
  </>
  )
};

const Part3=(props)=>{
  return(
  <>
   <p>
        {props.part3.name} {props.part3.exercises}
      </p>
    </>
  )
};

const Content = (props) => {
  console.log(props,"props in content")
  return (
    <>
     <Part1 part1={props.parts[0]} />
     <Part2 part2={props.parts[1]} />
     <Part3 part3={props.parts[2]} />
    </>
  )
};

const Total = (props) => {
  return (
    <>
      <p>
        Number of exercises{" "}
        {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
      </p>
    </>
  )
};

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
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts}/>
    </div>
  )
};

export default App;
