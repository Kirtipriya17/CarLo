import React from 'react'
import Props from '../../Components/Props';
import H1 from '../../assets/Images/porsche/TAYCON/1.jpg'
import H2 from '../../assets/Images/porsche/TAYCON/4.jpg'
import H3 from '../../assets/Images/porsche/TAYCON/2.jpg'
import H4 from '../../assets/Images/porsche/TAYCON/3.jpg'

export default function Taycan() {
    const images = [
        H1,H2,H3,H4
      ];
  return (
    <div>
          
          <Props imagesArray={[H1,H2,H3,H4]} 
        images={images} brand={"Porsche"}
        Car={"Porsche Taycan"} Price={"Rs. 1.61 Crore"}
        About={"The Taycan is Porsche's first electric car. It's available as a four-door sedan or as an estate and packs a huge battery with enormous power output. With mind-boggling acceleration, it can hit 100kmph from a standstill in just 2.6 seconds. Continuing the 911 legacy, the Taycan is equally exhilarating to drive as it is practical."}
         Mileage={"--"}
          FuelType={"--"}
           EngineDisplacement={"--"}
            Cylinder={"--"}
             MaxPower={"482.76bhp"}
              MaxTorque={"650Nm"} 
              Seat={"5"} 
              TransmissionType={"--"}
               FuelCapacity={"--"}
                BodyType={"Wagon"} 
                GroundClearanceUnladen={"--"}

         Features={['Power Steering',	
         'Power Windows Front',	
         'Anti Lock Braking System',	
         'Air Conditioner',
         'Driver Airbag	',
         'Passenger Airbag',	
         'Fog Lights - Front',	
         'Alloy Wheels'	,
         'Multi-function Steering Wheel']} 
         StandoutFeatures={['Electric car','EV with loads of performance ','Massive options list']}
         />
    </div>
  )
}
