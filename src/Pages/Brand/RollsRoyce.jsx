import React from 'react'
import CarCards from '../../Components/CarCards'
import h1 from '../../assets/2.jpg'

export default function RollsRoyce() {
  return (
    <div>
       <CarCards link={"/"} image={h1} brand={"RollsRoyce"} car={"Rolls-Royce Wraith"} price={"₹ 5.00 crore"} mileage={ "6.3 "} fuelType={"Petrol"}  transmission={" Automatic (TC)"}
      />
      <CarCards link={"/"} image={h1} brand={"RollsRoyce"} car={"Rolls-Royce Dawn"} price={"₹ 5.92 crore"} mileage={ "7 "} fuelType={"Petrol"}  transmission={" Automatic (TC)"}
      />
      <CarCards link={"/"} image={h1} brand={"RollsRoyce"} car={"Rolls-Royce Phantom"} price={"₹ 9.50 crore"} mileage={ "7.1 "} fuelType={"Petrol"}  transmission={" Automatic (TC)"}
      />
      <CarCards link={"/"} image={h1} brand={"RollsRoyce"} car={"Rolls-Royce Spectre"} price={"₹ 7.50 crore"}  fuelType={"Electric"}  transmission={" Automatic (TC)"}
      />
    </div>
  )
}
