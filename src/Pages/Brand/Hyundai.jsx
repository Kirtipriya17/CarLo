import React from 'react'
import CarCards from '../../Components/CarCards'
import h1 from '../../assets/2.jpg'


export default function Hyundai() {
  return (
    <div>
      <CarCards link={"/"} image={h1} brand={"Hyundai "} car={"Hyundai Creta"} price={"Rs.11 - 20.15 Lakh*"} fuelType={"Petrol"} mileage={"17.4 - 21.8 kmpl"} transmission={"Automatic"}
      />
      <CarCards link={"/"} image={h1} brand={"Hyundai"} car={"Hyundai i20"} price={"Rs.7.04 - 11.21 Lakh*"} fuelType={"Petrol"} mileage={"16 - 20 kmpl"} transmission={"Automatic / Manual"}
      />
      <CarCards link={"/"} image={h1} brand={"Hyundai"} car={"Hyundai Verna"} price={"Rs.11 - 17.42 Lakh*"} fuelType={"Petrol"} mileage={""} transmission={"Manual / Automatic"}
      />
      <CarCards link={"/"} image={h1} brand={"Hyundai"} car={"Hyundai Tucson"} price={"Rs.29.02 - 35.94 Lakh"} fuelType={"Diesel"} mileage={"18 kmpl"} transmission={"Manual / Automatic"}
      />
      <CarCards link={"/"} image={h1} brand={"Hyundai"} car={"Hyundai i20 N-Line"} price={"Rs.9.99 - 12.52 Lakh*"} fuelType={"Petrol"} mileage={"20 kmpl"} transmission={"Manual / Automatic"}
      />
    </div>
  )
}
