import React from 'react'
import Props from '../../Components/Props';
import H1 from '../../assets/Images/toyota/VELLFIRE/1.jpg'
import H2 from '../../assets/Images/toyota/VELLFIRE/2.jpg'



export default function Vellfire() {
    const images = [
        H1,H2
      ];
  return (
    <div>
          
          <Props imagesArray={[H1,H2]} 
        images={images} brand={"Toyota"}
        Car={"Toyota Vellfire"} Price={"Rs. 1.20 Crore"}
        About={"The Toyota Vellfire appeals to the wealthy since they value exclusivity, status, and personal luxury space, and it undoubtedly delivers on all of these fronts. The new car has also seen exterior/interior upgrades, refreshed features and cabin colour themes. It may not have the snob value like the German brands, but all-in-all makes for a reliable alternative that's environment friendly due to its hybrid propulsion."}
         Mileage={"19kmpl"}
          FuelType={"Petrol"}
           EngineDisplacement={"2487 cc"}
            Cylinder={"4"}
             MaxPower={"140.1bhp@6000rpm"}
              MaxTorque={"240Nm@4296-4500rpm"} 
              Seat={"7"} 
              TransmissionType={"Automatic"}
               FuelCapacity={"60 Litres"}
                BodyType={"Minivan"} 
                GroundClearanceUnladen={"165 mm"}

         Features={['Power Steering',	
         'Power Windows Front',	
         'Anti Lock Braking System',	
         'Air Conditioner',
         'Driver Airbag	',
         'Passenger Airbag',	
         'Automatic Climate Control',	
         'Alloy Wheels'	,
         'Multi-function Steering Wheel']} 
         StandoutFeatures={['Toyota reliability, after-sales service and resale value.']}
         />
    </div>
  )
}
