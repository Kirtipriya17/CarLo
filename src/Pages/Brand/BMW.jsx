import React from 'react'
import CarCards from '../../Components/CarCards'
import h1 from '../../assets/2.jpg'

export default function BMW() {
  return (
    <div>
       <CarCards link={"/"} image={h1} brand={"BMW"} car={"BMW Z4"} price={"Rs.90.90 Lakh*"} fuelType={"Petrol"} mileage={"2998 cc"} transmission={"Automatic"}
      />
       <CarCards link={"/"} image={h1} brand={"BMW"} car={"BMW X5M"} price={"Rs.49.50 - 52.50 Lakh*"} fuelType={"Diesel"} mileage={"20.37 kmpl"} transmission={"Automatic"}
      />
       <CarCards link={"/"} image={h1} brand={"BMW"} car={"BMW 7 Series"} price={"Rs.72.90 Lakh*"} fuelType={"Petrol"} mileage={"13.02 kmpl"} transmission={"Automatic"}
      />
       <CarCards link={"/"} image={h1} brand={"BMW"} car={"BMW IX"} price={"Rs.43.90 - 46.90 Lakh*"} fuelType={"Petrol/Diesel"} mileage={"14.82 - 18.64 kmpl"} transmission={"Automatic"}
      />
       <CarCards link={"/"} image={h1} brand={"BMW"} car={"BMW M4 Competition "} price={"Rs.2.44 Cr*"} fuelType={"Petrol"} mileage={"8.7 kmpl"} transmission={"Automatic"}
      />
    </div>
  )
}
