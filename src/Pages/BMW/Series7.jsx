import React from 'react'
import Props from '../../Components/Props';
import H1 from '../../assets/Images/BMW/7SERIES/1.jpg'
import H2 from '../../assets/Images/BMW/7SERIES/3.jpg'
import H3 from '../../assets/Images/BMW/7SERIES/2.jpg'
export default function Series7() {
    const images = [
        H1,H2,H3
      ];
  return (
    <div>
          
          <Props imagesArray={[H1,H2,H3]} 
        images={images} brand={"BMW"}
        Car={"BMW 7 Series"} Price={"Rs. 1.82 Crore"}
        About={"The new 7 Series is a great leap from what it was. A rather radical transformation. It's also thoroughly impressive in all manners conceivable."}
         Mileage={"13 kmpl"}
          FuelType={"Diesel"}
           EngineDisplacement={"2993 cc"}
            Cylinder={"6"}
             MaxPower={"375.48bhp@5200-6250rpm"}
              MaxTorque={"520Nm@1850-5000rpm"} 
              Seat={"5"} 
              TransmissionType={"Automatic"}
               FuelCapacity={"74 Litres"}
                BodyType={"SUV"} 
                GroundClearanceUnladen={"135 mm"}

         Features={['Power Steering',	
         'Power Windows Front',	
         'Anti Lock Braking System',	
         'Air Conditioner',
         'Driver Airbag	',
         'Passenger Airbag',	
         'Fog Lights - Front',	
         'Alloy Wheels'	,
         'Multi-function Steering Wheel']} 
         StandoutFeatures={['Soothing cabin experience']}
         />
    </div>
  )
}
