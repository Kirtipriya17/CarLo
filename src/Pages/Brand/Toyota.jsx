import React from 'react'
import CarCards from '../../Components/CarCards'

import Vellfire from '../../assets/Images/toyota/VELLFIRE/1.jpg'
import FortunerLegende from '../../assets/Images/toyota/FORTUNER LEGENDER/1.jpg'
import LandCruiser from '../../assets/Images/toyota/LAND CRUISER/1.jpg'

export default function Toyota() {
  return (
    <div>
       <CarCards link={"/Vellfire"} image={Vellfire} brand={"Toyota"} car={"Toyota Vellfire"} price={"₹ 6.86 - 10.00 Lakh"} mileage={ "	22.3 - 30.61 "} fuelType={"Petrol, CNG"}  transmission={"Manual, Automatic (AMT)"}
      />
      
      <CarCards link={"/FortunerLegender"} image={FortunerLegende} brand={"Toyota"} car={"Toyota Fortuner Legender"} price={"₹ 33.43 - 51.44 Lakh"} mileage={ "10 - 14.6 "} fuelType={"Diesel"}  transmission={"Manual, Automatic (TC)"}
      />
     
      <CarCards link={"/LandCruiser"} image={LandCruiser} brand={"Toyota"} car={"Toyota Land Cruiser 300"} price={"₹ 2.10 crore"} mileage={ "	22.3 - 30.61 "} fuelType={"Diesel"}  transmission={"Automatic"}
      />
    </div>
  )
}
