import React from 'react'
import Props from '../../Components/Props';
import H1 from '../../assets/Images/mercedes/AMG A35/1.jpg'
import H2 from '../../assets/Images/mercedes/AMG A35//4.jpg'
import H3 from '../../assets/Images/mercedes/AMG A35/2.jpg'
import H4 from '../../assets/Images/mercedes/AMG A35/3.jpg'

export default function AMGA35() {
    const images = [
        H1,H2,H3,H4
      ];
  return (
    <div>
          
          <Props imagesArray={[H1,H2,H3,H4]} 
        images={images} brand={"Mercedes-Benz"}
        Car={"Mercedes-Benz AMG A35"} Price={"Rs. 58.00 Lakh"}
        About={"The A35 is more submissive, controlled, and a less wild AMG than what we are accustomed to. There is no rowdy V8 motor lurking under the hood and neither is all that tire-shredding power and torque left to the mercy of the rear wheel."}
         Mileage={"13.30 kmpl"}
          FuelType={"Petrol"}
           EngineDisplacement={"1991 cc"}
            Cylinder={"4"}
             MaxPower={"301 bhp"}
              MaxTorque={"400 Nm"} 
              Seat={"5"} 
              TransmissionType={"Automatic"}
               FuelCapacity={"51 litres"}
                BodyType={"Sedan"} 
                GroundClearanceUnladen={"160 mm"}

         Features={['Power Steering',	
         'Power Windows Front',	
         'Anti Lock Braking System',	
         'Air Conditioner',
         'Driver Airbag	',
         'Passenger Airbag',	
         'Fog Lights - Front',	
         'Alloy Wheels'	,
         'Multi-function Steering Wheel']} 
         StandoutFeatures={['Handling and grip']}
         />
    </div>
  )
}
