import React from 'react'
import CarCards from '../../Components/CarCards'
import h1 from '../../assets/2.jpg'

export default function Audi() {
  return (
    <div>
      <CarCards link={"/Tata"} image={h1} brand={"Audi"} car={"Audi Q8"} price={"Rs.65.18 - 70.45 Lakh*"} fuelType={"Petrol"} mileage={"13.47"} transmission={"Automatic"}
      />
      <CarCards link={"/"} image={h1} brand={"Audi"} car={"Audi RS5"} price={"Rs.1.13 Cr"} fuelType={"Petrol"} mileage={"8.8 "} transmission={"Automatic"}
      />
      <CarCards link={"/"} image={h1} brand={"Audi"} car={"Audi Q7"} price={"Rs.86.92 - 94.45 Lakh"} fuelType={"Petrol"} mileage={"11.21"} transmission={"Automatic"}
      />
      <CarCards link={"/"} image={h1} brand={"Audi"} car={"Audi Q8"} price={"Rs.1.07 - 1.43 Cr*"} fuelType={"Petrol"} mileage={"9.8"} transmission={"Automatic"}
      />
       <CarCards link={"/"} image={h1} brand={"Audi"} car={"Audi Q8"} price={"Rs.1.07 - 1.43 Cr*"} fuelType={"Petrol"} mileage={"9.8"} transmission={"Automatic"}
      />
      
    </div>
  )
}
