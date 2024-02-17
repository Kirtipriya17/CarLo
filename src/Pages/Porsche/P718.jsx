import React from 'react'
import Props from '../../Components/Props';
import H1 from '../../assets/Images/porsche/718/1.jpg'
import H2 from '../../assets/Images/porsche/718/3.jpg'
import H3 from '../../assets/Images/porsche/718/2.jpg'
import H4 from '../../assets/Images/porsche/718/4.jpg'

export default function P718() {
    const images = [
        H1,H2,H3,H4
      ];
  return (
    <div>
          
          <Props imagesArray={[H1,H2,H3,H4]} 
        images={images} brand={"Porsche"}
        Car={"Porsche 718"} Price={"Rs. 1.48 Crore"}
        About={"The Porsche 718 is the Boxster's replacement and now the cheapest car in Porsche's line-up. Porsche owners and enthusiasts have not really liked the downsizing from the naturally aspirated six-cylinder engine to a flat-four turbocharged motor. Nonetheless, the 718 lives up to Porsche's genes by offering a blistering performance and precise handling. A well-rounded package."}
         Mileage={"9.17 kmpl"}
          FuelType={"Petrol"}
           EngineDisplacement={"3997 cc"}
            Cylinder={"6"}
             MaxPower={"493.49bhp@8400rpm"}
              MaxTorque={"450Nm@6750rpm"} 
              Seat={"2"} 
              TransmissionType={"Automatic"}
               FuelCapacity={"64 Litres"}
                BodyType={"Coupe"} 
                GroundClearanceUnladen={"128mm mm"}

         Features={['Power Steering',	
         'Power Windows Front',	
         'Anti Lock Braking System',	
         'Air Conditioner',
         'Driver Airbag	',
         'Passenger Airbag',	
         'Fog Lights - Front',	
         'Alloy Wheels'	,
         'Automatic Climate Control']} 
         StandoutFeatures={['Eye-catching design','Brilliant performance']}
         />
    </div>
  )
}
