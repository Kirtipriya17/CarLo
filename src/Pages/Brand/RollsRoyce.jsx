import React from 'react'
import CarCards from '../../Components/CarCards'
import Wraith from'../../assets/Images/rollsroyce/WRAITH/1.jpg'
import Dawn from'../../assets/Images/rollsroyce/DAWN/1.jpg'
import Phantom from'../../assets/Images/rollsroyce/PHANTOM/1.jpg'
import Spectre from'../../assets/Images/rollsroyce/SPECTRE/1.jpg'

export default function RollsRoyce() {
  return (
    <div>
      <CarCards link={"/Phantom"} image={Phantom} brand={"RollsRoyce"} car={"Rolls-Royce Phantom"} price={"₹ 9.50 crore"} mileage={ "7.1 "} fuelType={"Petrol"}  transmission={" Automatic (TC)"}
      />
      <CarCards link={"/Spectre"} image={Spectre} brand={"RollsRoyce"} car={"Rolls-Royce Spectre"} price={"₹ 7.50 crore"}  fuelType={"Electric"}  transmission={" Automatic (TC)"}
      />
      <CarCards link={"/Dawn"} image={Dawn} brand={"RollsRoyce"} car={"Rolls-Royce Dawn"} price={"₹ 5.92 crore"} mileage={ "7 "} fuelType={"Petrol"}  transmission={" Automatic (TC)"}
      />
       <CarCards link={"/Wraith"} image={Wraith} brand={"RollsRoyce"} car={"Rolls-Royce Wraith"} price={"₹ 5.00 crore"} mileage={ "6.3 "} fuelType={"Petrol"}  transmission={" Automatic (TC)"}
      />
    </div>
  )
}
