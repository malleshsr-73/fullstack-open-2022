const App = () => {
  const course={
    name :'Half Stack application development',
    parts:[
      {
        name:'Fundementals of React',
        excercises:10
      },
      {
        name:'Using props to pass data',
        excercises:7

      },
      {
        name:'State of a component',
        excercises:14
      }
    ]
  }
  return (
    <div>
     <Header course={course}></Header>
     <Content part={course.parts}></Content>
     <Total total={course.parts}></Total>
    </div>
  )
}
const Header =(props)=>{
  console.log(props)
  return (
    <div>
      <h1>
        {props.course.name}

      </h1>
    </div>
  )
}
const Part =(props)=>{
  console.log(props)
  return(
    <div>
      {props.part.name} {props.part.excercises}
    </div>
  )
}
const Content = (props)=>{
  console.log(props)
  return(
    <div>
      <Part part={props.part[0]}></Part>
      <Part part={props.part[1]}></Part>
      <Part part={props.part[2]}></Part>
    </div>
  )
}
const Total =(props)=>{
  console.log(props)
  return(
    <div>
    <p>Number of exercises {props.total[0].excercises+props.total[1].excercises+props.total[2].excercises}</p>
    </div>
  )
}

export default App