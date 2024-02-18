import React from 'react'
import CarCards from '../../Components/CarCards'
import Phantom from'../../assets/Images/rollsroyce/PHANTOM/1.jpg'
import Spectre from'../../assets/Images/rollsroyce/SPECTRE/1.jpg'

export default function RollsRoyce() {
  return (
    <div>
      <CarCards link={"/Phantom"} image={Phantom} brand={"RollsRoyce"} car={"Rolls-Royce Phantom"} price={"₹ 9.50 crore"} mileage={ "7.1km/l "} fuelType={"Petrol"}  transmission={" Automatic (TC)"}
      />
      <CarCards link={"/Spectre"} image={Spectre} brand={"RollsRoyce"} car={"Rolls-Royce Spectre"} price={"₹ 7.50 crore"}  fuelType={"Electric"}  transmission={" Automatic (TC)"}
      />
    
    </div>
  )
}
