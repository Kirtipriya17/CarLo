import React from 'react'
import CarCards from '../../Components/CarCards'
import h1 from '../../assets/2.jpg'

export default function MercedesBenz() {
  return (
    <div>
      <CarCards link={"/"} image={h1} brand={"MercedesBenz"} car={"Mercedes-Benz C-Class"} price={" ₹ 57.00 - 62.00 Lakh"} fuelType={"Petrol/Diesel"} transmission={" Automatic (TC)"}
      />
      <CarCards link={"/"} image={h1} brand={"MercedesBenz"} car={"Mercedes-Benz AMG A35"} price={" ₹ 58.00 Lakh"} fuelType={"Petrol"}  transmission={" Automatic (DCT)"}
      />
      <CarCards link={"/"} image={h1} brand={"MercedesBenz"} car={"Mercedes-Benz AMG SL55 Roadster"} price={"₹ 2.35 crore"} mileage={"	15 - 24 "} fuelType={"Petrol"}  transmission={" Automatic (TC)"}
      />
      <CarCards link={"/"} image={h1} brand={"MercedesBenz"} car={"Mercedes-Benz S-Class"} price={"₹ 1.71 - 1.80 crore"} mileage={"12.82 "} fuelType={"Diesel/Petrol"}  transmission={" Automatic (TC)"}
      />
    </div>
  )
}
