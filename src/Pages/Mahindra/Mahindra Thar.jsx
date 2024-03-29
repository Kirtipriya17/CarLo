import React from 'react'
import Props from '../../Components/Props'
import H6 from '../../assets/Images/Mahindra/THAR/1.jpg'
import H2 from '../../assets/Images/Mahindra/THAR/2.jpg'
import H3 from '../../assets/Images/Mahindra/THAR/3.jpg'
import H4 from '../../assets/Images/Mahindra/THAR/4.jpg'
import H5 from '../../assets/Images/Mahindra/THAR/5.jpg'
import H1 from '../../assets/Images/Mahindra/THAR/6.jpg'

export default function MahindraThar() {

  const images = [
   H1,H2,H3,H4,H5,H6
  ];
  return (
    <div><div>

{/* <div className="container mx-auto">
  <Slider images={images} />
</div> */}
</div>
       
        <Props imagesArray={[H1,H2,H3,H4,H5,H6]} brand={"Mahindra"}
        images={images}
        Features={['Power Steering','Power Windows Front','Anti Lock Braking System','Air Conditioner','Driver Airbag ','Passenger Airbag','Alloy Wheels','Multi-function Steering Wheel']}  Car={"Mahindra Thar"} Price={"Rs. 11.25 Lakh"}
        About={"The Mahindra Thar has evolved from a simple, old off-roader to a versatile and modern SUV that can take you anywhere in comfort. Available with multiple drivetrain options and many variants, the Thar offers loads of road presence and strong performance both on and off the road. However, its two-door configuration puts a small dent on the practicality front."}
        StandoutFeatures={['Shift-on-the-fly 4x4 transfer case with low range','3 types of roofs to choose from - Hardtop, soft top or convertible','Touchscreen with roll, pitch, steering angle, compass, G monitor displays']} Mileage={"9 kmpl"} FuelType={"Diesel"} EngineDisplacement={"2184cc"} Cylinder={"4"} MaxPower={"130.07bhp@3750rpm"} MaxTorque={"300Nm@1600-2800rpm"} Seat={"4"} TransmissionType={"Automatic"} FuelCapacity={"57 Litres"} BodyType={"SUV"} GroundClearanceUnladen={"226 mm"} />

        {/* Engine={"1497 cc-2184 cc"} Power={"116.93-150.19bhp"} Torque={"300Nm - 320Nm"} Seat={"4"} Drive={"4WD / 2WD"} Mileage={"15.2 kmp"} Feature={"Digital Instrument Cluster Lane Change Indicator"} */}

    </div>
  )
}
