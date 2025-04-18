import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useMemo } from 'react'

function App() {
  const [add,setadd]=useState(0)
  const [minus,setminus]=useState(100)

 
  const multi=useMemo(
    function multi(){
      console.log('Om Shanti Shanti')
      return add *10
    },[add])

  return (
    <>
    {multi}<br></br>
    {add}<br></br>
    <button onClick={()=>setadd(add+1)}>+</button><br></br>

    {minus}<br></br>
    <button onClick={()=>setminus(minus-1)}>-</button>
    
    </>
  )
}

export default App
