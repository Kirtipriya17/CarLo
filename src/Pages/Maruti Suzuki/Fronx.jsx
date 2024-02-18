import React from 'react'
import Props from '../../Components/Props';
import H1 from '../../assets/Images/maruti/FRONX/1.jpg'
import H2 from '../../assets/Images/maruti/FRONX/4.jpg'
import H3 from '../../assets/Images/maruti/FRONX/2.jpg'
import H4 from '../../assets/Images/maruti/FRONX/5.jpg'

export default function Fronx() {
    const images = [
        H1,H2,H3,H4
      ];
  return (
    <div>
          
          <Props imagesArray={[H1,H2,H3,H4]} 
        images={images} brand={"Maruti Suzuki "}
        Car={"Maruti Suzuki Fronx"} Price={"Rs. 7.51 Lakh"}
        About={"Designed to plug the gap between the Baleno and Brezza, the new Fronx has quite a lot going for it. Namely the stance, a long list of features, a mature ride and a refined set of capable motors. Yet another winner from Maruti!"}
         Mileage={"20 kpml"}
          FuelType={"Petrol"}
           EngineDisplacement={"998 cc"}
            Cylinder={"3"}
             MaxPower={"98.69bhp@5500rpm"}
              MaxTorque={"147.6Nm@2000-4500rpm"} 
              Seat={"5"} 
              TransmissionType={"Automatic"}
               FuelCapacity={"37 Litres"}
                BodyType={"SUV"} 
                GroundClearanceUnladen={"190 mm"}

         Features={['Power Steering',	
         'Power Windows Front',	
         'Anti Lock Braking System',	
         'Air Conditioner',
         'Driver Airbag	',
         'Passenger Airbag',	
         'Automatic Climate Controlt',	
         'Alloy Wheels'	,
         'Multi-function Steering Wheel']} 
         StandoutFeatures={['Heads-up display','360-degree camera','Wireless Android Auto and Apple CarPlay']}
         />
    </div>
  )
}
