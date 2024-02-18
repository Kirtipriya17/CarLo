import React from 'react'
import Props from '../../Components/Props';
import H6 from '../../assets/Images/Mahindra/XUV300/3.jpg'
import H4 from '../../assets/Images/Mahindra/XUV300/4.jpg'
import H2 from '../../assets/Images/Mahindra/XUV300/5.jpg'
import H1 from '../../assets/Images/Mahindra/XUV300/6.jpg'
import H5 from '../../assets/Images/Mahindra/XUV300/2.jpg'
import H3 from '../../assets/Images/Mahindra/XUV300/XUV300.jpg'

export default function XUV300() {
    const images = [
        H1,H2,H3,H4,H5,H6
      ];
  return (
    <div>
          
          <Props imagesArray={[H1,H2,H3,H4,H5,H6]} 
        images={images} brand={"Mahindra"}
        Car={"Mahindra XUV300"} Price={"Rs. 7.99 Lakh"}
        About={"The Mahindra XUV300 is one of the few cars in India that has scored a full five stars in the NCAP safety rating."}
         Mileage={"19.7 kmpl"}
          FuelType={"Diesel"}
           EngineDisplacement={"1497 cc"}
            Cylinder={"4"}
             MaxPower={"115.05bhp@3750rpm"}
              MaxTorque={"300Nm@1500-2500rpm"} 
              Seat={"5"} 
              TransmissionType={"Automatic"}
               FuelCapacity={"42 Litres"}
                BodyType={"SUV"} 
                GroundClearanceUnladen={"180 mm"}

         Features={['Power Steering',	
         'Power Windows Front',	
         'Anti Lock Braking System',	
         'Air Conditioner',
         'Driver Airbag	',
         'Passenger Airbag',	
         'Engine Start Stop Button',	
         'Alloy Wheels'	,
         'Multi-function Steering Wheel']} 
         StandoutFeatures={['Rear Disc Brakes: Only SUV in the segment to offer these. They undoubtedly offer better braking performance compared to drum brakes.','Seven airbags on top-end W8(O) variant includes knee airbag for driver','Steering modes let drivers pick the right setting for them. ']}
         />
    </div>
  )
}
