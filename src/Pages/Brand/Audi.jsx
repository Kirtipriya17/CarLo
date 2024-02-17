import React from 'react'
import CarCards from '../../Components/CarCards'
import ETron from '../../assets/Images/audi/E-TRON-GT/1.jpg'
import Q8 from '../../assets/Images/audi/Q8/1.jpg'
import RS5 from '../../assets/Images/audi/RS 5/1.jpg'

export default function Audi() {
  return (
    <div>
      <CarCards link={"/Q8"} image={Q8} brand={"Audi"} car={"Audi Q8"} price={"Rs.65.18 - 70.45 Lakh*"} fuelType={"Petrol"} mileage={"13.47"} transmission={"Automatic"}
      />
      <CarCards link={"/RS5"} image={RS5} brand={"Audi"} car={"Audi RS5"} price={"Rs.1.13 Cr"} fuelType={"Petrol"} mileage={"8.8 "} transmission={"Automatic"}
      />
     
        <CarCards link={"/ETron"} image={ETron} brand={"Audi"} car={"Audi E-Tron-GT"} price={"Rs.86.92 - 94.45 Lakh"} fuelType={"Petrol"} mileage={"11.21"} transmission={"Automatic"}
      />
   
   
      
    </div>
  )
}
