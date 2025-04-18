import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './component/form'

function App() {
 const [input,setInput]=useState({})

 function change(e){
  const name=e.target.name
  const value=e.target.value

  setInput((previousState)=>{return {...previousState,[name]:value}})
}
function submit(e){
  e.preventDefault()
  console.log('current status: ',input)
}
  return (
    <>
    <h1>App Component</h1>
    <h3>Name: {input.name}</h3>
    <Form  change={change} submit={submit}/>
    </>
  )
}

export default App
