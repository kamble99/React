function Truck(props){
        const tname=`volvo ${name}`  /*Template string */
        const {truckdetails}=props
        const {color,price}=truckdetails
    return(
        <>
         <h2>Bike Name: {tname}</h2>
        <h2>Color: {color}</h2>
        <h2>Price: {price}</h2>
        </>
    )
}
export default Truck