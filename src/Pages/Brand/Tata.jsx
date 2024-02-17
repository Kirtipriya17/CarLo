import React from 'react'
import CarCards from '../../Components/CarCards'
import Punch from '../../assets/Images/tata/PUNCH/1.jpg'
import Nexon from '../../assets/Images/tata/TATA NEXON/1.jpg'
import Tiago from '../../assets/Images/tata/TATA TIAGO/1.jpg'
import Harrier from '../../assets/Images/tata/HARRIER/1.jpg'

export default function Tata() {
  return (
    <div>
      
      <CarCards link={"/Punch"} image={Punch} brand={"Tata"} car={"Tata Punch"} price={"₹ 6.13 - 10.20 Lakh"} mileage={ "18.8 - 26.99 "} fuelType={"Petrol, CNG"}  transmission={"Manual, Automatic (AMT)"}
      />
      <CarCards link={"/Nexon"} image={Nexon} brand={"Tata"} car={"Tata Nexon"} price={"₹ 8.15 - 15.60 Lakh"} mileage={ "17.01 - 24.08 "} fuelType={"Petrol, CNG"}  transmission={"Manual, Automatic (AMT)"}
      />
      <CarCards link={"/Tiago"} image={Tiago} brand={"Tata"} car={"Tata Tigor"} price={"₹ 6.30 - 9.55 Lakh"} mileage={ "19.2 - 26.4 "} fuelType={"Petrol, CNG"}  transmission={"Manual, Automatic (AMT)"}
      />
      <CarCards link={"/Harrier"} image={Harrier} brand={"Tata"} car={"Tata Harrier"} price={"₹ 15.49 - 26.44 Lakh"} mileage={ "	14.6 - 16.8 "} fuelType={"Diesel"}  transmission={"Manual, Automatic (AMT)"}
      />
    </div>
  )
}
