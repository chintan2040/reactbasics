import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './componets/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <Card username='shy'/>    
<Card username='chintan'/>
    </>
  )
}

export default App
