import React from 'react'
import CarCards from '../../Components/CarCards'
import h1 from '../../assets/2.jpg'
import Seltos from '../../assets/Images/Kia/SELTOS/5.jpg'
import Sonet from '../../assets/Images/Kia/SONET/5.jpg'
import EV6 from '../../assets/Images/Kia/EV6/1.jpg'
import Carens from '../../assets/Images/Kia/CARENS/1.jpg'

export default function Kia() {
  return (
    <div>
       <CarCards link={"/Seltos"} image={Seltos} brand={"Kia"} car={"Kia Seltos"} price={"Rs.10.90 - 20.30 Lakh*"} fuelType={"Diesel/Petrol"} mileage={"17 - 20.7km/l"} transmission={"Automatic(DCT)"}
      />
       <CarCards link={"/Sonet"} image={Sonet} brand={"Kia"} car={"Kia Sonet"} price={"Rs.7.99 - 15.69 Lakh*"} fuelType={"Diesel / Petrol"} mileage={"20km/l"} transmission={"Automatic(DCT)"}
      />
       <CarCards link={"/EV6"} image={EV6} brand={"Kia"} car={"Kia EV6"} price={"Rs.60.95 - 65.95 Lakh*"} fuelType={"Electric"}  transmission={"Automatic(TC)"}
      />
       
       <CarCards link={"/Carens"} image={Carens} brand={"Kia"} car={"Kia Carens"} price={"Rs.10.45 - 19.45 Lakh*"} fuelType={"Diesel / Petrol"} mileage={"17km/l "} transmission={"Automatic / Manual"}
      />

    </div>
  )
}
