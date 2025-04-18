import { useState } from 'react'
function Handlechange(){

    const [input,setInput]=useState()
    function submit(e){
        e.preventDefault()
        console.log('current status: '+input)
    }
    function change(e){
        const name=e.target.name
        const value=e.target.value

        setInput((previousState)=>{return {...previousState,[name]:value}})
    }


    return(
        <>
        <form onSubmit={submit}>
            <b>
            <label>Name</label><br></br>
            <input type="text" name='name' onChange={change} />
            <label>Email</label><br></br>
            <input type="text" name='email' onChange={change} />
            </b>
        </form>
        </>
    )
}
export default Handlechange