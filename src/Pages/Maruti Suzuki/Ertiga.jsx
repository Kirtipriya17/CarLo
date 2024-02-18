import React from 'react'
import Props from '../../Components/Props';
import H1 from '../../assets/Images/maruti/EXTIGA/1.jpg'
import H2 from '../../assets/Images/maruti/EXTIGA/2.jpg'
import H3 from '../../assets/Images/maruti/EXTIGA/3.jpg'

export default function Ertiga() {
    const images = [
        H1,H2,H3
      ];
  return (
    <div>
          
          <Props imagesArray={[H1,H2,H3]} 
        images={images} brand={"Maruti Suzuki "}
        Car={"Maruti Suzuki Ertiga"} Price={"Rs. 8.69 Lakh"}
        About={"The recently updated Ertiga gets a tweaked engine, new gearbox and newer features that put it in line with other Maruti models. It however continues with the well-accepted traits of offering lots of space all around, easy ingress/egress and accommodating seats."}
         Mileage={"20 kmpl"}
          FuelType={"Petrol"}
           EngineDisplacement={"1462 cc"}
            Cylinder={"4"}
             MaxPower={"101.64bhp@6000rpm"}
              MaxTorque={"136.8Nm@4400rpm"} 
              Seat={"7"} 
              TransmissionType={"Automatic"}
               FuelCapacity={"45 Litres"}
                BodyType={"MUV"} 
                GroundClearanceUnladen={"185 mm"}

         Features={['Power Steering',	
         'Power Windows Front',	
         'Anti Lock Braking System',	
         'Air Conditioner',
         'Driver Airbag	',
         'Passenger Airbag',	
         'Automatic Climate Control',	
         'Alloy Wheels'	,
         'Multi-function Steering Wheel']} 
         StandoutFeatures={['7-inch infotainment system','Paddle shifters with automatic transmission',' 40+ connected car features']}
         />
    </div>
  )
}
