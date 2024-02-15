import React from 'react'
import CarCards from '../../Components/CarCards'
import h1 from '../../assets/2.jpg'

export default function Maruti() {
  return (
    <div>
   <CarCards link={"/"} image={h1} brand={"Maruti"} car={"Maruti Suzuki Dzire"} price={"₹ 6.56 - 9.39 Lakh"} fuelType={"Petrol/CNG"} mileage={"	22.41 - 31.12 "} transmission={"Manual, Automatic (AMT)"}
      />
      <CarCards link={"/"} image={h1} brand={"Maruti"} car={"Maruti Suzuki Baleno"} price={"₹ 6.66 - 9.88 Lakh"} fuelType={"Petrol/CNG"} mileage={" 22.35 - 30.61"} transmission={"Manual, Automatic (AMT)"}
      />
      <CarCards link={"/"} image={h1} brand={"Maruti"} car={"Maruti Suzuki Brezza"} price={"₹ 8.34 - 14.14 Lakh"} fuelType={"Petrol/CNG"} mileage={"	20.01 - 28.51  "} transmission={"Manual, Automatic (TC)"}
      />
      <CarCards link={"/"} image={h1} brand={"Maruti"} car={"Maruti Suzuki Ertiga"} price={"₹ 8.69 - 13.03 Lakh"} fuelType={"Petrol/CNG"} mileage={"	20.3 - 26.11 "} transmission={"Manual, Automatic (TC)"}
      />
       <CarCards link={"/"} image={h1} brand={"Maruti"} car={"Maruti Suzuki Fronx"} price={"₹ 7.51 - 13.03 Lakh"} fuelType={"Petrol/CNG"} mileage={"	20.3 - 26.11 "} transmission={"Manual, Automatic (AMT), Automatic (TC)"}
      />
    </div>
  )
}
