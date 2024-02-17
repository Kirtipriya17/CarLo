import React from 'react'
import Props from '../../Components/Props';
import H5 from '../../assets/Images/jaguar/F-TYPE/1.jpg'
import H2 from '../../assets/Images/jaguar/F-TYPE/2.jpg'
import H3 from '../../assets/Images/jaguar/F-TYPE/3.jpg'
import H4 from '../../assets/Images/jaguar/F-TYPE/4.jpg'
import H1 from '../../assets/Images/jaguar/F-TYPE/5.jpg'

export default function FType() {
    const images = [
        H1,H2,H3,H4,H5
      ];
  return (
    <div>
          
          <Props imagesArray={[H1,H2,H3,H4,H5]} 
        images={images} brand={"Jaguar"}
        Car={"Jaguar F-Type"} Price={"Rs. 99.98 Lakh"}
        About={"The Jaguar F-Type has a sensual design with sleek lines and a coupe silhouette. It comes with multiple engine options and trim levels, so there’s an F-Type for everyone. Plus, the 5.0-litre V8 offers blistering performance."}
         Mileage={"12.3 kmpl"}
          FuelType={"Petrol"}
           EngineDisplacement={"5000cc"}
            Cylinder={"8"}
             MaxPower={"443.8bhp@6000rpm"}
              MaxTorque={"580Nm@2500-500rpm"} 
              Seat={"2"} 
              TransmissionType={"Automatic"}
               FuelCapacity={"70 Litres"}
                BodyType={"Coupe"} 
                GroundClearanceUnladen={"100mm mm"}

         Features={['Power Steering',	
         'Power Windows Front',	
         'Anti Lock Braking System',	
         'Air Conditioner',
         'Driver Airbag	',
         'Passenger Airbag',	
         'Fog Lights - Front',	
         'Alloy Wheels'	,
         'Automatic Climate Control']} 
         StandoutFeatures={['Blistering performance']}
         />
    </div>
  )
}
