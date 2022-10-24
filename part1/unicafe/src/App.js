import {useState} from "react"

const Button=(props)=>{
  return(
    <button onClick={props.func}>{props.name}</button>
  )
}
const Sta=(props)=>{
  if(props.good===0 && props.bad===0 && props.nuetral===0)
  return(
  <p>no result</p>
  )
  return(
    <div>
      <Stal text='good' val={props.good}></Stal>
      <Stal text='nuetral' val={props.nuetral}></Stal>
      <Stal text='bad' val={props.bad}></Stal>
      <Stal text='all' val={props.good + props.nuetral + props.bad}></Stal>
      <Stal text='average' val={(props.good - props.bad)/props.good + props.nuetral + props.bad}/>
      <Stal text='positive' val={props.good*100/(props.good + props.nuetral + props.bad)}/>

    </div>
  )

} 


const Stal=(props)=>{
  return(
    <tr><td>{props.txt}</td> <td>{props.val}</td></tr>
  )
}
const App =()=>{
  const[good,setGood]=useState(0)
  const[nuetral,setNuetral]=useState(0)
  const[bad,setBad]=useState(0)
  return(
    <div>
    <h1>Feedback</h1>
    <Button name='good' func={()=>setGood(good+1)}></Button>
    <Button name='nuetral' func={()=>setNuetral(nuetral+1)}></Button>
    <Button name='bad' func={()=>setBad(bad+1)}></Button>
    <Sta good={good} bad={bad} nuetral={nuetral}/>
    </div>
  )
}

export default App;
