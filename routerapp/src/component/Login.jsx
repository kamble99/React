import React from 'react'
import { useNavigate } from 'react-router'

const Login = () => {

    const nav=useNavigate()
    
    function submit(){
     nav('/dash')
    }
  return (
    <>
    <h1>Login</h1>
    <button onClick={submit}>Submit</button>
    </>
  )
}

export default Login
