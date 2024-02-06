import React from 'react'
import Props from '../../Components/Props'
import H1 from '../../assets/1.jpg'
import H2 from '../../assets/2.jpg'
import H3 from '../../assets/3.jpg'

export default function MahindraThar() {
  return (
    <div>
        <Props pic1={H1} pic2={H2} pic3={H3} Car={"Mahindra Thar"} Price={"Rs 100000"} Engine={"1497 cc-2184 cc"} Power={"116.93-150.19bhp"} Torque={"300Nm - 320Nm"} Seat={"4"} Drive={"4WD / 2WD"} Mileage={"15.2 kmp"} Feature={"Digital Instrument Cluster Lane Change Indicator"}/>
    </div>
  )
}
