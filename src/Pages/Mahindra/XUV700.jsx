import React from 'react'
import Props from '../../Components/Props';
import H3 from '../../assets/Images/Mahindra/XUV700/3.jpg'
import H4 from '../../assets/Images/Mahindra/XUV700/4.jpg'
import H2 from '../../assets/Images/Mahindra/XUV700/5.jpg'
import H1 from '../../assets/Images/Mahindra/XUV700/6.jpg'
import H5 from '../../assets/Images/Mahindra/XUV700/2.jpg'

export default function XUV700() {
    const images = [
        H1,H2,H3,H4,H5
      ];
  return (
    <div>
          
          <Props imagesArray={[H1,H2,H3,H4,H5]} 
        images={images} brand={"Mahindra"}
        Car={"Mahindra XUV700"} Price={"Rs. 13.99 Lakh"}
        About={"Looking at the prices, Mahindra is clearly elevating the value co-efficient with the new XUV700. Be it features, space, comfort, safety, or even performance, the XUV700 manages to deliver on all fronts with aplomb. "}
         Mileage={"16.57 kmpl"}
          FuelType={"Diesel"}
           EngineDisplacement={"2198 cc"}
            Cylinder={"4"}
             MaxPower={"182.38bhp@3500rpm"}
              MaxTorque={"450Nm@1750-2800rpm"} 
              Seat={"5,6,7"} 
              TransmissionType={"Automatic"}
               FuelCapacity={"60 Litres"}
                BodyType={"SUV"} 
                GroundClearanceUnladen={"200 mm"}

         Features={['Power Steering',	
         'Power Windows Front',	
         'Anti Lock Braking System',	
         'Air Conditioner',
         'Driver Airbag	',
         'Passenger Airbag',	
         'Engine Start Stop Button',	
         'Alloy Wheels'	,
         'Multi-function Steering Wheel']} 
         StandoutFeatures={['Lane keep assist','Sony sound system','2 x 10.25 inch infotainment screens']}
         />
    </div>
  )
}
