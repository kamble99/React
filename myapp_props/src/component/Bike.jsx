function Bike(props){

    const text=`Bike Name ${name}`  /*Template string */
    const {bikedetails}=props
    const {color,price}=bikedetails
    return (
        <>  
        <h2>Bike Name: {text}</h2>
        <h2>Color: {color}</h2>
        <h2>Price: {price}</h2>
        

        </>
    )
}
export default Bike