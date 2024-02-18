import React from 'react'
import Props from '../../Components/Props';
import H1 from '../../assets/Images/Mahindra/SCARPIO/2.jpg'
import H2 from '../../assets/Images/Mahindra/SCARPIO/1.jpg'
import H3 from '../../assets/Images/Mahindra/SCARPIO/3.jpg'
import H4 from '../../assets/Images/Mahindra/SCARPIO/4.jpg'
import H5 from '../../assets/Images/Mahindra/SCARPIO/5.jpg'

export default function ScorpioN() {
    const images = [
        H1,H2,H3,H4,H5
      ];
  return (
    <div>
          
          <Props imagesArray={[H1,H2,H3,H4,H5]} 
        images={images} brand={"Mahindra"}
        Car={"Mahindra Scorpio N"} Price={"Rs. 13.60 Lakh"}
        About={"If you are looking for a tough ladder-frame SUV which is easy to drive in the city and at the same time, can take on bad roads with ease, the Scorpio-N is certainly a good choice."}
         Mileage={"15 kmpl"}
          FuelType={"Diesel"}
           EngineDisplacement={"2198 cc"}
            Cylinder={"4"}
             MaxPower={"172.45bhp@3500rpm"}
              MaxTorque={"400Nm@1750-2750rpm"} 
              Seat={"6,7"} 
              TransmissionType={"Automatic"}
               FuelCapacity={"57Litres"}
                BodyType={"SUV"} 
                GroundClearanceUnladen={"187 mm"}

         Features={['Power Steering',	
         'Power Windows Front',	
         'Anti Lock Braking System',	
         'Air Conditioner',
         'Driver Airbag	',
         'Passenger Airbag',	
        ' Engine Start Stop Button',	
         'Alloy Wheels'	,
         'Multi-function Steering Wheel']} 
         StandoutFeatures={['Sunroof','Driver MID','12-Speaker 3D Sony Sound System']}
         />
    </div>
  )
}
