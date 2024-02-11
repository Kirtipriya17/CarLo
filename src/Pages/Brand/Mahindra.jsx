import React from 'react'
import Cars from '../../Components/Cars'
import MThar from '../../assets/3.jpg'
import { Link } from 'react-router-dom'

export default function Mahindra() {
  return (
    <div>
        <Link to={"/MahindraThar"}>
        <Cars image={MThar} price={"10Lakh"} spec={"Diesel / Petrol15.2 kmplManual/Automatic"} car={"Mahindra Thar"}/>
        </Link>
    </div>
  )
}
