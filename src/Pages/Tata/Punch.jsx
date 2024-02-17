import React from 'react'
import Props from '../../Components/Props';
import H1 from '../../assets/Images/tata/PUNCH/1.jpg'
import H2 from '../../assets/Images/tata/PUNCH/2.jpg'

export default function Punch() {
    const images = [
        H1,H2
      ];
  return (
    <div>
          
          <Props imagesArray={[H1,H2]} 
        images={images} brand={"Tata"}
        Car={"Tata Punch"} Price={"Rs.6.13 Lakh"}
        About={"Presenting Tata PUNCH, the no-compromise SUV. The epitome of class that offers a blend of sporty dynamics and tough utility."}
         Mileage={"18.8 kmpl"}
          FuelType={"Petrol"}
           EngineDisplacement={"1199 cc"}
            Cylinder={"3"}
             MaxPower={"86.63bhp@6000rpm"}
              MaxTorque={"115Nm@3250+/-100rpm"} 
              Seat={"5"} 
              TransmissionType={"Automatic"}
               FuelCapacity={"37 Litres"}
                BodyType={"SUV"} 
                GroundClearanceUnladen={"187 mm"}

         Features={['Power Steering',	
         'Power Windows Front',	
         'Anti Lock Braking System',	
         'Air Conditioner',
         'Driver Airbag	',
         'Passenger Airbag',	
         'Fog Lights - Front',	
         'Alloy Wheels'	,
         'Automatic Climate Control']} 
         StandoutFeatures={['7.0-inch Harman infotainment system','Auto headlamps']}
         />
    </div>
  )
}
