import React from 'react';
import video from '../assets/mix/v1.mp4';
import Card from './BrandCards';
import { Link } from 'react-router-dom';
import BrandSlider from './BrandSlider';
import OfferPage from './OfferPage';
import ReviewPage from './ReviewPage';

export default function Home() {
  return (
    <><div className='relative'>
      <video className='bg-cover max-h-100 max-w-100% p-2' src={video} autoPlay loop muted />
      <div>
      {/* <h1 className='absolute left-10 top-20 font-bold size-19 text-4xl text-gray-700 transition duration-500 ease-in-out transform hover:scale-110'>Drive Your Dreams!!</h1>
      <h2 className='absolute left-10 top-28 m-5 font-bold size-25 text-3xl text-orange-600 transition duration-500 ease-in-out transform hover:scale-110'>Buy your Dream Car Today !!!!</h2> */}
    </div>

      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-full text-center">
        <div className="bg-transparent text-white p-8 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-transparent cursor-pointer">
          <Link to="/Brands" className="bg-transparent border-2 border-blue-500 hover:bg-blue-500 text-blue-500 hover:text-white text-xl font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out">Explore</Link>
        </div>
      </div>
    </div><br /><div>
        <Link to={"/Brands"} className='p-[250px] font-bold text-2xl '>All Brands</Link>
        <BrandSlider />
      </div><div>
        <OfferPage />
      </div><div>
        <ReviewPage />
      </div></>
      
    
    
  )
}
