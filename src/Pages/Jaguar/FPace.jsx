import React from 'react'
import Props from '../../Components/Props';
import H1 from '../../assets/Images/jaguar/F- PACE/1.jpg'
import H2 from '../../assets/Images/jaguar/F- PACE/2.jpg'
import H3 from '../../assets/Images/jaguar/F- PACE/3.jpg'
import H4 from '../../assets/Images/jaguar/F- PACE/4.jpg'
import H5 from '../../assets/Images/jaguar/F- PACE/5.jpg'
import H6 from '../../assets/Images/jaguar/F- PACE/6.jpg'

export default function FPace() {
    const images = [
        H1,H2,H3,H4,H5,H6
      ];
  return (
    <div>
          
          <Props imagesArray={[H1,H2,H3,H4,H5,H6]} 
        images={images} brand={"Jaguar"}
        Car={"Jaguar F-Pace"} Price={"Rs.78.90 Lakh"}
        About={"The Jaguar F-Pace has improved in many ways and as a result, is a better proposition than it has ever been. It’s stunning looking, more refined, way nicer on the inside and with the addition of new-age tech, smarter as well. For the power-hungry, Jaguar now offers the F-Pace SVR."}
         Mileage={"19.3 kmpl"}
          FuelType={"Diesel"}
           EngineDisplacement={"1997cc"}
            Cylinder={"4"}
             MaxPower={"201.15bhp@3750rpm"}
              MaxTorque={"430Nm@1750-2500rpm"} 
              Seat={"5"} 
              TransmissionType={"Automatic"}
               FuelCapacity={"60 Litres"}
                BodyType={"SUV"} 
                GroundClearanceUnladen={"213 mm"}

         Features={['Power Steering',	
         'Power Windows Front',	
         'Anti Lock Braking System',	
         'Air Conditioner',
         'Driver Airbag	',
         'Passenger Airbag',	
         'Fog Lights - Front',	
         'Alloy Wheels'	,
         'Multi-function Steering Wheel']} 
         StandoutFeatures={['Cabin look and feel']}
         />
    </div>
  )
}
