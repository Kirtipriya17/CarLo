import React from 'react'
import Props from '../../Components/Props';
import H5 from '../../assets/Images/Kia/SELTOS/1.jpg'
import H2 from '../../assets/Images/Kia/SELTOS/2.jpg'
import H3 from '../../assets/Images/Kia/SELTOS/3.jpg'
import H4 from '../../assets/Images/Kia/SELTOS/4.jpg'
import H1 from '../../assets/Images/Kia/SELTOS/5.jpg'

export default function Seltos() {
    const images = [
        H1,H2,H3,H4,H5
      ];
  return (
    <div>
          
          <Props imagesArray={[H1,H2,H3,H4,H5]} 
        images={images} brand={"Kia"}
        Car={"Kia Seltos"} Price={"Rs.10.90Lakh"}
        About={"The Kia Seltos is a better-rounded package than the pre-facelift model. It's also a good choice among the eight other vehicles in this mid-size SUV segment. This car gets a new turbo-petrol engine option, new segment-first features, Level 2 ADAS, and cosmetic changes."}
         Mileage={"19.1 kmpl"}
          FuelType={"Diesel"}
           EngineDisplacement={"1493cc"}
            Cylinder={"4"}
             MaxPower={"114.41bhp@4000rpm"}
              MaxTorque={"250Nm@1500-2750rpm"} 
              Seat={"5"} 
              TransmissionType={"Automatic"}
               FuelCapacity={"50Litres"}
                BodyType={"SUV"} 
                GroundClearanceUnladen={"190mm"}

         Features={['Power Steering',	
         'Power Windows Front',	
         'Anti Lock Braking System',	
         'Air Conditioner',
         'Driver Airbag	',
         'Passenger Airbag',	
         'Automatic Climate Control',	
         'Alloy Wheels'	,
         'Multi-function Steering Wheel']} 
         StandoutFeatures={['Kia Seltos comes with six distinct interior choices']}
         />
    </div>
  )
}
