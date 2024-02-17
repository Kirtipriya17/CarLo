import React from 'react'
import CarCards from '../../Components/CarCards'
import h1 from '../../assets/2.jpg'

export default function Volvo() {
  return (
    <div>
      <CarCards link={"/"} image={h1} brand={"Volvo"} car={"Volvo XC40 Recharge"} price={"₹ 57.90 Lakh"}  fuelType={"Electric"}  
      />
      <CarCards link={"/"} image={h1} brand={"Volvo"} car={"Volvo C40 Recharge"} price={"₹ 62.95 Lakh"} fuelType={"Electric"}  
      />
      <CarCards link={"/"} image={h1} brand={"Volvo"} car={"Volvo XC90 Recharge"} price={"₹ 62.95 Lakh"} fuelType={"Electric"}  
      />
      <CarCards link={"/"} image={h1} brand={"Volvo"} car={"Volvo S90"} price={"₹ 62.95 Lakh"} mileage={ "14.7"} fuelType={"Mild Hybrid(Electric + Petrol)"}   transmission={"Automatic"}
      />
      <CarCards link={"/"} image={h1} brand={"Volvo"} car={"Volvo XC60"} price={"₹ 68.90 Lakh"} mileage={ "	12.4"} fuelType={"Mild Hybrid(Electric + Petrol)"}   transmission={"Automatic"}
      />
    
    
    </div>
  )
}
