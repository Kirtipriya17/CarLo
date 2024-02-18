import React from 'react'
import Props from '../../Components/Props';
import H1 from '../../assets/Images/BMW/Z4/5.jpg'
import H2 from '../../assets/Images/BMW/Z4/2.jpg'
import H3 from '../../assets/Images/BMW/Z4/3.jpg'
import H4 from '../../assets/Images/BMW/Z4/4.jpg'
import H5 from '../../assets/Images/BMW/Z4/1.jpg'
export default function Z4() {
    const images = [
        H1,H2,H3,H4,H5
      ];
  return (
    <div>
          
          <Props imagesArray={[H1,H2,H3,H4,H5]} 
        images={images} brand={"BMW"}
        Car={"BMW Z4"} Price={"Rs.90.90 Lakh*"}
        About={"The BMW Z4 excites with its sleek open-air styling, tech-laden interiors, and as a daily driver. It doesn't, however, excite as much with its overall dynamics."}
         Mileage={"12.09 kmpl"}
          FuelType={"Petrol"}
           EngineDisplacement={"2998 cc"}
            Cylinder={"6"}
             MaxPower={"335bhp@5000-6500rpm"}
              MaxTorque={"500Nm@1600-4500rpm"} 
              Seat={"2"} 
              TransmissionType={"Automatic"}
               FuelCapacity={"52 Litres"}
                BodyType={"Convertible"} 
                GroundClearanceUnladen={"114 mm"}

         Features={['Power Steering',	
         'Power Windows Front',	
         'Anti Lock Braking System',	
         'Air Conditioner',
         'Driver Airbag	',
         'Passenger Airbag',	
         'Engine Start Stop Button',	
         'Alloy Wheels'	,
         'Multi-function Steering Wheel']} 
         StandoutFeatures={['Performance from the motor  ']}
         />
    </div>
  )
}
