import React from 'react'
import Props from '../../Components/Props';
import H1 from '../../assets/Images/audi/E-TRON-GT/1.jpg'
import H2 from '../../assets/Images/audi/E-TRON-GT/2.jpg'
import H3 from '../../assets/Images/audi/E-TRON-GT/3.jpg'
import H4 from '../../assets/Images/audi/E-TRON-GT/5.jpg'
import H5 from '../../assets/Images/audi/E-TRON-GT/4.jpg'

export default function ETron() {
    const images = [
        H1,H2,H3,H4,H5
      ];
  return (
    <div>
          
          <Props imagesArray={[H1,H2,H3,H4,H5]} 
        images={images} brand={"Audi"}
        Car={"Audi Etron GT"} Price={"Rs.1.72 Cr"}
        About={"As far as we are concerned, the future is looking remarkably ‘current’ and everything about the e-Tron, including the driving experience, is unmistakably Audi and that’s a great thing."}
         Mileage={""}
          FuelType={"--"}
           EngineDisplacement={"--"}
            Cylinder={"---"}
             MaxPower={"522.99bhp"}
              MaxTorque={"630Nm"} 
              Seat={"5"} 
              TransmissionType={"--"}
               FuelCapacity={""}
                BodyType={"Coupe"} 
                GroundClearanceUnladen={"16.5 cm"}

         Features={['Power Steering',	
         'Power Windows Front',	
         'Anti Lock Braking System',	
         'Air Conditioner',
         'Driver Airbag	',
         'Passenger Airbag',	
         'Automatic Climate Control',	
         'Alloy Wheels']} 
         StandoutFeatures={['Instantaneous performance']}
         />
    </div>
  )
}
