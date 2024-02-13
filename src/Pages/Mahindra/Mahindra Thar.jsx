import React from 'react'
import Props from '../../Components/Props'
import H1 from '../../assets/1.jpg'
import H2 from '../../assets/2.jpg'
import H3 from '../../assets/5.jpg'

export default function MahindraThar() {

  const images = [
    H3,
    H1,
    H2,
  ];
  return (
    <div>
      {/* <AddToCartButton/>
      <ShoppingCart/> */}
      <div>

{/* <div className="container mx-auto">
  <Slider images={images} />
</div> */}
</div>
       
        <Props images={images} pic1={H1} pic2={H2} pic3={H3} Car={"Mahindra Thar"} Price={"Rs 100000"} about={"The Mahindra Thar has evolved from a simple, old off-roader to a versatile and modern SUV that can take you anywhere in comfort. Available with multiple drivetrain options and many variants, the Thar offers loads of road presence and strong performance both on and off the road. However, its two-door configuration puts a small dent on the practicality front"} F1={"Shift-on-the-fly 4x4 transfer case with low range"} F2={"3 types of roofs to choose from - Hardtop, soft top or convertible"} F3={"Touchscreen with roll, pitch, steering angle, compass, G monitor displays"}Mileage={"9 kmpl"} FuelType={"Diesel"} EngineDisplacement={"2184cc"} Cylinder={"4"} MaxPower={"130.07bhp@3750rpm"} MaxTorque={"300Nm@1600-2800rpm"} Seat={"4"} TransmissionType={"Automatic"} FuelCapacity={"57 Litres"} BodyType={"SUV"} GroundClearanceUnladen={"226 mm"} />

        {/* Engine={"1497 cc-2184 cc"} Power={"116.93-150.19bhp"} Torque={"300Nm - 320Nm"} Seat={"4"} Drive={"4WD / 2WD"} Mileage={"15.2 kmp"} Feature={"Digital Instrument Cluster Lane Change Indicator"} */}

    </div>
  )
}
