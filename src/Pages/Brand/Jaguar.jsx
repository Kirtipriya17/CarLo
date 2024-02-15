import React from 'react'
import CarCards from '../../Components/CarCards'
import FPace from '../../assets/Images/jaguar/F- PACE/1.jpg'
import FType from '../../assets/Images/jaguar/F-TYPE/5.jpg'
import IPace from '../../assets/Images/jaguar/I-PACE/1.jpg'

export default function Jaguar() {
  return (
    <div>
      <CarCards link={"/FPace"} image={FPace} brand={"Jaguar"} car={"Jaguar F-Pace"} price={"Rs.78.90 Lakh*"} fuelType={"Diesel"} mileage={"217 kmph"} transmission={"Automatic"}
      />
        <CarCards link={"/FType"} image={FType} brand={"Jaguar"} car={"Jaguar F-TYPE"} price={"Rs.1 - 1.56 Cr*"} fuelType={"Petrol"} mileage={"250 kmph"} transmission={"Automatic"}
      />
        <CarCards link={"/IPace"} image={IPace} brand={"Jaguar"} car={"Jaguar I-Pace"} price={"Rs.1.26 Cr*"}  mileage={"200 kmph"} transmission={"Automatic"}
      />
       

    </div>
  )
}
