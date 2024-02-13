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
                   
                    <Cards title="Tata" image={Tata} link="/Tata"/>
                    <Cards title="Maruti Suzuki" image={Maruti} link="/Maruti"/>
                    <Cards title="Toyota" image={Toyota} link="/Toyota"/>
                    <Cards title="BMW" image={BMW} link="/BMW"/>
                    <Cards title="Mahindra" image={Mahindra} link="/Mahindra"/>
                    <Cards title="Audi" image={Audi} link="/Audi"/>
                    <Cards title="Kia" image={Kia} link="/Kia"/>
                    <Cards title="Jaguar" image={Jaguar} link="/Jaguar"/>
                    <Cards title="Hyundai" image={Hyundai} link="/Hyundai"/>
                    <Cards title="Rolls Royce" image={RollsRoyce} link="/RollsRoyce"/>
                    <Cards title="Merceres-Benz" image={Mercedes} link="/MercedesBenz"/>
                    <Cards title="Lamborghini" image={Lamborghini} link="/Lamborghini"/>
                    <Cards title="Aston Martin" image={AstonMartin} link="/AstonMartin"/>
                    <Cards title="Ferrari" image={Ferrari} link="/Ferrari"/>
                    <Cards title="Porsche" image={Porsche} link="/Porsche"/>
                    <Cards title="Volvo" image={Volvo} link="/Volvo"/>

                </div>
            </div>

        </div>
    )
}
