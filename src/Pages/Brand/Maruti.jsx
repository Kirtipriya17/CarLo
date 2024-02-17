import React from 'react'
import CarCards from '../../Components/CarCards'
import h1 from '../../assets/2.jpg'
import Dzire from '../../assets/Images/maruti/DZIRE/1.jpg'
import Baleno from '../../assets/Images/maruti/BALENO/1.jpg'
import Ertiga from '../../assets/Images/maruti/EXTIGA/1.jpg'
import Fronx from '../../assets/Images/maruti/FRONX/1.jpg'

export default function Maruti() {
  return (
    <div>
   <CarCards link={"/Dzire"} image={Dzire} brand={"Maruti"} car={"Maruti Suzuki Dzire"} price={"₹ 6.56 - 9.39 Lakh"} fuelType={"Petrol/CNG"} mileage={"	22.41 - 31.12 "} transmission={"Manual, Automatic (AMT)"}
      />
      <CarCards link={"/Baleno"} image={Baleno} brand={"Maruti"} car={"Maruti Suzuki Baleno"} price={"₹ 6.66 - 9.88 Lakh"} fuelType={"Petrol/CNG"} mileage={" 22.35 - 30.61"} transmission={"Manual, Automatic (AMT)"}
      />
     
      <CarCards link={"/Ertiga"} image={Ertiga} brand={"Maruti"} car={"Maruti Suzuki Ertiga"} price={"₹ 8.69 - 13.03 Lakh"} fuelType={"Petrol/CNG"} mileage={"	20.3 - 26.11 "} transmission={"Manual, Automatic (TC)"}
      />
       <CarCards link={"/Fronx"} image={Fronx} brand={"Maruti"} car={"Maruti Suzuki Fronx"} price={"₹ 7.51 - 13.03 Lakh"} fuelType={"Petrol/CNG"} mileage={"	20.3 - 26.11 "} transmission={"Manual, Automatic (AMT), Automatic (TC)"}
      />
    </div>
  )
}
