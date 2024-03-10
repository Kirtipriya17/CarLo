import React from 'react';
import video from '../assets/mix/v1.mp4';
import Card from './BrandCards';
import { Link } from 'react-router-dom';
import BrandSlider from './BrandSlider';
import OfferPage from './OfferPage';
import ReviewPage from './ReviewPage';
import OfferPagee from './OfferPagee';
import './Home.css';


export default function Home() {
  return (
    <><div className='relative'>
      <video className='bg-cover max-h-100 max-w-100% brightness-50' src={video} autoPlay loop muted />
      <div className='hero-text'>
      <h1 className='text-top' >SPEED YOUR WINGS</h1>
      <p className='text-bottom'>Find your car which give you wings</p>
    
      <Link to="/Brands" className="bg-transparent  hero-btn  hover:bg-blue-500 text-blue-500 hover:text-white text-xl font-bold py-5 px-20  rounded-sm transition duration-300 ease-in-out">Explore  </Link>

    </div>



      {/* <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-full text-center">
        <div className="bg-transparent text-white p-8 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-transparent cursor-pointer">
          <Link to="/Brands" className="bg-transparent border-2 border-blue-500 hover:bg-blue-500 text-blue-500 hover:text-white text-xl font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out">Explore</Link>
        </div>
      </div> */}











    </div><br /><div>
        <Link to={"/Brands"} className='p-[250px] font-bold text-2xl '>All Brands</Link>
        < BrandSlider />
      </div><div>
        <OfferPage />
      </div>
      
     
        </>
      
    
    
  )
}
