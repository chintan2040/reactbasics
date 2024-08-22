import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCount] = useState(16)

let addvalue=()=>{
  if(counter>=20){
    console.log("counter can not be greater than 20")
  }
  else{
    setCount(counter+1)
  }
 
}
let removevalue=()=>{
  if(counter<=0){
    console.log("counter can not be less than zero")
  }else{
    setCount(counter-1)

  }
  
}
  return (
    <>
    <div id="d1">
    <p>counter is :{counter}</p>
    <button onClick={addvalue}>add value{counter}</button>
    <button onClick={removevalue}>remove value{counter}</button>
    </div>
     
    </>
  )
}

export default App
