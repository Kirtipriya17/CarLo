import React from 'react'
import Props from '../../Components/Props';
import H1 from '../../assets/Images/Ferrari/F8 TRIBUTO/1.jpg'
import H2 from '../../assets/Images/Ferrari/F8 TRIBUTO/2.jpg'
import H3 from '../../assets/Images/Ferrari/F8 TRIBUTO/3.jpg'
import H4 from '../../assets/Images/Ferrari/F8 TRIBUTO/4.jpg'
import H5 from '../../assets/Images/Ferrari/F8 TRIBUTO/5.jpg'
import H6 from '../../assets/Images/Ferrari/F8 TRIBUTO/6.jpg'

export default function F8Tributo() {
    const images = [
        H1,H2,H3,H4,H5,H6
      ];
  return (
    <div>
          
          <Props imagesArray={[H1,H2,H3,H4,H5]} 
        images={images} brand={"Ferrari"}
        Car={"Ferrari F8 Tributo"} Price={"Rs.4.02 Cr"}
        About={"The Ferrari F8 Tributo is a great amalgamation of a powerful mid-engine V8 motor and outstanding handling that’s equally at home on the race track and switchbacks. And as its name suggests, it pays tribute to the 'Prancing Horse' logo in the best way possible."}
         Mileage={"7.8 kmpl"}
          FuelType={"Petrol"}
           EngineDisplacement={"3902cc"}
            Cylinder={"8"}
             MaxPower={"710.74bhp@8000rpm"}
              MaxTorque={"770Nm@3250rpm"} 
              Seat={"2"} 
              TransmissionType={"Automatic"}
               FuelCapacity={"200 Litres"}
                BodyType={"Coupe"} 
                GroundClearanceUnladen={"205 mm"}

         Features={['Power Steering',	
         'Power Windows Front',	
         'Anti Lock Braking System',	
         'Air Conditioner',
         'Driver Airbag	',
         'Passenger Airbag',	
         'Automatic Climate Control',	
         'Alloy Wheels'	,
         'Multi-function Steering Wheel']} 
         StandoutFeatures={['Outstanding engine performance and handling']}
         />
    </div>
  )
}
