import React from 'react'
import CarCards from '../../Components/CarCards'
import Vantage from '../../assets/Images/Aston martin/VANTAGE/1.jpg'
import DB11 from '../../assets/Images/Aston martin/DB11/4.jpg'
import DB12 from '../../assets/Images/Aston martin/DB12/2.jpg'
import DBX from '../../assets/Images/Aston martin/DBX/1.jpg'

export default function AstonMartin() {
  return (
    <div>
      <CarCards link={"/Vantage"} image={Vantage} brand={"AstonMartin"} car={"Aston Martin Vantage"} price={"₹ 2.95 crore"} fuelType={"Petrol"} mileage={"8.6 "} transmission={"Automatic(DCT)"}
      />
      <CarCards link={"/DB11"} image={DB11} brand={"AstonMartin"} car={"Aston Martin DB11"} price={"₹ 3.29 crore"} fuelType={"Petrol"} mileage={"8.9"} transmission={"Automatic(DCT)"}
      />
      <CarCards link={"/DB12"} image={DB12} brand={"AstonMartin"} car={"Aston Martin DB12"} price={"₹ 4.59 crore"} fuelType={"Petrol"} mileage={"8.9"} transmission={"Automatic(TC)"}
      />
      <CarCards link={"/DBX"} image={DBX} brand={"AstonMartin"} car={"Aston Martin DBX"} price={"₹ 3.82 - 4.63 crore"} fuelType={"Petrol"} mileage={"10.1"} transmission={"Automatic(DCT)"}
      />
    </div>
  )
}
