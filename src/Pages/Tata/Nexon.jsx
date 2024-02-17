import React from 'react'
import Props from '../../Components/Props';
import H1 from '../../assets/Images/tata/TATA NEXON/1.jpg'
import H2 from '../../assets/Images/tata/TATA NEXON/2.jpg'
import H3 from '../../assets/Images/tata/TATA NEXON/3.jpg'
import H4 from '../../assets/Images/tata/TATA NEXON/4.jpg'


export default function Nexon() {
    const images = [
        H1,H2,H3,H4
      ];
  return (
    <div>
          
          <Props imagesArray={[H1,H2,H3,H4]} 
        images={images} brand={"Tata"}
        Car={"Tata Nexon"} Price={"Rs.8.15 Lakh"}
        About={"New Tata Nexon scores five-star safety ratings in the GNCAP crash tests."}
         Mileage={"24.08 kmpl"}
          FuelType={"Diesel"}
           EngineDisplacement={"1497 cc"}
            Cylinder={"4"}
             MaxPower={"113.31bhp@3750rpm"}
              MaxTorque={"260Nm@1500-2750rpm"} 
              Seat={"5"} 
              TransmissionType={"Automatic"}
               FuelCapacity={"44 Litres"}
                BodyType={"SUV"} 
                GroundClearanceUnladen={"208 mm"}

         Features={['Power Steering',	
         'Power Windows Front',	
         'Anti Lock Braking System',	
         'Air Conditioner',
         'Driver Airbag	',
         'Passenger Airbag',	
         'Automatic Climate Control',	
         'Alloy Wheels'	,
         'Multi-function Steering Wheel']} 
         StandoutFeatures={['Six airbags are standard, high safety rating is expected.']}
         />
    </div>
  )
}
