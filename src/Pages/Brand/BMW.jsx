import React from 'react'
import CarCards from '../../Components/CarCards'
import Z4 from '../../assets/Images/BMW/Z4/5.jpg'
import IX from '../../assets/Images/BMW/IX/4.jpg'
import M4 from '../../assets/Images/BMW/M4 COMPITITION/5.jpg'
import Series7 from '../../assets/Images/BMW/7SERIES/1.jpg'
export default function BMW() {
  return (
    <div>
       <CarCards link={"/Z4"} image={Z4} brand={"BMW"} car={"BMW Z4"} price={"Rs.90.90 Lakh*"} fuelType={"Petrol"} mileage={"2998 cc"} transmission={"Automatic"}
      />
      
       <CarCards link={"/Series7"} image={Series7} brand={"BMW"} car={"BMW 7 Series"} price={"Rs.72.90 Lakh*"} fuelType={"Petrol"} mileage={"13.02 kmpl"} transmission={"Automatic"}
      />
       <CarCards link={"/IX"} image={IX} brand={"BMW"} car={"BMW IX"} price={"Rs.43.90 - 46.90 Lakh*"} fuelType={"Petrol/Diesel"} mileage={"14.82 - 18.64 kmpl"} transmission={"Automatic"}
      />
       <CarCards link={"/M4"} image={M4} brand={"BMW"} car={"BMW M4 Competition "} price={"Rs.2.44 Cr*"} fuelType={"Petrol"} mileage={"8.7 kmpl"} transmission={"Automatic"}
      />
    </div>
  )
}
