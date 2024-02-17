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
        Car={"Mahindra XUV700"} Price={"Rs.60.95 - 65.95 Lakh"}
        About={""}
         Mileage={""}
          FuelType={""}
           EngineDisplacement={""}
            Cylinder={""}
             MaxPower={"320.55bhp"}
              MaxTorque={"605Nm"} 
              Seat={"5"} 
              TransmissionType={""}
               FuelCapacity={""}
                BodyType={"SUV"} 
                GroundClearanceUnladen={""}

         Features={['Power Steering',	
         'Power Windows Front',	
         'Anti Lock Braking System',	
         'Air Conditioner',
         'Driver Airbag	',
         'Passenger Airbag',	
         'Fog Lights - Front',	
         'Alloy Wheels'	,
         'Multi-function Steering Wheel']} 
         StandoutFeatures={['']}
         />
    </div>
  )
}
