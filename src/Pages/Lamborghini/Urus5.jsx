import React from 'react'
import Props from '../../Components/Props';
import H1 from '../../assets/Images/lamborghini/URUS S/1.jpg'
import H2 from '../../assets/Images/lamborghini/URUS S/2.jpg'
import H3 from '../../assets/Images/lamborghini/URUS S/4.jpg'
import H4 from '../../assets/Images/lamborghini/URUS S/3.jpg'
import H5 from '../../assets/Images/lamborghini/URUS S/5.jpg'
export default function Urus5() {
    const images = [
        H1,H2,H3,H4,H5
      ];
  return (
    <div>
          
          <Props imagesArray={[H1,H2,H3,H4,H5]} 
        images={images} brand={"Lamborghini"}
        Car={"Lamborghini Urus 5"} Price={"Rs. 4.18 Croreh"}
        About={"As a step up from its predecessor, the Urus S betters the Urus in almost all parameters. And that says something because it was a great package, to begin with."}
         Mileage={"7.8 kmpl"}
          FuelType={"Petrol"}
           EngineDisplacement={"3999 cc"}
            Cylinder={"8"}
             MaxPower={"657 bhp"}
              MaxTorque={"850 Nm"} 
              Seat={"5"} 
              TransmissionType={"automatic"}
               FuelCapacity={"75 Litres"}
                BodyType={"SUV"} 
                GroundClearanceUnladen={" 158 mm"}

         Features={['Power Steering',	
         'Power Windows Front',	
         'Anti Lock Braking System',	
         'Air Conditioner',
         'Driver Airbag	',
         'Passenger Airbag']} 
         StandoutFeatures={['Spectacular acceleration','Sharp and sporty styling']}
         />
    </div>
  )
}
