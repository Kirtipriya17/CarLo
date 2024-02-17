import React from 'react'
import Props from '../../Components/Props';
import H1 from '../../assets/Images/tata/HARRIER/1.jpg'
import H2 from '../../assets/Images/tata/HARRIER/2.jpg'
import H3 from '../../assets/Images/tata/HARRIER/3.jpg'


export default function Harrier() {
    const images = [
        H1,H2,H3
      ];
  return (
    <div>
          
          <Props imagesArray={[H1,H2,H3]} 
        images={images} brand={"Tata"}
        Car={"Tata Harrier"} Price={"Rs.15.49 Lakh"}
        About={"The New Harrier symbolizes the unwavering spirit of young achievers in its latest avatar"}
         Mileage={"--"}
          FuelType={"Diesel"}
           EngineDisplacement={"1956"}
            Cylinder={"4"}
             MaxPower={"167.62bhp@3750rpm"}
              MaxTorque={"350Nm@1750-2500rpm"} 
              Seat={"5"} 
              TransmissionType={"--"}
               FuelCapacity={"--"}
                BodyType={"SUV"} 
                GroundClearanceUnladen={"--"}

         Features={['Power Steering',	
         'Power Windows Front',	
         'Anti Lock Braking System',	
         'Air Conditioner',
         'Driver Airbag	',
         'Passenger Airbag',	
         'Engine Start Stop Button',	
         'Alloy Wheels'	,
         'Multi-function Steering Wheel']} 
         StandoutFeatures={['The slightly wider second row can easily seat three adults with ample room overall.','Strong performance owing to the more-than-adequate grunt; both inside and outside the city.']}
         />
    </div>
  )
}
