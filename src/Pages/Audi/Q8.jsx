import React from 'react'
import Props from '../../Components/Props';
import H1 from '../../assets/Images/audi/Q8/1.jpg'
import H2 from '../../assets/Images/audi/Q8//2.jpg'
import H3 from '../../assets/Images/audi/Q8/3.jpg'
import H4 from '../../assets/Images/audi/Q8/4.jpg'

export default function Q8() {
    const images = [
        H1,H2,H3,H4
      ];
  return (
    <div>
          
          <Props imagesArray={[H1,H2,H3,H4]} 
        images={images} brand={"Audi"}
        Car={"Audi Q8"} Price={"Rs.1.07 Crore"}
        About={"If you want an SUV that stands out, drives well, and will never be common place (given its steep pricing), the Q8 is a great option. And not to mention, it’s a comfortable option for four adults. Plus, it has some practicality sewed into it as well courtesy of a usable boot, flat-folding rear seats, and manageable ingress and egress."}
         Mileage={"9.8 kmpl"}
          FuelType={"Petrol"}
           EngineDisplacement={"2995 cc"}
            Cylinder={"4"}
             MaxPower={""}
              MaxTorque={""} 
              Seat={"5"} 
              TransmissionType={"Autmatic"}
               FuelCapacity={"85 Litres"}
                BodyType={"SUV"} 
                GroundClearanceUnladen={"254 mm"}

         Features={['Power Steering',	
         'Power Windows Front',	
         'Anti Lock Braking System',	
         'Air Conditioner',
         'Driver Airbag	',
         'Passenger Airbag',	
         'Automatic Climate Control',	
         'Alloy Wheels'	,
         'Multi-function Steering Wheel']} 
         StandoutFeatures={['Road presence']}
         />
    </div>
  )
}
