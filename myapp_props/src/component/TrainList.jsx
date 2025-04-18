function TrainList(props){
    const{tlist}=props
    const {name,code}=tlist
    return(
        <>
            <h2>{name}{code}</h2>
            
        </>
    )
}
export default TrainList