import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const name='sahil'
  const age=24
  const Salary=1000

  return (
    <>
      <h1>Hello</h1>
      <h1>Name: {name}</h1> 
      <h1>Age: {age}</h1>
      <h1>Salary: {Salary}</h1>
    </>
  )
}

export default App
