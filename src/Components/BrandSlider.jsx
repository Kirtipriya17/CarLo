import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Cards from '../Components/BrandCards';

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


export default function BrandSlider() {
    const settings = {
       
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        
    };

    return (
        <div>
            <div className="container m-auto w-3/4 rounded-2xl slider  ">
                <Slider {...settings} className='p-4  flex flex-col gap-3 '>
                    
             <div>       <Cards title="Maruti Suzuki" image={Maruti} link="/Maruti"/> </div>
             <div>     <Cards title="Toyota" image={Toyota} link="/Toyota"/> </div>
             <div>     <Cards title="BMW" image={BMW} link="/BMW"/> </div>
             <div>    <Cards title="Mahindra" image={Mahindra} link="/Mahindra"/> </div>
             <div>    <Cards title="Audi" image={Audi} link="/Audi"/> </div>
             <div>    <Cards title="Kia" image={Kia} link="/Kia"/> </div>
             <div>    <Cards title="Rolls Royce" image={RollsRoyce} link="/RollsRoyce"/> </div>
             <div>    <Cards title="Merceres-Benz" image={Mercedes} link="/MercedesBenz"/> </div>
             <div>    <Cards title="Lamborghini" image={Lamborghini} link="/Lamborghini"/> </div>
             <div>   <Cards title="Aston Martin" image={AstonMartin} link="/AstonMartin"/> </div>
             <div>   <Cards title="Ferrari" image={Ferrari} link="/Ferrari"/> </div> 
             <div>    <Cards title="Jaguar" image={Jaguar} link="/Jaguar"/> </div>
             <div>  <Cards title="Porsche" image={Porsche} link="/Porsche"/> </div>
             <div>    <Cards title="Hyundai" image={Hyundai} link="/Hyundai"/> </div>
             <div> <Cards title="Volvo" image={Volvo} link="/Volvo"/> </div>
             <div >   <Cards title="Tata" image={Tata} link="/Tata"/> </div>
                </Slider>
            </div>
        </div>
    );
}
