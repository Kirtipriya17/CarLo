import React from 'react'
import Props from '../../Components/Props';
import H1 from '../../assets/Images/Aston martin/DBX/1.jpg'
import H2 from '../../assets/Images/Aston martin/DBX/2.jpg'
import H3 from '../../assets/Images/Aston martin/DBX/3.jpg'
import H4 from '../../assets/Images/Aston martin/DBX/4.jpg'
import H5 from '../../assets/Images/Aston martin/DBX/5.jpg'

export default function DBX() {
    const images = [
        H1,H2,H3,H4,H5
      ];
  return (
    <div>
          
          <Props imagesArray={[H1,H2,H3,H4,H5]} 
        images={images} brand={"Aston Martin"}
        Car={"Aston Martin DBX"} Price={"Rs. 3.82 Crore"}
        About={"A practical, fast and luxurious attempt for the elite from the Aston Martin stable."}
         Mileage={"10.1 kmpl"}
          FuelType={"Petrol"}
           EngineDisplacement={"3982cc"}
            Cylinder={"8"}
             MaxPower={"697bhp@6000rpm"}
              MaxTorque={"900Nm@2600-4500rpm"} 
              Seat={"5"} 
              TransmissionType={"Automatic"}
               FuelCapacity={"85 Litres"}
                BodyType={"SUV"} 
                GroundClearanceUnladen={"235mm mm"}

         Features={['Power Steering',	
         'Power Windows Front',	
         'Anti Lock Braking System',	
         'Air Conditioner',
         'Driver Airbag	',
         'Passenger Airbag',	
         'Fog Lights - Front',	
         'Alloy Wheels'	,
         'Multi-function Steering Wheel']} 
         StandoutFeatures={['Handling, fun to drive']}
         />
    </div>
  )
}
