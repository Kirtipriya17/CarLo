import React from 'react'
import CarCards from '../../Components/CarCards'
import S90 from '../../assets/Images/volvo/S90/5.jpg'
import XC60 from '../../assets/Images/volvo/XC60/5.jpg'

export default function Volvo() {
  return (
    <div>
      
      <CarCards link={"/S90"} image={S90} brand={"Volvo"} car={"Volvo S90"} price={"₹ 62.95 Lakh"} mileage={ "14.7"} fuelType={"Mild Hybrid(Electric + Petrol)"}   transmission={"Automatic"}
      />
      <CarCards link={"XC60/"} image={XC60} brand={"Volvo"} car={"Volvo XC60"} price={"₹ 68.90 Lakh"} mileage={ "	12.4"} fuelType={"Mild Hybrid(Electric + Petrol)"}   transmission={"Automatic"}
      />
    
    
    </div>
  )
}
