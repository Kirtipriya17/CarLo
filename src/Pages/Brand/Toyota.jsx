import React from 'react'
import CarCards from '../../Components/CarCards'
import h1 from '../../assets/2.jpg'

export default function Toyota() {
  return (
    <div>
       <CarCards link={"/"} image={h1} brand={"Toyota"} car={"Toyota Glanza"} price={"₹ 6.86 - 10.00 Lakh"} mileage={ "	22.3 - 30.61 "} fuelType={"Petrol, CNG"}  transmission={"Manual, Automatic (AMT)"}
      />
      <CarCards link={"/"} image={h1} brand={"Toyota"} car={"Toyota Urban Cruiser Hyryder"} price={"₹ 11.14 - 20.19 Lakh"} mileage={ "19.39 - 27.97"} fuelType={"Mild Hybrid(Electric + Petrol), CNG, Hybrid (Electric + Petrol)"}  transmission={"Manual, Automatic (TC), Automatic (e-CVT)"}
      />
      <CarCards link={"/"} image={h1} brand={"Toyota"} car={"Toyota Fortuner"} price={"₹ 33.43 - 51.44 Lakh"} mileage={ "10 - 14.6 "} fuelType={"Diesel"}  transmission={"Manual, Automatic (TC)"}
      />
      <CarCards link={"/"} image={h1} brand={"Toyota"} car={"Toyota Hilux"} price={"₹ 30.41 - 37.89 Lakh"} mileage={ "15 - 20  "} fuelType={"Petrol, CNG"}  transmission={"Manual, Automatic (AMT)"}
      />
      <CarCards link={"/"} image={h1} brand={"Toyota"} car={"Toyota Land Cruiser"} price={"₹ 2.10 crore"} mileage={ "	22.3 - 30.61 "} fuelType={"Diesel"}  transmission={"Automatic"}
      />
    </div>
  )
}
