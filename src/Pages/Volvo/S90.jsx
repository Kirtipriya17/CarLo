import React from 'react'
import Props from '../../Components/Props';
import H1 from '../../assets/Images/volvo/S90/5.jpg'
import H2 from '../../assets/Images/volvo/S90/1.jpg'
import H3 from '../../assets/Images/volvo/S90/2.jpg'
import H4 from '../../assets/Images/volvo/S90/3.jpg'
import H5 from '../../assets/Images/volvo/S90/4.jpg'



export default function S90() {
    const images = [
        H1,H2,H3,H4,H5
      ];
  return (
    <div>
          
          <Props imagesArray={[H1,H2,H3,H4,H5]} 
        images={images} brand={"Volvo"}
        Car={"Volvo S90"} Price={"Rs.68.25 Lakh"}
        About={"The S90 mild hybrid has been engineered to deliver smooth take-offs and refined acceleration, making both city and highway journeys more refined."}
         Mileage={"14.7 kmpl"}
          FuelType={"Petrol"}
           EngineDisplacement={"1969 cc"}
            Cylinder={"4"}
             MaxPower={"246.58bhp"}
              MaxTorque={"350Nm"} 
              Seat={"5"} 
              TransmissionType={"Automatic"}
               FuelCapacity={"60 Litres"}
                BodyType={"Sedan"} 
                GroundClearanceUnladen={"--"}

         Features={['Power Steering',	
         'Power Windows Front',	
         'Anti Lock Braking System',	
         'Air Conditioner',
         'Driver Airbag	',
         'Passenger Airbag',	
         'Fog Lights - Front',	
         'Alloy Wheels'	,
         'Automatic Climate Controll']} 
         StandoutFeatures={['The design language stands out amidst the Germans on our roads','The S90 has an absorbent ride quality regardless of the road conditions']}
         />
    </div>
  )
}
