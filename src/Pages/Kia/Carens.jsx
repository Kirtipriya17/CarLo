import React from 'react'
import Props from '../../Components/Props';
import H1 from '../../assets/Images/Kia/CARENS/1.jpg'
import H2 from '../../assets/Images/Kia/CARENS/2.jpg'
import H3 from '../../assets/Images/Kia/CARENS/3.jpg'
import H4 from '../../assets/Images/Kia/CARENS/4.jpg'
import H5 from '../../assets/Images/Kia/CARENS/5.jpg'
import H6 from '../../assets/Images/Kia/CARENS/6.jpg'

export default function Carens() {
    const images = [
        H1,H2,H3,H4,H5,H6
      ];
  return (
    <div>
          
          <Props imagesArray={[H1,H2,H3,H4,H5,H6]} 
        images={images} brand={"Kia"}
        Car={"Kia Carens"} Price={"Rs.10.45 - 19.45 Lakh"}
        About={""}
         Mileage={"21 kmpl"}
          FuelType={"Diesel"}
           EngineDisplacement={"1493cc"}
            Cylinder={"4"}
             MaxPower={"114.41bhp@4000rpm"}
              MaxTorque={"250Nm@1500-2750rpm"} 
              Seat={"6.7"} 
              TransmissionType={"Automatic"}
               FuelCapacity={"45 Litres"}
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
