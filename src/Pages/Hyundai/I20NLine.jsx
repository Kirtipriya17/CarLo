import React from 'react'
import Props from '../../Components/Props';
import H1 from '../../assets/Images/hyundai/I-20N LINE/1.jpg'
import H2 from '../../assets/Images/hyundai/I-20N LINE/2.jpg'

export default function I20NLine() {

    const images = [
        H1,H2
      ];
  return (
    <div>
          
          <Props imagesArray={[H1,H2]} 
        images={images} brand={"Hyundai "}
        Car={"Hyundai I 20 N Line"} Price={"Rs. 9.99 Lakh"}
        About={"The refreshed Hyundai i20 N Line continues to follow in its predecessor's footsteps. It is a viable option for those who want to get a taste of the brand's more affluent offerings from the world of rallying. The sporty stance makes it a difficult 'hot hatch' to resist. "}
         Mileage={"20 kmpl"}
          FuelType={"Petrol"}
           EngineDisplacement={"998 cc"}
            Cylinder={"3"}
             MaxPower={"118.41bhp@6000rpm"}
              MaxTorque={"172Nm@1500-4000rpm"} 
              Seat={"5"} 
              TransmissionType={"Automatic"}
               FuelCapacity={"37 Litres"}
                BodyType={"Hatchback"} 
                GroundClearanceUnladen={"170 mm"}

         Features={['Power Steering',	
         'Power Windows Front',	
         'Anti Lock Braking System',	
         'Air Conditioner',
         'Driver Airbag	',
         'Passenger Airbag',	
         'Engine Start Stop Button',	
         'Alloy Wheels'	,
         'Multi-function Steering Wheel']} 
         StandoutFeatures={['The distinct N Line cosmetic enhancements offer it a sense of exclusivity']}
         />
    </div>
  )
}
