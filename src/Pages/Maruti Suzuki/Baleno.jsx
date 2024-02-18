import React from 'react'
import Props from '../../Components/Props';
import H1 from '../../assets/Images/maruti/BALENO/1.jpg'
import H2 from '../../assets/Images/maruti/BALENO/2.jpg'
import H3 from '../../assets/Images/maruti/BALENO/3.jpg'
import H4 from '../../assets/Images/maruti/BALENO/5.jpg'

export default function Baleno() {
    const images = [
        H1,H2,H3,H4
      ];
  return (
    <div>
          
          <Props imagesArray={[H1,H2,H3,H4]} 
        images={images} brand={"Maruti Suzuki "}
        Car={"Maruti Suzuki Baleno"} Price={"Rs. 6.66 Lakh"}
        About={"With the new Maruti Suzuki Baleno, the company have listened to their customers and accordingly made plenty of important changes that have transformed the car delightfully. The new Baleno is more comfortable, drives better and gets many new important features."}
         Mileage={"19 kmpl"}
          FuelType={"Petrol"}
           EngineDisplacement={"1197 cc"}
            Cylinder={"4"}
             MaxPower={"88.50bhp@6000rpm"}
              MaxTorque={"113Nm@4400rpm"} 
              Seat={"5"} 
              TransmissionType={"Automatic"}
               FuelCapacity={"37 Litres"}
                BodyType={"Hatchback"} 
                GroundClearanceUnladen={"170mm"}

         Features={['Power Steering',	
         'Power Windows Front',	
         'Anti Lock Braking System',	
         'Air Conditioner',
         'Driver Airbag	',
         'Passenger Airbag',	
         'Automatic Climate Control',	
         'Alloy Wheels'	,
         'Multi-function Steering Wheel']} 
         StandoutFeatures={[' 360 Degree Camera','Heads-up Display','9-inch SmartPlay Pro Infotainment System']}
         />
    </div>
  )
}
