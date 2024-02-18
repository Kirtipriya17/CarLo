import React from 'react'
import Props from '../../Components/Props';
import H1 from '../../assets/Images/rollsroyce/SPECTRE/1.jpg'
import H2 from '../../assets/Images/rollsroyce/SPECTRE/2.jpg'




export default function Spectre() {
    const images = [
        H1,H2
      ];
  return (
    <div>
          
          <Props imagesArray={[H1,H2]} 
        images={images} brand={"Rolls-Royce"}
        Car={"Rolls-Royce Spectre"} Price={"Rs.7.50 Cr*"}
        About={"For the price, the Spectre is likely to be the most expensive electric car available worldwide. Nevertheless, with no direct competitor yet, this two-door coupe enjoys a niche spot in the Indian market."}
         Mileage={"9.5 Kmpl"}
          FuelType={"Electric"}
           EngineDisplacement={"--"}
            Cylinder={"--"}
             MaxPower={"576.63bhp"}
              MaxTorque={"900Nm"} 
              Seat={"4"} 
              TransmissionType={"--"}
               FuelCapacity={"--"}
                BodyType={"Coupe"} 
                GroundClearanceUnladen={"--"}

         Features={['Power Steering',	
         'Power Windows Front',	
         'Anti Lock Braking System',	
         'Air Conditioner',
         'Driver Airbag	',
         'Passenger Airbag',	
         'Engine Start Stop Button',	
         'Alloy Wheels'	,
         'Multi-function Steering Wheel']} 
         StandoutFeatures={['Outrageous power. ']}
         />
    </div>
  )
}
