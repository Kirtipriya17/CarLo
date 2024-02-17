import React from 'react'
import Props from '../../Components/Props';
import H1 from '../../assets/Images/volvo/XC60/5.jpg'
import H2 from '../../assets/Images/volvo/XC60/4.jpg'
import H3 from '../../assets/Images/volvo/XC60/2.jpg'
import H4 from '../../assets/Images/volvo/XC60/3.jpg'
import H5 from '../../assets/Images/volvo/XC60/1.jpg'



export default function XC60() {
    const images = [
        H1,H2,H3,H4,H5
      ];
  return (
    <div>
          
          <Props imagesArray={[H1,H2,H3,H4,H5]} 
        images={images} brand={"Volvo"}
        Car={"Volvo XC60"} Price={"Rs.68.90 Lakh"}
        About={"The Volvo XC60 is extremely safe, comfortable and effortless to drive. Squaring down on this one is relatively easy because there's just one fully loaded variant. Other highlights include overall value and exclusivity."}
         Mileage={"11.2 kmpl"}
          FuelType={"Petrol"}
           EngineDisplacement={"1969 cc"}
            Cylinder={"5"}
             MaxPower={"250bhp@4000rpm"}
              MaxTorque={"350Nm@1500-3000rpm"} 
              Seat={"5"} 
              TransmissionType={"Automatic"}
               FuelCapacity={"70 Litres"}
                BodyType={"SUV"} 
                GroundClearanceUnladen={"230mm mm"}

         Features={['Power Steering',	
         'Power Windows Front',	
         'Anti Lock Braking System',	
         'Air Conditioner',
         'Driver Airbag	',
         'Passenger Airbag',	
         'Fog Lights - Front',	
         'Alloy Wheels'	,
         'Multi-function Steering Wheel']} 
         StandoutFeatures={['Mile munching ability']}
         />
    </div>
  )
}
