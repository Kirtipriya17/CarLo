import React from 'react'
import CarCards from '../../Components/CarCards'
import h1 from '../../assets/2.jpg'

export default function Porsche() {
  return (
    <div>Porsche
      <CarCards link={"/"} image={h1} brand={"Porsche"} car={"Porsche Taycan"} price={"₹ 1.61 - 2.44 crore"} fuelType={"Electric"}  
      />
      <CarCards link={"/"} image={h1} brand={"Porsche"} car={"Porsche 718"} price={"₹ 1.48 - 2.74 crore"} mileage={"7.5 - 14.5 "} fuelType={"Petrol"}  transmission={" Automatic (DCT), Manual"}
      />
      <CarCards link={"/"} image={h1} brand={"Porsche"} car={"Porsche 911"} price={"₹ 1.86 - 3.35 crore"} mileage={"7.4 - 11.2"} fuelType={"Petrol"}  transmission={" Automatic (DCT), Manual"}
      />
      <CarCards link={"/"} image={h1} brand={"Porsche"} car={"Porsche Cayenne"} price={"₹ 1.36 - 1.93 crore"} mileage={"	8.6 - 41.6 "} fuelType={"Petrol, Hybrid (Electric + Petrol)"}  transmission={" Automatic (TC)"}
      />
      <CarCards link={"/"} image={h1} brand={"Porsche"} car={"Porsche Cayenne Coupe"} price={"₹ 1.42 - 2.57 crore"} mileage={ "8.4 - 41.6 "} fuelType={"Petrol, Hybrid (Electric + Petrol)"}  transmission={" Automatic (TC)"}
      />


    </div>
  )
}
