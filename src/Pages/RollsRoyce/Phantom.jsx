import React from 'react'
import Props from '../../Components/Props';
import H1 from '../../assets/Images/rollsroyce/PHANTOM/1.jpg'




export default function Phantom() {
    const images = [
        H1
      ];
  return (
    <div>
          
          <Props imagesArray={[H1]} 
        images={images} brand={"Rolls-Royce"}
        Car={"Rolls-Royce Phantom"} Price={"Rs. 9.50 Crore"}
        About={"There is nothing in the global car market that competes with the Phantom and for good reasons. It’s grand in appearance, has top levels of luxuries and technology along with a sofa-like rear seat"}
         Mileage={"9.8 kmpl"}
          FuelType={"Petrol"}
           EngineDisplacement={"6749 cc"}
            Cylinder={"12"}
             MaxPower={"563bhp@5000rpm"}
              MaxTorque={"900Nm@1700rpm"} 
              Seat={"5"} 
              TransmissionType={"Automatic"}
               FuelCapacity={"100 Litres"}
                BodyType={"Sedan"} 
                GroundClearanceUnladen={"164mm mm"}

         Features={['Power Steering',	
         'Power Windows Front',	
         'Anti Lock Braking System',	
         'Air Conditioner',
         'Driver Airbag	',
         'Passenger Airbag',	
         'Fog Lights - Front',	
         'Alloy Wheels'	,
         'Automatic Climate Control']} 
         StandoutFeatures={['Unmatched craftsmanship with a million personalisation']}
         />
    </div>
  )
}
