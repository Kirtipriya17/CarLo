import React from 'react'
import Props from '../../Components/Props';
import H1 from '../../assets/Images/hyundai/VERNA/4.jpg'
import H2 from '../../assets/Images/hyundai/VERNA/1.jpg'
import H3 from '../../assets/Images/hyundai/VERNA/3.jpg'
import H4 from '../../assets/Images/hyundai/VERNA/2.jpg'

export default function Verna() {
    const images = [
        H1,H2,H3,H4
      ];
  return (
    <div>
          
          <Props imagesArray={[H1,H2,H3,H4]} 
        images={images} brand={"Hyundai "}
        Car={"Hyundai Verna"} Price={"Rs. 11.00 Lakh "}
        About={"  Verna is so much more advanced in every aspect. It boasts a long list of features/safety kit, a spacious and practical cabin, and good build quality. Indeed, it ticks all the right boxes despite the absence of a diesel motor."}
         Mileage={"20.6 kmpl"}
          FuelType={"Petrol"}
           EngineDisplacement={"1482 cc"}
            Cylinder={"4"}
             MaxPower={"157.57bhp@5500rpm"}
              MaxTorque={"253Nm@1500-3500rpm"} 
              Seat={"5"} 
              TransmissionType={"Automatic"}
               FuelCapacity={"45 Litres"}
                BodyType={"Sedan"} 
                GroundClearanceUnladen={"165 mm"}

         Features={['Power Steering',	
         'Power Windows Front',	
         'Anti Lock Braking System',	
         'Air Conditioner',
         'Driver Airbag	',
         'Passenger Airbag',	
         'Fog Lights - FrontAutomatic Climate ControlAlloy Wheels'	,
         'Multi-function Steering Wheel']} 
         StandoutFeatures={['Wide sales and service network']}
         />
    </div>
  )
}
