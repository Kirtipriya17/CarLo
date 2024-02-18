import React from 'react'
import CarCards from '../../Components/CarCards'

import Vellfire from '../../assets/Images/toyota/VELLFIRE/1.jpg'
import FortunerLegende from '../../assets/Images/toyota/FORTUNER LEGENDER/1.jpg'
import LandCruiser from '../../assets/Images/toyota/LAND CRUISER/1.jpg'

export default function Toyota() {
  return (
    <div>
       <CarCards link={"/Vellfire"} image={Vellfire} brand={"Toyota"} car={"Toyota Vellfire"} price={"₹ 1.20-1.30Crore"} mileage={ "	22km/l "} fuelType={"Petrol, CNG"}  transmission={" Automatic(e-CVT))"}
      />
      
      <CarCards link={"/FortunerLegender"} image={FortunerLegende} brand={"Toyota"} car={"Toyota Fortuner Legender"} price={"₹ 43.66- 51.44 Lakh"} mileage={ "15km/l"} fuelType={"Diesel"}  transmission={"Manual, Automatic (TC)"}
      />
     
      <CarCards link={"/LandCruiser"} image={LandCruiser} brand={"Toyota"} car={"Toyota Land Cruiser 300"} price={"₹ 2.10 crore"} mileage={ "	22.3 - 30.61km/l "} fuelType={"Diesel"}  transmission={"Automatic"}
      />
    </div>
  )
}
