import React from 'react'
import Props from '../../Components/Props';
import H1 from '../../assets/Images/maruti/BALENO/1.jpg'
import H2 from '../../assets/Images/maruti/BALENO/2.jpg'
import H3 from '../../assets/Images/maruti/BALENO/3.jpg'
import H4 from '../../assets/Images/maruti/BALENO/5.jpg'

export default function Baleno() {
    const images = [
        H1,H2,H3,H4
      ];
  return (
    <div>
          
          <Props imagesArray={[H1,H2,H3,H4]} 
        images={images} brand={"Maruti Suzuki "}
        Car={"Maruti Suzuki Baleno"} Price={"Rs.60.95 - 65.95 Lakh"}
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
