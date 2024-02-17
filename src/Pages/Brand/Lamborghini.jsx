import React from 'react'
import CarCards from '../../Components/CarCards'
import h1 from '../../assets/2.jpg'
import HuracanSTO from '../../assets/Images/lamborghini/HURACAN STO/3.jpg'
import Urus5 from '../../assets/Images/lamborghini/URUS S/1.jpg'

export default function Lamborghini() {
  return (
    <div>
      <CarCards link={"/Urus5"} image={Urus5} brand={"Lamborghini"} car={"Lamborghini Urus 5"} price={"Rs.8.89 Cr*"} fuelType={"Petrol"}  transmission={"Automatic"}
      />
      <CarCards link={"/HuracanSTO"} image={HuracanSTO} brand={"Lamborghini"} car={"Lamborghini Huracan STO"} price={"Rs.4 - 4.99 Cr*"} fuelType={"Petrol"}  transmission={"Automatic"}
      />
      
    </div>
  )
}
