import React from "react";
class StateDemo extends React.Component{

    constructor(){
        super()
        this.state={color:'red'}
    }
    render(){
        return(
            <>
            <h2>My favourite color: {this.state.color}</h2>
            <button onClick={()=>{this.setState({color:'blue'})}}>change</button>
            </>
        )
            
          
        
    }
}

export default StateDemo