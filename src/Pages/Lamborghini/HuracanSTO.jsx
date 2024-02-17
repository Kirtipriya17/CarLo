import React from 'react'
import Props from '../../Components/Props';
import H1 from '../../assets/Images/lamborghini/HURACAN STO/3.jpg'
import H2 from '../../assets/Images/lamborghini/HURACAN STO/2.jpg'
import H3 from '../../assets/Images/lamborghini/HURACAN STO/1.jpg'
import H4 from '../../assets/Images/lamborghini/HURACAN STO/4.jpg'
export default function HuracanSTO() {
    const images = [
        H1,H2,H3,H4
      ];
  return (
    <div>
          
          <Props imagesArray={[H1,H2,H3,H4]} 
        images={images} brand={"Lamborghini"}
        Car={"Lamborghini Huracan STO"}  Price={"Rs. 4.99 Crore"}
        About={"The Lamborghini Huracan STO is not just some track-hungry maniac for the needy. It is surprisingly the closest we've seen of a track racing car in its most civilised iteration."}
         Mileage={"7.1 kmpl"}
          FuelType={"Petrol"}
           EngineDisplacement={"5204 cc"}
            Cylinder={"10"}
             MaxPower={"630 bhp"}
              MaxTorque={"565 Nm"} 
              Seat={"2"} 
              TransmissionType={"automatic"}
               FuelCapacity={"83 litres"}
                BodyType={"Race car"} 
                GroundClearanceUnladen={"125mm"}

         Features={['Power Steering',	
         'Power Windows Front',	
         'Anti Lock Braking System',	
         'Air Conditioner',
         'Driver Airbag	',
         'Passenger Airbag']} 
         StandoutFeatures={['Impressive chassis balance and ride']}
         />
    </div>
  )
}
