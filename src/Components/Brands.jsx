import React from 'react'
import Cards from './Cards'

import BMW from "../assets/Brands/BMW.jpg"
import Maruti from "../assets/Brands/Maruti.jpg"
import Toyota from "../assets/Brands/Toyota.jpg"
import Tata from "../assets/Brands/Tata.jpg"
import Jaguar from "../assets/Brands/Jaguar.jpg"
import Audi from "../assets/Brands/Audi.jpg"
import Porsche from "../assets/Brands/Porsche.png"
import Mercedes from "../assets/Brands/Mercedes.jpg"
import Hyundai from "../assets/Brands/Hyundai.jpg"
import Mahindra from "../assets/Brands/Mahindra.jpg"
import AstonMartin from "../assets/Brands/AstonMartin.png"
import Kia from "../assets/Brands/Kia.jpg"
import Lamborghini from "../assets/Brands/Lamborghini.png"
import RollsRoyce from "../assets/Brands/RollsRoyce.jpg"
import Volvo from "../assets/Brands/Volvo.png"
import Ferrari from "../assets/Brands/Ferrari.png"




export default function Brands() {
    return (
        <div>
            <div className="container mx-auto">
                <div className="grid grid-cols-4 gap-3">
                   
                    <Cards title="Tata" image={Tata} link="/Maruti"/>
                    <Cards title="Maruti Suzuki" image={Maruti} link="/Maruti"/>
                    <Cards title="Toyota" image={Toyota} link="/Maruti"/>
                    <Cards title="BMW" image={BMW} link="/Maruti"/>
                    <Cards title="Mahindra" image={Mahindra} link="/MahindraThar"/>
                    <Cards title="Audi" image={Audi} link="/"/>
                    <Cards title="Kia" image={Kia} link="/"/>
                    <Cards title="Jaguar" image={Jaguar} link="/"/>
                    <Cards title="Hyundai" image={Hyundai} link="/"/>
                    <Cards title="Rolls Royce" image={RollsRoyce} link="/"/>
                    <Cards title="Merceres-Benz" image={Mercedes} link="/"/>
                    <Cards title="Lamborghini" image={Lamborghini} link="/"/>
                    <Cards title="Aston Martin" image={AstonMartin} link="/"/>
                    <Cards title="Ferrari" image={Ferrari} link="/"/>
                    <Cards title="Porsche" image={Porsche} link="/"/>
                    <Cards title="Volvo" image={Volvo} link="/"/>

                </div>
            </div>

        </div>
    )
}
