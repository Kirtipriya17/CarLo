import React from 'react'
import Props from '../../Components/Props'
import H1 from '../../assets/Images/Ferrari/ROMA/1.jpg'
import H2 from '../../assets/Images/Ferrari/ROMA/2.jpg'
import H3 from '../../assets/Images/Ferrari/ROMA/3.jpg'
import H4 from '../../assets/Images/Ferrari/ROMA/4.jpg'
import H5 from '../../assets/Images/Ferrari/ROMA/5.jpg'
import H6 from '../../assets/Images/Ferrari/ROMA/6.jpg'

export default function Roma() {
    const images = [
        H1,H2,H3,H4,H5,H6
      ];
  return (
    <div>
          
          <Props imagesArray={[H1,H2,H3,H4,H5,H6]} 
        images={images} brand={"Ferrari"}
        Car={"Ferrari Roma"} Price={"Rs.3.76 Cr*"}
        About={"The Ferrari Roma is a splendid concoction of both a GT that can take you places and a track car, without overdoing eithe"}
         Mileage={"8.93 kmpl"}
          FuelType={"Petrol"}
           EngineDisplacement={"3855cc"}
            Cylinder={"8"}
             MaxPower={"611.50bhp@5750-7500rpm"}
              MaxTorque={"760Nm@3000-5750rpm"} 
              Seat={"2"} 
              TransmissionType={"Automatic"}
               FuelCapacity={"80Litres"}
                BodyType={"Coupe"} 
                GroundClearanceUnladen={"113 mm"}

                Features={['Power Steering',	
                'Power Windows Front',	
                'Anti Lock Braking System',	
                'Air Conditioner',
                'Driver Airbag	',
                'Passenger Airbag',	
                'Engine Start Stop Button',	
                'Wheel Covers'	,
                'Multi-function Steering Wheel']} 
         StandoutFeatures={['Practical cabin']}
         />
    </div>
  )
}
