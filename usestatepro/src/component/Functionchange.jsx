import { useState } from "react"

function Functionchange(){

    const [color,setColor]=useState('red')
    const [size,setSize]=useState(50)
    return(
        <>
        <h1 style={{color:color}}>Hello</h1>
        <button onClick={()=>{setColor('blue')}}>Blue</button>
        <h1 style={{fontSize:size}}>Heyy</h1>
        <button onClick={()=>{setSize(100)}}>size</button>

        </>
    )
}
export default Functionchange

