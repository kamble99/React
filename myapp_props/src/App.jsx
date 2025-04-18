import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Car from './component/car'
import Bike from './component/Bike'
import Truck from './component/Truck';
import Airway from './component/Airway';
import TrainList from './component/TrainList';
function App() {

    const carname='honda'
    const brand='city'
    const bikedetails={color:'red',price:10000}
    const truckdetails={color:'white',price:2500000}
    const airticket='jet'
    const trainlist=[
      {name:'bandra express',code:10111},
      {name:'tirupati express',code:10112},
      {name:'rajasthan express',code:10113},
      {name:'Maharashtra express',code:10114},
      
    ]


  return (
    <>
  
    <Car carname={carname} brand={brand}/>
    <Bike name='Hero Honda' bikedetails={bikedetails}/>
    <Truck name='Volvo' truckdetails={truckdetails}/>
    <Airway airticket={airticket}/>
   
    <ul>
      {
        trainlist.map((tlist)=>
          <li><TrainList tlist={tlist}/></li>
      )
      }
    </ul>
    </>
  )
  
}

export default App
