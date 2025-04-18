import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useReducer } from 'react';

  const initaliazer=0;
  const reducer=(state,action)=>
  {
    switch(action){
      case 'increament':
        return state+1
      case 'decreament':
        return state-1
      default:
        return state
    }
  }
  const App=()=>{
   const[count,dispatch]=useReducer(reducer,initaliazer)
  
  return (
    <>
    {count}
    <button onClick={()=>dispatch('increament')}>+</button>
    <button onClick={()=>dispatch('decreament')}>-</button>
    
      
    </>
  )}


export default App
