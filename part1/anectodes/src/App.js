import { useState } from "react";

var x=0

const App=()=>{
  const Anec=[
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'Brooks Law: "Adding manpower to a late software project makes it later!"',
    ' Premature optimization is the root of all evil in programming.',
    ' Good judgment comes from experience, and experience comes from bad judgment. '    
  ]
  const [selec,setSelec]=useState(0)
  const [votes,setVotes]=useState([0,0,0,0,0,0,0,0,0,0])
  const [max,setMax]=useState({v:0,a:0})

  return(
    <div>
      <h2>Anectode of the day</h2>
      <p>{Anec[selec]}</p>
      <p>{votes[x]}</p>
      <button onClick={()=>{x=Math.floor(Math.random()*Anec.length);setSelec(x)}}>Next Anectode</button>
      <br/>
      <br/>
      <button onClick={()=>{
        const copy=[...votes]
        copy[x]+=1;
        const maobj={...max}
        if(copy[x]>max.v)
        {
          maobj.v=copy[x];
          maobj.a=x
        }
        setMax(maobj)
        setVotes(copy)
      }}>Vote</button>

      <h2>Anectode with more votes</h2>
      <p>{Anec[max.a]}</p>
      <p>votes{max.v}</p>
    </div>
  )
}
export default App;
