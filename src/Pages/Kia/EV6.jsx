import React from 'react'
import Props from '../../Components/Props';
import H1 from '../../assets/Images/Kia/EV6/1.jpg'
import H2 from '../../assets/Images/Kia/EV6/2.jpg'
import H3 from '../../assets/Images/Kia/EV6/3.jpg'
import H4 from '../../assets/Images/Kia/EV6/4.jpg'
import H5 from '../../assets/Images/Kia/EV6/5.jpg'
import H6 from '../../assets/Images/Kia/EV6/6.jpg'
import H7 from '../../assets/Images/Kia/EV6/6.jpg'

export default function EV6() {
    const images = [
        H1,H2,H3,H4,H5,H6,H7
      ];
  return (
    <div>
          
          <Props imagesArray={[H1,H2,H3,H4,H5,H6,H7]} 
        images={images} brand={"Kia"}
        Car={"Kia EV6"} Price={"Rs. 60.95 Lakh"}
        About={"The Kia EV6 looks to be an extremely impressive product from Kia Motors and there is no doubt it has all the potential to be a halo EV product."}
         Mileage={"21kmpl"}
          FuelType={"--"}
           EngineDisplacement={"--"}
            Cylinder={"--"}
             MaxPower={"320.55bhp"}
              MaxTorque={"605Nm"} 
              Seat={"5"} 
              TransmissionType={"--"}
               FuelCapacity={"--"}
                BodyType={"SUV"} 
                GroundClearanceUnladen={"--"}

         Features={['Power Steering',	
         'Power Windows Front',	
         'Anti Lock Braking System',	
         'Air Conditioner',
         'Driver Airbag	',
         'Passenger Airbag',	
         'Fog Lights - Front',	
         'Alloy Wheels'	,
         'Multi-function Steering Wheel']} 
         StandoutFeatures={['Performance is immediate, 0-100kmph in 5.2 seconds.']}
         />
    </div>
  )
}
