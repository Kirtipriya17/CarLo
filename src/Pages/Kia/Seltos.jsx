import React from 'react'
import Props from '../../Components/Props';
import H5 from '../../assets/Images/Kia/SELTOS/1.jpg'
import H2 from '../../assets/Images/Kia/SELTOS/2.jpg'
import H3 from '../../assets/Images/Kia/SELTOS/3.jpg'
import H4 from '../../assets/Images/Kia/SELTOS/4.jpg'
import H1 from '../../assets/Images/Kia/SELTOS/5.jpg'

export default function Seltos() {
    const images = [
        H1,H2,H3,H4,H5
      ];
  return (
    <div>
          
          <Props imagesArray={[H1,H2,H3,H4,H5]} 
        images={images} brand={"Kia"}
        Car={"Kia Seltos"} Price={"Rs.10.90 - 20.30 Lakh"}
        About={""}
         Mileage={""}
          FuelType={"Diesel"}
           EngineDisplacement={"1493cc"}
            Cylinder={"4"}
             MaxPower={"114.41bhp@4000rpm"}
              MaxTorque={"250Nm@1500-2750rpm"} 
              Seat={"5"} 
              TransmissionType={"Automatic"}
               FuelCapacity={"447 Litres"}
                BodyType={"SUV"} 
                GroundClearanceUnladen={""}

         Features={['Power Steering',	
         'Power Windows Front',	
         'Anti Lock Braking System',	
         'Air Conditioner',
         'Driver Airbag	',
         'Passenger Airbag',	
         'Automatic Climate Control',	
         'Alloy Wheels'	,
         'Multi-function Steering Wheel']} 
         StandoutFeatures={['']}
         />
    </div>
  )
}
