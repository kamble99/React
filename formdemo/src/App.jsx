import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Handlechange from './component/handlechange'

function App() {

  const [name, setName] = useState()
  const [finalname,setfinalname]=useState()
  // const [email, setEmail] = useState()
  // const [password, setPassword] = useState()
  // const [age, setAge] = useState()
 
 
  function submit(e)
    {
    e.preventDefault()
    setfinalname(name)

  }

  //console.log('current status: ' + name,email,password,age)


  return (
    <>
      {/* <form>
        <table border='none'>
          <tr>
        <td><label>Name: </label></td>
        <td><input type="text" onChange={(e) => { return setName(e.target.value) }} /></td>
        </tr>
        <tr>
        <td><label>Email: </label></td>
        <td><input type="text" onChange={(e) => { return setEmail(e.target.value) }} /></td>
        </tr>
        <tr>
       <td> <label> Password: </label></td>
        <td><input type="text" onChange={(e) => { return setPassword(e.target.value) }} /></td>
         </tr>
        <tr>
        <td><label>Age: </label></td>
       <td> <input type="text" onChange={(e) => { return setAge(e.target.value) }} /><br></br></td>
        </tr>
        <tr>

        </tr>
        </table>
        
      <button type='submit'>Submit</button>
      </form> */}

      {/* <form onSubmit={submit}>
  <b>
        <table border='none'>
          <tr>
          
        <td><label>Name: </label></td>
        <td><input type="text" onChange={(e) => { return setName(e.target.value) }} /></td>
        </tr>
        <tr>
        <td><label>Email: </label></td>
        <td><input type="text" onChange={(e) => { return setEmail(e.target.value) }} /></td>
        </tr>
        <tr>
       <td> <label> Password: </label></td>
        <td><input type="text" onChange={(e) => { return setPassword(e.target.value) }} /></td>
         </tr>
        <tr>
        <td><label>Age: </label></td>
       <td> <input type="text" onChange={(e) => { return setAge(e.target.value) }} /><br></br></td>
        </tr>
        <tr>

        </tr>
        </table>
        
      <button type='submit'>Submit</button>
      </b>
      </form> */}
      {/* <form onSubmit={submit}>
  <b>
        <table border='none'>
          <tr>
          
        <td><label>Name: </label></td>
        <td><input type="text" onChange={(e)=>{return setInput((previousState)=>{return {...previousState,name:e.target.value}})}}/></td>
        </tr>
        <tr>
        <td><label>Email: </label></td>
        <td><input type="text" onChange={(e)=>{return setInput((previousState)=>{return{...previousState,email:e.target.value}})}}/></td>
        </tr>
        <tr>
       <td> <label> Password: </label></td>
       <td><input type="text" onChange={(e)=>{return setInput((previousState)=>{return{...previousState,password:e.target.value}})}}/></td>

         </tr>
        <tr>
        <td><label>Age: </label></td>
        <td><input type="text" onChange={(e)=>{return setInput((previousState)=>{return{...previousState,age:e.target.value}})}}/></td>

        </tr>
        <tr>

        </tr>
        </table>
        
      <button type='submit'>Submit</button>
      </b>
      </form>        */}
      <form onSubmit={submit}>
        <b>
         
              <label> Student Name: {name} </label><br></br>
              <label> Student Name: {finalname} </label><br></br>

              <input type="text" onChange={(e) => { return setName(e.target.value) }} /><br></br>
           

          <button type='submit'>Submit</button>
        </b>
      </form>
      <Handlechange/>
    </>

  )
}

export default App
