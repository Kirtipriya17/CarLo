import React from 'react'
import CarCards from '../../Components/CarCards'
import h1 from '../../assets/2.jpg'

export default function Kia() {
  return (
    <div>
       <CarCards link={"/"} image={h1} brand={"Kia"} car={"Kia Seltos"} price={"Rs.10.90 - 20.30 Lakh*"} fuelType={"Diesel"} mileage={"17 - 20.7"} transmission={"Automatic"}
      />
       <CarCards link={"/"} image={h1} brand={"Kia"} car={"Kia Sonet"} price={"Rs.7.99 - 15.69 Lakh*"} fuelType={"Diesel / Petrol"} mileage={"3995"} transmission={"Automatic"}
      />
       <CarCards link={"/"} image={h1} brand={"Kia"} car={"Kia EV6"} price={"Rs.60.95 - 65.95 Lakh*"} fuelType={"Diesel"}  transmission={"Automatic"}
      />
       <CarCards link={"/"} image={h1} brand={"Kia"} car={"Kia Carnival"} price={"Rs.40 Lakh*"} fuelType={"Diesel"}   transmission={"Manual"}
      />
       <CarCards link={"/"} image={h1} brand={"Kia"} car={"Kia Carens"} price={"Rs.10.45 - 19.45 Lakh*"} fuelType={"Diesel / Petrol"} mileage={"21 "} transmission={"Automatic / Manual"}
      />

    </div>
  )
}
