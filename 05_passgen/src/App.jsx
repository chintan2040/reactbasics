import { useState,useCallback,useEffect,useRef } from 'react'
import './App.css'

function App() {
 const [pass,setPass]=useState("")
 const [Length,setLength]=useState(8)
 const[number,allowedNum]=useState(false)
 const[charecter,allowedchar]=useState(false)

 const passref = useRef(null)
 
const PassGenerator = useCallback(()=>{
let pass1=""
let str1="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklomnopqrstuvwxyz"
 if (number){str1 += "0123456789"} 
    if (charecter){ str1 += "!@#$%^&*-_+=[]{}~`"}

    for (let i = 1; i <= Length; i++) {
      let char = Math.floor(Math.random() * str1.length + 1)
      pass1 += str1.charAt(char)
      
    }
    setPass(pass1)


},[Length,number,charecter,setPass])

const copyPasswordToClipboard = useCallback(() => {
  passref.current?.select();
  window.navigator.clipboard.writeText(pass)
}, [pass])


useEffect(() => {
  PassGenerator()
}, [Length, number, charecter,PassGenerator])

  return (
    <>
    <h1 className='text-white text-center text-2xl mt-3'>PassGenerator</h1>
    <div className="flex items-center justify-center h-screen">
    <div className="p-16 bg-slate-600 mb-96 w-3/4 rounded-md" >
     <input
     type='text'
     value={pass}
     placeholder='password'
     className='outline-none w-2/4'
     readOnly
     ></input>
     <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 ' onClick={copyPasswordToClipboard}>copy</button>
     <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={Length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
         ref={passref}
          />
          <label>Length: {Length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={number}
          id="numberInput"
          onChange={() => {
            allowedNum((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charecter}
              id="characterInput"
              onChange={() => {
                  allowedchar((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default App
