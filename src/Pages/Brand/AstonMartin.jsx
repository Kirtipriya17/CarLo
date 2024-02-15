import React from 'react'
import CarCards from '../../Components/CarCards'
import h1 from '../../assets/2.jpg'

export default function AstonMartin() {
  return (
    <div>
      <CarCards link={"/"} image={h1} brand={"AstonMartin"} car={"Aston Martin Vantage"} price={"₹ 2.95 crore"} fuelType={"Petrol"} mileage={"8.6 "} transmission={"Automatic(DCT)"}
      />
      <CarCards link={"/"} image={h1} brand={"AstonMartin"} car={"Aston Martin DB11"} price={"₹ 3.29 crore"} fuelType={"Petrol"} mileage={"8.9"} transmission={"Automatic(DCT)"}
      />
      <CarCards link={"/"} image={h1} brand={"AstonMartin"} car={"Aston Martin DB12"} price={"₹ 4.59 crore"} fuelType={"Petrol"} mileage={"8.9"} transmission={"Automatic(TC)"}
      />
      <CarCards link={"/"} image={h1} brand={"AstonMartin"} car={"Aston Martin DBX"} price={"₹ 3.82 - 4.63 crore"} fuelType={"Petrol"} mileage={"10.1"} transmission={"Automatic(DCT)"}
      />
    </div>
  )
}
