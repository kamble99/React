import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [name,setName]=useState('praneet')
  const refElement=useRef()
  function reset(){
    setName('')
    refElement.current.focus()
  }

  return (
    <>
      <input type="text" ref={refElement} value={name} onChange={(e)=>{e.target.value}} />
      <button type='reset' onClick={reset}>Reset</button>
    </>
  )
}

export default App
