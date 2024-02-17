import React from 'react';
import video from '../assets/mix/v2.mp4';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className='relative'>
      <video className='bg-cover max-h-100 max-w-100% p-2' src={video} autoPlay loop muted />
      {/* <div>
        <h1 className='absolute left-10 top-20 font-bold size-19 text-4xl text-gray-700 transition duration-500 ease-in-out transform hover:scale-110'>Driven by Perfection, Guided by Trust</h1>
        <h2 className='absolute left-10 top-28 m-5 font-bold size-25 text-3xl text-white transition duration-500 ease-in-out transform hover:scale-110'>Feel the Thrill, Seal the Deal</h2>
      </div> */}

      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-full text-center">
        <div className="bg-transparent text-white p-8 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-transparent cursor-pointer">
          <h3 className="text-2xl font-bold mb-4">Experience Luxury. Drive Luxury.</h3>
          <p className="text-lg mb-6">Explore our wide range of luxury cars and find the one that suits your style. From sleek sports cars to elegant sedans, we have it all.</p>
          <Link to="/BuyNow" className="bg-transparent border-2 border-blue-500 hover:bg-blue-500 text-blue-500 hover:text-white text-xl font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out">Buy Now</Link>
        </div>
      </div>
    </div>
  );
}
