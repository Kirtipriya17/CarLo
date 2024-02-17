import React from 'react'
import Props from '../../Components/Props';
import H5 from '../../assets/Images/Kia/SONET/1.jpg'
import H2 from '../../assets/Images/Kia/SONET/2.jpg'
import H3 from '../../assets/Images/Kia/SONET/3.jpg'
import H4 from '../../assets/Images/Kia/SONET/4.jpg'
import H1 from '../../assets/Images/Kia/SONET/5.jpg'

export default function Sonet() {
    const images = [
        H1,H2,H3,H4,H5
      ];
  return (
    <div>
          
          <Props imagesArray={[H1,H2,H3,H4,H5]} 
        images={images} brand={"Kia"}
        Car={"Kia Sonet"} Price={"Rs. 7.99 Lakh"}
        About={"The Sonet, which is the second car that Kia launched in India after they opened shop, made a solid impression in the highly competitive, sub-four-metre SUV segment. Not only did it offer segment-first features, but also set newer benchmarks when it came to styling and build quality, offering a comfortable cabin and many powertrain choices."}
         Mileage={"24 kmpl"}
          FuelType={"Diesel"}
           EngineDisplacement={"1493 cc"}
            Cylinder={"4"}
             MaxPower={"114bhp@4000rpm"}
              MaxTorque={"250Nm@1500-2750rpm"} 
              Seat={"5"} 
              TransmissionType={"Automatic"}
               FuelCapacity={"45 Litres"}
                BodyType={"SUV"} 
                GroundClearanceUnladen={"205mm"}

         Features={['Power Steering',	
         'Power Windows Front',	
         'Anti Lock Braking System',	
         'Air Conditioner',
         'Driver Airbag	',
         'Passenger Airbag',	
         'Automatic Climate Control',	
         'Engine Start Stop Button'	,
         'Multi-function Steering Wheel']} 
         StandoutFeatures={['']}
         />
    </div>
  )
}
