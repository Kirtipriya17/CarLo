import React from 'react'
import Props from '../../Components/Props';
import H2 from '../../assets/Images/toyota/FORTUNER LEGENDER/2.jpg'
import H1 from '../../assets/Images/toyota/FORTUNER LEGENDER/1.jpg'

export default function FortunerLegender() {
    const images = [
        H1,H2
      ];
  return (
    <div>
          
          <Props imagesArray={[H1,H2]} 
        images={images} brand={"Toyota"}
        Car={"Toyota Fortuner Legender"} Price={"Rs. 43.66 Lakh"}
        About={"With the Toyota Legender, one pays more for exclusivity through the sleeker and more stylish design language."}
         Mileage={"8 kmpl"}
          FuelType={"Diesel"}
           EngineDisplacement={"2755 cc"}
            Cylinder={"4"}
             MaxPower={"201.15bhp@3000-3400rpm"}
              MaxTorque={"500Nm@1600-2800rpm"} 
              Seat={"7"} 
              TransmissionType={"Automatic"}
               FuelCapacity={"80 Litres"}
                BodyType={"SUV"} 
                GroundClearanceUnladen={"279 mm"}

         Features={['Power Steering',	
         'Power Windows Front',	
         'Anti Lock Braking System',	
         'Air Conditioner',
         'Driver Airbag	',
         'Passenger Airbag',	
         'Fog Lights - Front',	
         'Alloy Wheels'	,
         'Multi-function Steering Wheel']} 
         StandoutFeatures={['Automatic gearbox is convenient in city traffic.']}
         />
    </div>
  )
}
