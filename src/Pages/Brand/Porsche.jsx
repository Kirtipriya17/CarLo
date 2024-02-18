import React from 'react'
import CarCards from '../../Components/CarCards'
import h1 from '../../assets/2.jpg'
import Taycan from '../../assets/Images/porsche/TAYCON/1.jpg'
import P718 from '../../assets/Images/porsche/718/1.jpg'

export default function Porsche() {
  return (
    <div>Porsche
      <CarCards link={"/Taycan"} image={Taycan} brand={"Porsche"} car={"Porsche Taycan"} price={"₹ 1.61 - 2.44 crore"} fuelType={"Electric"}  
      />
      <CarCards link={"/P718"} image={P718} brand={"Porsche"} car={"Porsche 718"} price={"₹ 1.48 - 2.74 crore"} mileage={"7.5 - 14.5km/l "} fuelType={"Petrol"}  transmission={" Automatic (DCT), Manual"}
      />
    

    </div>
  )
}
