import React from 'react'
import Props from '../../Components/Props'
import H1 from '../../assets/1.jpg'
import H2 from '../../assets/2.jpg'
import H3 from '../../assets/3.jpg'

export default function MahindraThar() {
  return (
    <div>
        <Props pic1={H1} pic2={H2} pic3={H3} Car={"BMW"} Price={"Rs 100000"} />
    </div>
  )
}
