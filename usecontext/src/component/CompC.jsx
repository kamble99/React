import React, { useContext } from 'react'
import {data,data1} from  '../App'


const compC = () => {
  const name=useContext(data) 
  const age= useContext(data1)
  return (
    <>
    <h1>Component C</h1>
    <h2>My name is : {name}</h2>
    <h2>My age is : {age}</h2>
    </>
  )
}

export default compC

