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
        Car={"Hyundai Creta"} Price={"Rs.60.95 - 65.95 Lakh"}
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