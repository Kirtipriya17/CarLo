import React from 'react'
import CarCards from '../../Components/CarCards'
import Creta from '../../assets/Images/hyundai/CRETA/4.jpg'
import Verna from '../../assets/Images/hyundai/VERNA/4.jpg'
import I2oNLine from '../../assets/Images/hyundai/I-20N LINE/1.jpg'

export default function Hyundai() {
  return (
    <div>
      <CarCards link={"/Creta"} image={Creta} brand={"Hyundai "} car={"Hyundai Creta"} price={"Rs.11 - 20.15 Lakh*"} fuelType={"Petrol"} mileage={"17.4 - 21.8 kmpl"} transmission={"Automatic"}
      />
      
      <CarCards link={"/Verna"} image={Verna} brand={"Hyundai"} car={"Hyundai Verna"} price={"Rs.11 - 17.42 Lakh*"} fuelType={"Petrol"} mileage={""} transmission={"Manual / Automatic"}
      />
      
      <CarCards link={"/I20NLine"} image={I2oNLine} brand={"Hyundai"} car={"Hyundai i20 N-Line"} price={"Rs.9.99 - 12.52 Lakh*"} fuelType={"Petrol"} mileage={"20 kmpl"} transmission={"Manual / Automatic"}
      />
    </div>
  )
}
