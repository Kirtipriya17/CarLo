import React from 'react'
import Props from '../../Components/Props';
import H1 from '../../assets/Images/BMW/IX/4.jpg'
import H2 from '../../assets/Images/BMW/IX/2.jpg'
import H3 from '../../assets/Images/BMW/IX/3.jpg'
import H4 from '../../assets/Images/BMW/IX/1.jpg'
export default function IX() {
    const images = [
        H1,H2,H3,H4
      ];
  return (
    <div>
          
          <Props imagesArray={[H1,H2,H3,H4]} 
        images={images} brand={"BMW"}
        Car={"BMW IX"} Price={"Rs.1.21 Cr"}
        About={"This BMW oozes great quality interiors, it feels dynamically sorted and the range is quite good too. The iX is certainly a convincing effort from BMW's EV stable."}
         Mileage={"425 km/charge"}
          FuelType={"Electric"}
           EngineDisplacement={"--"}
            Cylinder={"--"}
             MaxPower={"321.84bhp"}
              MaxTorque={"630Nm"} 
              Seat={"5"} 
              TransmissionType={""}
               FuelCapacity={"--"}
                BodyType={"SUV"} 
                GroundClearanceUnladen={"202mm"}

         Features={['Power Steering',	
         'Power Windows Front',	
         'Anti Lock Braking System',	
         'Air Conditioner',
         'Driver Airbag	',
         'Passenger Airbag',	
         'Engine Start Stop Button',	
         'Alloy Wheels'	,
         'Multi-function Steering Wheel']} 
         StandoutFeatures={['Tech laden']}
         />
    </div>
  )
}
