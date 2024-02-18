import React from 'react'
import CarCards from '../../Components/CarCards'
import h1 from '../../assets/2.jpg'
import Thar from '../../assets/Images/Mahindra/THAR/6.jpg'
import BoleroNeo from '../../assets/Images/Mahindra/BOLERO NEO/4.jpg'
import ScorpioN from '../../assets/Images/Mahindra/SCARPIO/2.jpg'
import XUV300 from '../../assets/Images/Mahindra/XUV300/6.jpg'
import XUV700 from '../../assets/Images/Mahindra/XUV700/6.jpg'

export default function Mahindra() {
  return (
    <div>
        <CarCards link={"/XUV300"} image={XUV300} brand={"Mahindra"} car={"Mahindra XUV300"} price={"₹ 7.99 - 13.76 Lakh"} fuelType={"Petrol"} mileage={"	13.8 - 16.8km/l "} transmission={"Manual/Automatic"}
      />
         <CarCards link={"/MahindraThar"} image={Thar} brand={"Mahindra"} car={"Mahindra Thar"} price={"₹ 11.25 - 17.20 Lakh"} fuelType={"Petrol/Diesel"} mileage={"11.6 - 14.9km/l"} transmission={"Manual/ Automatic (TC)"}
      />
          <CarCards link={"/ScorpioN"} image={ScorpioN} brand={"Mahindra"} car={"Mahindra Scorpio N"} price={"₹ 13.60 - 24.54 Lakh"} fuelType={"Petrol/Diesel"} mileage={"11.67 - 13.67km/l "} transmission={"Manual/ Automatic (TC)"}
      />
          <CarCards link={"/BoleroNeo"} image={BoleroNeo} brand={"Mahindra"} car={"Mahindra Bolero Neo"} price={"₹ 9.90 - 12.16 Lakh"} fuelType={"Diesel"} mileage={"	14 - 16km/l "} transmission={"Manual"}
      />
          <CarCards link={"/XUV700"} image={XUV700} brand={"Mahindra"} car={"Mahindra XUV700"} price={"₹ 13.99 - 26.99 Lakh"} fuelType={"Petrol/Diesel"} mileage={"11.67 - 13.67km/l"} transmission={"Manual/ Automatic (TC)"}
      />
      
    </div>
  )
}
