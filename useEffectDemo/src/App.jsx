import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [count,setCount]=useState(1)
  const[name,setName]=useState('Geeta')
  const [city, setCity] = useState('Delhi');
  const [age, setAge] = useState(25);
  const data={
    name:'sahil',
    email:'sahildkamble@gmail.com',
    age:19,
    address:'Navi Mumbai'

}
  

      useEffect(()=>{
        console.log('Use Effect')
      // setTimeout(() => {
      //   setCount(count+1)
      // }, 1000);
        
},[count])
  function update(){
    console.log('call Function')
    data((previousState)=>{return previousState+1})
  }
  function updatename(){
    setName('Meena')
  }
  function updatecity(){
    setCity('Mumbai')
  }
  function Age(){
    setAge(19)
  }
  function changecolor(){
    setColor('Red')
  }
  return (
    <>
     <h1>App component</h1>
     <h1>{count}</h1>
     <button onClick={update}>Click</button>

     <h1>Name</h1>
     <h2>{name}</h2>
     <button onClick={updatename}>Click</button>

     <h1>City</h1>
     <h2>{updatecity}</h2>
     <button onClick={updatecity}>CLick</button>

     

    </>
  )
}
export default App
