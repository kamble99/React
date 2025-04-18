import React from 'react'

const Form = ({submit,change}) => {
  return (
    <div>
       <form onSubmit={submit}>
            <b>
            <label>Name</label><br></br>
            <input type="text" name='name' onChange={change} />
            <label>Email</label><br></br>
            <input type="text" name='email' onChange={change} />
            <button type='submit'>Submit</button>
            </b>
        </form>
    </div>
  )
}

export default Form
