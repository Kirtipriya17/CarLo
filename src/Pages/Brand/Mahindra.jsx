import React from 'react'
import CarCards from '../../Components/CarCards'
import h1 from '../../assets/2.jpg'
import Thar from '../../assets/Images/Mahindra/THAR/6.jpg'

export default function Mahindra() {
  return (
    <div>
        <CarCards link={"/"} image={h1} brand={"Mahindra"} car={"Mahindra XUV300"} price={"₹ 7.99 - 14.76 Lakh"} fuelType={"Petrol/Diesel"} mileage={"	13.8 - 16.8 "} transmission={"Automatic"}
      />
         <CarCards link={"/MahindraThar"} image={Thar} brand={"Mahindra"} car={"Mahindra Thar"} price={"₹ 11.25 - 17.20 Lakh"} fuelType={"Petrol/Diesel"} mileage={"11.6 - 14.9"} transmission={"Manual/ Automatic (TC)"}
      />
          <CarCards link={"/"} image={h1} brand={"Mahindra"} car={"Mahindra Scorpio N"} price={"₹ 13.60 - 24.54 Lakh"} fuelType={"Petrol/Diesel"} mileage={"11.67 - 13.67 "} transmission={"Manual/ Automatic (TC)"}
      />
          <CarCards link={"/"} image={h1} brand={"Mahindra"} car={"Mahindra Bolero Neo"} price={"₹ 9.90 - 12.16 Lakh"} fuelType={"Diesel"} mileage={"	14 - 16 "} transmission={"Manual"}
      />
          <CarCards link={"/"} image={h1} brand={"Mahindra"} car={"Mahindra XUV700"} price={"₹ 13.99 - 26.99 Lakh"} fuelType={"Petrol/Diesel"} mileage={"11.67 - 13.67"} transmission={"Manual/ Automatic (TC)"}
      />
      
    </div>
  )
}
