import React from 'react'
import Props from '../../Components/Props'
import H1 from '../../assets/Images/Ferrari/296 GTB/1.jpg'
import H2 from '../../assets/Images/Ferrari/296 GTB/2.jpg'
import H3 from '../../assets/Images/Ferrari/296 GTB/3.jpg'
import H4 from '../../assets/Images/Ferrari/296 GTB/4.jpg'
import H5 from '../../assets/Images/Ferrari/296 GTB/5.jpg'

export default function F296GTB() {
    const images = [
        H1,H2,H3,H4,H5
      ];
  return (
    <div>
          
          <Props imagesArray={[H1,H2,H3,H4,H5]} 
        images={images} brand={"Ferrari"}
        Car={"Ferrari 296 GTB"} Price={"Rs.5.40 Cr"}
        About={""}
         Mileage={""}
          FuelType={"Petrol"}
           EngineDisplacement={"2992cc"}
            Cylinder={"6"}
             MaxPower={"831.43bhp"}
              MaxTorque={"740Nm@6250rpm"} 
              Seat={"2"} 
              TransmissionType={"Automatic"}
               FuelCapacity={"65 Litres"}
                BodyType={"Coupe"} 
                GroundClearanceUnladen={""}

         Features={['Air Conditioner','Fog Lights -Front','Alloy Wheels']} 
         StandoutFeatures={['']}
         />
    </div>
  )
}
