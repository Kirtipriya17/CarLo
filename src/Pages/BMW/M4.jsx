import React from 'react'
import Props from '../../Components/Props';
import H1 from '../../assets/Images/BMW/M4 COMPITITION/5.jpg'
import H2 from '../../assets/Images/BMW/M4 COMPITITION/2.jpg'
import H3 from '../../assets/Images/BMW/M4 COMPITITION/3.jpg'
import H4 from '../../assets/Images/BMW/M4 COMPITITION/1.jpg'
import H5 from '../../assets/Images/BMW/M4 COMPITITION/4.jpg'
export default function M4() {
    const images = [
        H1,H2,H3,H4,H5
      ];
  return (
    <div>
          
          <Props imagesArray={[H1,H2,H3,H4,H5]} 
        images={images} brand={"BMW"}
        Car={"BMW M4 Compitition"} Price={"Rs.1.48 Cr"}
        About={"The BMW M4 Competition scores high on being a decent all-rounder that offers an involving driving experience. If only it could tick the 'looks' box adequately!"}
         Mileage={"11.86 kmpl"}
          FuelType={"Petrol"}
           EngineDisplacement={"2993 cc"}
            Cylinder={"6"}
             MaxPower={"502.88bhp@6250rpm"}
              MaxTorque={"650Nm@2750-5500rpm"} 
              Seat={"5"} 
              TransmissionType={"Automatic"}
               FuelCapacity={"59 Litres"}
                BodyType={"Coupe"} 
                GroundClearanceUnladen={"120 mm"}

         Features={['Power Steering',	
         'Power Windows Front',		
         'Air Conditioner',
         'Engine Start Stop Button',	
         'Alloy Wheels'	,
         'Multi-function Steering Wheel']} 
         StandoutFeatures={['Exceptional dynamics']}
         />
    </div>
  )
}
