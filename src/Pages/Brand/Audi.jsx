import React from 'react'
import CarCards from '../../Components/CarCards'
import h1 from '../../assets/2.jpg'

export default function Audi() {
  return (
    <div>
      <CarCards link={"/Tata"} image={h1} brand={"Audi"} car={"Audi Q8"} price={"Rs.1.07 - 1.43 Cr*"} fuelType={"Petrol"} mileage={"9.8"} transmission={"Automatic"}
      />
      <CarCards link={"/Tata"} image={h1} brand={"Audi"} car={"Audi Q8"} price={"Rs.1.07 - 1.43 Cr*"} fuelType={"Petrol"} mileage={"9.8"} transmission={"Automatic"}
      />
    </div>
  )
}
