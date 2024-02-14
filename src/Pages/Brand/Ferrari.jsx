import React from 'react'
import CarCards from '../../Components/CarCards'
import h1 from '../../assets/2.jpg'

export default function Ferrari() {
  return (
    <div>
       <CarCards link={"/"} image={h1} brand={"Ferrari"} car={"Ferrari 296 GTB"} price={"Rs.2.44 Cr*"} fuelType={"Petrol"} mileage={""} transmission={"Automatic"}
      />
      <CarCards link={"/"} image={h1} brand={"Ferrari"} car={"Ferrari SF90 Stradale"} price={"Rs.7.50 Cr*"} fuelType={"Petrol"} mileage={""} transmission={"Automatic"}
      />
      <CarCards link={"/"} image={h1} brand={"Ferrari"} car={"Ferrari F8 Tributo"} price={"Rs.4.02 Cr*"} fuelType={"Petrol"} mileage={""} transmission={"Automatic"}
      />
      <CarCards link={"/"} image={h1} brand={"Ferrari"} car={"BMW M8 Coupe Competition"} price={"Rs.5.75 Cr*"} fuelType={"Petrol"} mileage={""} transmission={"Automatic"}
      />
      <CarCards link={"/"} image={h1} brand={"Ferrari"} car={"Ferrari 812"} price={"Rs.5.75 Cr*"} fuelType={"Petrol"} mileage={""} transmission={"Automatic"}
      />
    </div>
  )
}
