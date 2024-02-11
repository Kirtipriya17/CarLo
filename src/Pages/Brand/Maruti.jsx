import React from 'react'
import Cars from '../../Components/Cars'
import Swift from '../../assets/3.jpg'


export default function Maruti() {
  return (
    <div>

    <div className='flex flex-row'>
      <Cars image={Swift} car={"Maruti Suzuki Swift"} price={"10Lakh"} spec={"Petrol"}/>
    </div>
      <Cars image={Swift} car={"Maruti Suzuki Swift"} price={"10Lakh"} spec={"Petrol"}/>
    
    </div>
  )
}
