import React from 'react'
import CarCards from '../../Components/CarCards'
import AMGA35 from '../../assets/Images/mercedes/AMG A35/1.jpg'

export default function MercedesBenz() {
  return (
    <div>
      
      <CarCards link={"/AMGA35"} image={AMGA35} brand={"MercedesBenz"} car={"Mercedes-Benz AMG A35"} price={" ₹ 58.00 Lakh"} fuelType={"Petrol"}  transmission={" Automatic (DCT)"}
      />
      
    </div>
  )
}
