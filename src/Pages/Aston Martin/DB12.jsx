import React from 'react'
import Props from '../../Components/Props';
import H2 from '../../assets/Images/Aston martin/DB12/1.jpg'
import H1 from '../../assets/Images/Aston martin/DB12/2.jpg'
import H3 from '../../assets/Images/Aston martin/DB12/3.jpg'
import H4 from '../../assets/Images/Aston martin/DB12/4.jpg'
import H5 from '../../assets/Images/Aston martin/DB12/5.jpg'
import H6 from '../../assets/Images/Aston martin/DB12/6.jpg'

export default function DB12() {
    const images = [
        H1,H2,H3,H4,H5,H6
      ];
  return (
    <div>
          
          <Props imagesArray={[H1,H2,H3,H4,H5,H6]} 
        images={images} brand={"Aston Martin"}
        Car={"Aston Martin DB12"} Price={"Rs.4.59 Cr"}
        About={"The DB12 has evolved well enough to give it the edge that makes it one of the better Aston Martins yet."}
         Mileage={"12.75 kmpl"}
          FuelType={"Petrol"}
           EngineDisplacement={"3982cc"}
            Cylinder={"8"}
             MaxPower={"670.69bhp@6000rpm"}
              MaxTorque={"800Nm@2750-6000rpm"} 
              Seat={"2"} 
              TransmissionType={"Automatic"}
               FuelCapacity={"78 Litres"}
                BodyType={"Coupe"} 
                GroundClearanceUnladen={"120 mm"}

         Features={['Power Steering',	
         'Power Windows Front',	
         'Anti Lock Braking System',	
         'Air Conditioner',
         'Driver Airbag	',
         'Passenger Airbag',	
         'Engine Start Stop Button',	
         'Alloy Wheels'	,
         'Multi-function Steering Wheel']} 
         StandoutFeatures={['Dynamic performance ']}
         />
    </div>
  )
}
