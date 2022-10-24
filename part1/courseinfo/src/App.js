const Header=(props)=>{
  return(
    <h1>{props.course.name}</h1>
  )
}

const Part=(props)=>{
  return(
    <p>
      {props.part.name} : {props.part.exe}
    </p>
  )
}

const Content=(props)=>{
  return(
    <div>
      <Part part={props.part[0]}/>
      <Part part={props.part[1]}/>
      <Part part={props.part[2]}/>
    </div>
  )
}

const Total=(props)=>{
  return(
    <p>
      Number of execercises{props.total[0].exe + props.total[1].exe + props.total[2].exe}
    </p>
  )
}
const App=()=>{
  const course={
    name :'Half Stack application development',
    parts :[
      {
        name :'Fundementals of React',
        exe:10
      },
      {
        name : 'Using props to pass data',
        exe : 7
      },
      {
        name :'State of a compomnent',
        exe:14
      }
    ]
  }

  return(
    <div>
      <Header course={course}/>
      <Content part={course.parts}/>
      <Total total={course.parts}/>
    </div>
  )
}

export default App;
