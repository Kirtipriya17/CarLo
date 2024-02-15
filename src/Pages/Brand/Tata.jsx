import React from 'react'
import CarCards from '../../Components/CarCards'
import h1 from '../../assets/2.jpg'

export default function Tata() {
  return (
    <div>
      <CarCards link={"/"} image={h1} brand={"Tata"} car={"Tata Nexon EV"} price={"₹ 14.49 - 19.29 Lakh"}  fuelType={"	Electric"}  transmission={" Automatic (TC)"}
      />
      <CarCards link={"/"} image={h1} brand={"Tata"} car={"Tata Punch"} price={"₹ 6.13 - 10.20 Lakh"} mileage={ "18.8 - 26.99 "} fuelType={"Petrol, CNG"}  transmission={"Manual, Automatic (AMT)"}
      />
      <CarCards link={"/"} image={h1} brand={"Tata"} car={"Tata Nexon"} price={"₹ 8.15 - 15.60 Lakh"} mileage={ "17.01 - 24.08 "} fuelType={"Petrol, CNG"}  transmission={"Manual, Automatic (AMT)"}
      />
      <CarCards link={"/"} image={h1} brand={"Tata"} car={"Tata Tigor"} price={"₹ 6.30 - 9.55 Lakh"} mileage={ "19.2 - 26.4 "} fuelType={"Petrol, CNG"}  transmission={"Manual, Automatic (AMT)"}
      />
      <CarCards link={"/"} image={h1} brand={"Tata"} car={"Tata Harrier"} price={"₹ 15.49 - 26.44 Lakh"} mileage={ "	14.6 - 16.8 "} fuelType={"Diesel"}  transmission={"Manual, Automatic (AMT)"}
      />
    </div>
  )
}
