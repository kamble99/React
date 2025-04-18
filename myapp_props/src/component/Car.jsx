function Car(props){
   
    return(
        <>
        <h1>Car Component</h1>
        <h2>Car Name: {props.carname}</h2>
        <h2>Car brand: {props.brand}</h2>
        
        </>
    )
}
export default Car