import React from 'react'
import Props from '../../Components/Props';
import H1 from '../../assets/Images/audi/RS 5/1.jpg'
import H2 from '../../assets/Images/audi/RS 5/3.jpg'
import H3 from '../../assets/Images/audi/RS 5/2.jpg'
import H4 from '../../assets/Images/audi/RS 5/4.jpg'

export default function RS5() {
    const images = [
        H1,H2,H3,H4
      ];
  return (
    <div>
          
          <Props imagesArray={[H1,H2,H3,H4]} 
        images={images} brand={"Audi"}
        Car={"Audi RS5"} Price={"Rs.1.13 Cr"}
        About={"With an extra set of doors, the whole aura around the Audi RS5 Coupe now revolves around being an intoxicating drive for more occupants."}
         Mileage={"8.8kmpl"}
          FuelType={"Diesel"}
           EngineDisplacement={"2894 cc"}
            Cylinder={"6"}
             MaxPower={"443.87bhp@5700-6700rpm"}
              MaxTorque={"600Nm@1900-5000rpm"} 
              Seat={"4"} 
              TransmissionType={"Automatic"}
               FuelCapacity={"58 Litres"}
                BodyType={"Coupe"} 
                GroundClearanceUnladen={"127 mm"}

         Features={['Power Steering',	
         'Power Windows Front',	
         'Anti Lock Braking System',	
         'Air Conditioner',
         'Driver Airbag	',
         'Passenger Airbag',	
         'Fog Lights - Front',	
         'Alloy Wheels'	,
         'Multi-function Steering Wheel']} 
         StandoutFeatures={['Practical four doors and comfortable cabin']}
         />
    </div>
  )
}
