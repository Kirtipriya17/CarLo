import React from 'react'
import Props from '../../Components/Props';
import H4 from '../../assets/Images/Aston martin/DB11/1.jpg'
import H2 from '../../assets/Images/Aston martin/DB11/2.jpg'
import H3 from '../../assets/Images/Aston martin/DB11/3.jpg'
import H1 from '../../assets/Images/Aston martin/DB11/4.jpg'

export default function DB11() {
    const images = [
        H1,H2,H3,H4
      ];
  return (
    <div>
          
          <Props imagesArray={[H1,H2,H3,H4]} 
        images={images} brand={"Aston Martin"}
        Car={"Aston Martin DB11"} Price={""}
        About={""}
         Mileage={"21 kmpl"}
          FuelType={"Diesel"}
           EngineDisplacement={"1493cc"}
            Cylinder={"4"}
             MaxPower={""}
              MaxTorque={""} 
              Seat={"6.7"} 
              TransmissionType={"Automatic"}
               FuelCapacity={"216 Litres"}
                BodyType={"SUV"} 
                GroundClearanceUnladen={""}

         Features={['Power Steering',	
         'Power Windows Front',	
         'Anti Lock Braking System',	
         'Air Conditioner',
         'Driver Airbag	',
         'Passenger Airbag',	
         'Automatic Climate Control',	
         'Alloy Wheels'	,
         'Multi-function Steering Wheel']} 
         StandoutFeatures={['']}
         />
    </div>
  )
}
