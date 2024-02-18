import React from 'react'
import Props from '../../Components/Props';
import H1 from '../../assets/Images/maruti/DZIRE/1.jpg'
import H2 from '../../assets/Images/maruti/DZIRE/2.jpg'
import H3 from '../../assets/Images/maruti/DZIRE/3.jpg'

export default function Dzire() {
    const images = [
        H1,H2,H3
      ];
  return (
    <div>
          
          <Props imagesArray={[H1,H2,H3]} 
        images={images} brand={"Maruti Suzuki "}
        Car={"Maruti Suzuki Dzire"} Price={"Rs. 6.56 Lakh"}
        About={"The Dzire is a well-rounded package that is hard to fault. And with the last update, Maruti has also provided a styling update in the form of a revised fascia. Otherwise, the Dzire continues to be a car with a strong motor, is extremely efficient, has sorted dynamics and is spacious and comfortable overall. "}
         Mileage={"22 kmpl"}
          FuelType={"Petrol"}
           EngineDisplacement={"1197 cc"}
            Cylinder={"4"}
             MaxPower={"320.55bhp"}
              MaxTorque={"605Nm"} 
              Seat={"5"} 
              TransmissionType={"Automatic"}
               FuelCapacity={"37 Litres"}
                BodyType={"Sedan"} 
                GroundClearanceUnladen={"163 mm"}

         Features={['Power Steering',	
         'Power Windows Front',	
         'Anti Lock Braking System',	
         'Air Conditioner',
         'Driver Airbag	',
         'Passenger Airbag',	
         'Automatic Climate Control',	
         'Alloy Wheels'	,
         'Multi-function Steering Wheel']} 
         StandoutFeatures={['Absorbent and flat ride quality whatever the speed one is driving at.']}
         />
    </div>
  )
}
