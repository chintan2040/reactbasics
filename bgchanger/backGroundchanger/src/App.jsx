import { useState } from 'react'


function App() {
  const [color,setcolor]= useState("olive")

  return (
    <>
    <div className="w-screen h-screen duration-200" 
     style={{backgroundColor: color}}>
    <div className='flex flex-wrap fixed justify-center bottom-10 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-lg px-5 py-3'>
        <button onClick={()=>setcolor("red")}  style={{backgroundColor:"red"}}>red</button>
        <button onClick={()=>setcolor("blue")}  style={{backgroundColor:"blue"}}>blue</button>
        <button onClick={()=>setcolor("green")}  style={{backgroundColor:"green"}}>green</button>
        <button onClick={()=>setcolor("yellow")}  style={{backgroundColor:"yellow"}}>yellow</button>

      </div>
        </div>   
    </div>
    </>
  )
}

export default App
