import React from 'react'
import CarCards from '../../Components/CarCards'
import h1 from '../../assets/2.jpg'

export default function Jaguar() {
  return (
    <div>
      <CarCards link={"/"} image={h1} brand={"Jaguar"} car={"Jaguar F-Pace"} price={"Rs.78.90 Lakh*"} fuelType={"Diesel"} mileage={"217 kmph"} transmission={"Automatic"}
      />
        <CarCards link={"/"} image={h1} brand={"Jaguar"} car={"Jaguar F-TYPE"} price={"Rs.1 - 1.56 Cr*"} fuelType={"Petrol"} mileage={"250 kmph"} transmission={"Automatic"}
      />
        <CarCards link={"/"} image={h1} brand={"Jaguar"} car={"Jaguar I-Pace"} price={"Rs.1.26 Cr*"}  mileage={"200 kmph"} transmission={"Automatic"}
      />
       

    </div>
  )
}
