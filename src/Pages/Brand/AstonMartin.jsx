import React from 'react'
import CarCards from '../../Components/CarCards'
import Vantage from '../../assets/Images/Aston martin/VANTAGE/1.jpg'
import DB12 from '../../assets/Images/Aston martin/DB12/2.jpg'
import DBX from '../../assets/Images/Aston martin/DBX/1.jpg'

export default function AstonMartin() {
  return (
    <div>
      <CarCards link={"/Vantage"} image={Vantage} brand={"AstonMartin"} car={"Aston Martin Vantage"} price={"₹ 2.95 crore"} fuelType={"Petrol"} mileage={"8.6km/l "} transmission={"Automatic(DCT)"}
      />
      
      <CarCards link={"/DB12"} image={DB12} brand={"AstonMartin"} car={"Aston Martin DB12"} price={"₹ 4.59 crore"} fuelType={"Petrol"} mileage={"8.9km/l"} transmission={"Automatic(TC)"}
      />
      <CarCards link={"/DBX"} image={DBX} brand={"AstonMartin"} car={"Aston Martin DBX"} price={"₹ 3.82 - 4.63 crore"} fuelType={"Petrol"} mileage={"10.1km/l"} transmission={"Automatic(DCT)"}
      />
    </div>
  )
}
