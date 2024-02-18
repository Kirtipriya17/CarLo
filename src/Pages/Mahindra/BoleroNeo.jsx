import React from 'react'
import Props from '../../Components/Props';
import H1 from '../../assets/Images/Mahindra/BOLERO NEO/4.jpg'
import H2 from '../../assets/Images/Mahindra/BOLERO NEO/1.jpg'
import H3 from '../../assets/Images/Mahindra/BOLERO NEO/3.jpg'
import H4 from '../../assets/Images/Mahindra/BOLERO NEO/2.jpg'

export default function BoleroNeo() {
    const images = [
        H1,H2,H3,H4
      ];
  return (
    <div>
          
          <Props imagesArray={[H1,H2,H3,H4]} 
        images={images} brand={"Mahindra"}
        Car={"Mahindra Bolero Neo "} Price={"Rs. 9.90 Lakh "}
        About={"The Mahindra Bolero Neo is essentially a rebranded TUV300 (now-defunct). With this strategy, Mahindra hopes to get the strong Bolero nameplate to work wonders for this model."}
         Mileage={"12.08 kmpl"}
          FuelType={"Diesel"}
           EngineDisplacement={"1493 cc"}
            Cylinder={"4"}
             MaxPower={"98.56bhp@3750rpm"}
              MaxTorque={"260Nm@1750-2250rpm"} 
              Seat={"7"} 
              TransmissionType={"Manual"}
               FuelCapacity={"50 Litres"}
                BodyType={"SUV"} 
                GroundClearanceUnladen={"160 mm"}

         Features={['Power Steering',	
         'Power Windows Front',	
         'Anti Lock Braking System',	
         'Air Conditioner',
         'Driver Airbag	',
         'Passenger Airbag',	
         'Wheel Covers',	
         'Alloy Wheels'	,
         'Multi-function Steering Wheel']} 
         StandoutFeatures={['Locking rear differential','Rear wheel drive', '7-inch touchscreen']}
         />
    </div>
  )
}
