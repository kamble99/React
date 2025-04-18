/*class based component*/
import React from "react"
class Airway extends React.Component{
    render(){

        const {airticket}=this.props
        return(
            <>
            <h2>Airway class Based Component</h2>
            <h3>Airticket:{airticket}</h3>
            </>
        )

    }
}
export default Airway