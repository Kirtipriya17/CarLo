
import React from 'react'
import Props from '../../Components/Props';
import H1 from '../../assets/Images/hyundai/CRETA/4.jpg'
import H2 from '../../assets/Images/hyundai/CRETA/2.jpg'
import H3 from '../../assets/Images/hyundai/CRETA/3.jpg'
import H4 from '../../assets/Images/hyundai/CRETA/1.jpg'

export default function Creta() {
    const images = [
        H1,H2,H3,H4
      ];
  return (
    <div>
          
          <Props imagesArray={[H1,H2,H3,H4]} 
        images={images} brand={"Hyundai "}
        Car={"Hyundai Creta"} Price={"Rs. 11.00 Lakh"}
        About={"The new Hyundai CRETA is equipped with home-to-car with Alexa and innovative Hyundai Bluelink app gives you the power to control your car from the comfort of your home or office."}
         Mileage={"18.4 kmpl"}
          FuelType={"Petrol"}
           EngineDisplacement={"1482 cc"}
            Cylinder={"4"}
             MaxPower={"157.57bhp@5500rpm"}
              MaxTorque={"253Nm@1500-3500rpm"} 
              Seat={"5"} 
              TransmissionType={"Automatic"}
               FuelCapacity={"50 Litres"}
                BodyType={"SUV"} 
                GroundClearanceUnladen={"190 mm"}

         Features={['Power Steering',	
         'Power Windows Front',	
         'Anti Lock Braking System',	
         'Air Conditioner',
         'Driver Airbag	',
         'Passenger Airbag',	
         'Engine Start Stop Button',	
         'Alloy Wheels'	,
         'Multi-function Steering Wheel']} 
         StandoutFeatures={['Powertrains have adequate grunt for most driving situations.','Hyundai spares/service availability and resale value. ']}
         />
    </div>
  )
}
