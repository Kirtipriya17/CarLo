import React from 'react'
import Props from '../../Components/Props';
import H1 from '../../assets/Images/jaguar/I-PACE/1.jpg'
import H2 from '../../assets/Images/jaguar/I-PACE/2.jpg'
import H3 from '../../assets/Images/jaguar/I-PACE/3.jpg'
import H4 from '../../assets/Images/jaguar/I-PACE/4.jpg'
import H5 from '../../assets/Images/jaguar/I-PACE/5.jpg'

export default function IPace() {
    const images = [
        H1,H2,H3,H4,H5
      ];
  return (
    <div>
          
          <Props imagesArray={[H1,H2,H3,H4,H5]} 
        images={images} brand={"Jaguar"}
        Car={"Jaguar I-PACE"} Price={"Rs. 1.20 Crore"}
        About={"Jaguar deserves credit for bringing their halo EV to India. Better still, they deserve even more credit for coming up with an electric vehicle that looks the part, is fun to drive, fairly luxurious and most important of all, suitable for daily use with a long enough range and sorted dynamics."}
         Mileage={"--"}
          FuelType={"--"}
           EngineDisplacement={"--"}
            Cylinder={""}
             MaxPower={"394.26bhp"}
              MaxTorque={"696Nm"} 
              Seat={"5"} 
              TransmissionType={"--"}
               FuelCapacity={""}
                BodyType={"SUV"} 
                GroundClearanceUnladen={"174mm mm"}

         Features={['Power Steering',	
         'Power Windows Front',	
         'Anti Lock Braking System',	
         'Air Conditioner',
         'Driver Airbag	',
         'Passenger Airbag',	
         'Fog Lights - Front',	
         'Alloy Wheels'	,
         'Multi-function Steering Wheel']} 
         StandoutFeatures={['Electric']}
         />
    </div>
  )
}
