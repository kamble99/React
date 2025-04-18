import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Demo from './component/Demo'
import Header from './component/header'

function App() {


  function handle(){
    alert('this is handle function')
  }
  const obj=[
    {'name':'Geeta'},
    {'age':25} 
  ]
  return (
    <>
     <h1 className='a'>This is app component</h1>
     <p style={{'color':'green'}}>This is Paragraph</p>
     <h3>{obj[0].name}</h3>
     <h3>{obj[1].age}</h3>
     <button onClick={handle}>Click</button>
     <Header/>
     <Demo/>
    </>

    
  )
  
}

export default App
