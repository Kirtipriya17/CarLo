import React from 'react'
import Props from '../../Components/Props';
import H4 from '../../assets/Images/Aston martin/Vantage/1.jpg'
import H2 from '../../assets/Images/Aston martin/Vantage/2.jpg'
import H3 from '../../assets/Images/Aston martin/Vantage/3.jpg'
import H1 from '../../assets/Images/Aston martin/Vantage/4.jpg'

export default function Vantage() {
    const images = [
        H1,H2,H3,H4
      ];
  return (
    <div>
          
          <Props imagesArray={[H1,H2,H3,H4]} 
        images={images} brand={"Aston Martin"}
        Car={"Aston Martin Vantage"} Price={"Rs. 3.50 Cr"}
        About={"The new-gen Vantage is a huge leap over the previous model. It is now more engaging to drive, thanks to the potent powertrain, and the cabin is more ergonomic and practical. Add to it the blistering performance, and this Aston is capable of putting a smile on your face every time. "}
         Mileage={"8.6 kmpl"}
         FuelType={"Petrol"}
         EngineDisplacement={"3998cc"}
          Cylinder={"8"}
           MaxPower={"502.88bhp@6000rpm"}
            MaxTorque={"675Nm@2000-5000rpm"} 
            Seat={"2"} 
            TransmissionType={"Manual"}
             FuelCapacity={"73 Litres"}
              BodyType={"Convertiblee"} 
              GroundClearanceUnladen={"122 mm"}
         Features={['Power Steering',	
         'Power Windows Front',	
         'Anti Lock Braking System',	
         'Air Conditioner',
         'Driver Airbag	',
         'Passenger Airbag',	
         'Engine Start Stop Button',	
         'Alloy Wheels'	,
         'Multi-function Steering Wheel']} 
         StandoutFeatures={['Extremely fast']}
         />
    </div>
  )
}
