import React from 'react'
import Props from '../../Components/Props';
import H1 from '../../assets/Images/tata/TATA TIAGO/1.jpg'
import H2 from '../../assets/Images/tata/TATA TIAGO/2.jpg'
import H3 from '../../assets/Images/tata/TATA TIAGO/3.jpg'


export default function Tiago() {
    const images = [
        H1,H2,H3
      ];
  return (
    <div>
          
          <Props imagesArray={[H1,H2,H3]} 
        images={images} brand={"Tata"}
        Car={"Tata Tiago"} Price={"Rs.5.65 Lakh"}
        About={"Tiago does everything right to appeal to the youth. It is a fun, safe & sporty car which peppy performance, infotainment and ensures absolute safety for Seriously Fun Rides."}
         Mileage={"26.49 km/kg"}
          FuelType={"Petrol"}
           EngineDisplacement={"1199 cc"}
            Cylinder={"3"}
             MaxPower={"72.41bhp@6000rpm"}
              MaxTorque={"95Nm@3500rpm"} 
              Seat={"5"} 
              TransmissionType={"Automatic"}
               FuelCapacity={"60 Litres"}
                BodyType={"Hatchback"} 
                GroundClearanceUnladen={"168 mm mm"}

         Features={['Power Steering',	
         'Power Windows Front',	
         'Anti Lock Braking System',	
         'Air Conditioner',
         'Driver Airbag	',
         'Passenger Airbag',	
         'Wheel Covers',	
         'Automatic Climate Control'	,
         'Multi-function Steering Wheel']} 
         StandoutFeatures={['Digital instrument cluster','Automatic AC',' 8-speaker sound system']}
         />
    </div>
  )
}
