import React from 'react'
import CarCards from '../../Components/CarCards'
import h1 from '../../assets/2.jpg'

export default function Lamborghini() {
  return (
    <div>
      <CarCards link={"/"} image={h1} brand={"Lamborghini"} car={"Lamborghini Urus 5"} price={"Rs.8.89 Cr*"} fuelType={"Petrol"}  transmission={"Automatic"}
      />
      <CarCards link={"/"} image={h1} brand={"Lamborghini"} car={"Lamborghini Huracan STO"} price={"Rs.4 - 4.99 Cr*"} fuelType={"Petrol"}  transmission={"Automatic"}
      />
      <CarCards link={"/"} image={h1} brand={"Lamborghini"} car={"Lamborghini Huraca Sterrato"} price={"Rs.4.18 - 4.22 Cr*"} fuelType={"Petrol"}  transmission={"Automatic"}
      />
    </div>
  )
}
