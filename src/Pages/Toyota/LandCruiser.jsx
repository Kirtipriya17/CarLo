import React from 'react'
import Props from '../../Components/Props';
import H1 from '../../assets/Images/toyota/LAND CRUISER/1.jpg'
import H2 from '../../assets/Images/toyota/LAND CRUISER/2.jpg'
import H3 from '../../assets/Images/toyota/LAND CRUISER/3.jpg'



export default function LandCruiser() {
    const images = [
        H1,H2,H3
      ];
  return (
    <div>
          
          <Props imagesArray={[H1,H2,H3]} 
        images={images} brand={"Toyota"}
        Car={"Toyota Land Cruiser 300"} Price={"Rs.2.10 Cr"}
        About={"The Land Cruiser has a reputation that's made it an aspirational buy of sorts. At its asking price, it also becomes a status symbol. "}
         Mileage={"11kmpl"}
          FuelType={"Diesel"}
           EngineDisplacement={"3346 cc"}
            Cylinder={"6"}
             MaxPower={"304.41bhp@4000rpm"}
              MaxTorque={"700Nm@1600-2600rpm"} 
              Seat={"5"} 
              TransmissionType={"Automatic"}
               FuelCapacity={"110 Litres"}
                BodyType={"SUV"} 
                GroundClearanceUnladen={"235 mm"}

         Features={['Power Steering',	
         'Power Windows Front',	
         'Anti Lock Braking System',	
         'Air Conditioner',
         'Driver Airbag	',
         'Passenger Airbag',	
         'Engine Start Stop Button',	
         'Alloy Wheels'	,
         'Multi-function Steering Wheel']} 
         StandoutFeatures={['Strong powertrain and underpinnings.']}
         />
    </div>
  )
}
