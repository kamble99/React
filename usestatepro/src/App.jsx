
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StateDemo from './component/StateDemo'
import Functionchange from './component/Functionchange'

function App() {
  
  const [count,setCount]=useState(1)
  const [color,setColor]=useState('red')
  function handleclick(){
    let num=count + 1
    setCount(num )
  }
  function handleclick2(){
    let num=count -1
    setCount(num)
  }
  function changcolor(){
    setColor('blue')
  }
  return (
    <>
      
      <button color='btn-danger' onClick={handleclick}>+</button> 
      <h3>Count: {count}</h3>
      <button color='btn-danger' onClick={handleclick2}>-</button>
      <h3>color: {color}</h3>
      <button onClick={changcolor}>change</button> 

    <StateDemo/>
    <Functionchange/>
    </>
  )
}

export default App
