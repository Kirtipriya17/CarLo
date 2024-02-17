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
        Car={"Mahindra XUV300"} Price={"Rs.60.95 - 65.95 Lakh"}
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
