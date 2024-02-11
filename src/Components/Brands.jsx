import React from 'react'
import Cards from './Cards'
import H1 from "../assets/1.jpg"
import { Link } from 'react-router-dom'

import BMW from "../assets/Brands/BMW.jpg"
import Maruti from "../assets/Brands/Maruti.jpg"
import Toyota from "../assets/Brands/Toyota.jpg"
import Honda  from "../assets/Brands/Honda.jpg"
import Tata from "../assets/Brands/Tata.jpg"
import Jaguar from "../assets/Brands/Jaguar.jpg"
import Audi from "../assets/Brands/Audi.jpg"
import Porsche from "../assets/Brands/Porsche.jpg"
import Mercedes from "../assets/Brands/Mercedes.jpg"
import Tesla from "../assets/Brands/tesla.jpg"
import LandRover from "../assets/Brands/LandRover.jpg"
import Hyundai from "../assets/Brands/Hyundai.jpg"
import Mahindra from "../assets/Brands/Mahindra.jpg"
import Ford from "../assets/Brands/Ford.jpg"
import  Jeep from "../assets/Brands/Jeep.jpg"

import Kia from "../assets/Brands/Kia.jpg"
import Lamborghini from "../assets/Brands/Lamborghini.jpg"
import RollsRoyce from "../assets/Brands/RollsRoyce.jpg"
import Volvo from "../assets/Brands/Volvo.jpg"
import Ferrari from "../assets/Brands/Ferrari.jpg"




export default function Brands() {
    return (
        <div>
            <div className='flex flex-row'>
                <Link to={"/Maruti"}>
                <Cards image={Maruti} title={"Maruti suzuki"} />
                </Link>
                <Cards image={Hyundai} title={"Hyundai"} />
                <Cards image={Mahindra} title={"Mahindra"} />
                    <Cards image={Toyota} title={"Toyota"} />
            </div>
            <div className='flex flex-row'>
                <Cards image={Honda} title={"Honda"} />
                <Link to={"/bmw"}>
                <Cards image={BMW} title={"BMW"}  />
                </Link>
                <Cards image={Tata} title={"Tata"} />
                <Cards image={Ferrari} title={"Ferrari"} />
            </div>
            <div className='flex flex-row'>
                <Cards image={Jaguar} title={"Jaguar"} />
                <Cards image={Audi} title={"Audi"} />
                <Cards image={Tesla} title={"Tesla"} />
                <Cards image={Mercedes} title={"Mercedes"} />
            </div>
            <div className='flex flex-row'>
                <Cards image={LandRover} title={"LandRover"} />
                <Cards image={Porsche} title={"Porsche"} />

                <Cards image={Ford} title={"Ford"} />
                <Cards image={Jeep} title={"Jeep"} />
                
            </div>

            <div className='flex flex-row'>
            <Cards image={Kia} title={"kia"} />
            <Cards image={RollsRoyce} title={"RollsRoyce"} />
            <Cards image={Lamborghini} title={"Lamborghini"} />
            <Cards image={Volvo} title={"Volvo"} />
            </div>
        </div>
    )
}
