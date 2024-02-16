import React from 'react'
import video from '../assets/mix/v1.mp4'
import Card from './BrandCards'
import L from '../assets/mix/L.jpg'
import B from '../assets/mix/B.jpg'
import { Link } from 'react-router-dom'
import BrandSlider from './BrandSlider'

export default function Home() {
  return (
    <div className='relative'>
       <video className='bg-cover max-h-50 ' src={video} autoPlay loop muted/>
      <div>
      <h1 className='absolute left-10 top-20 font-bold size-19 text-5xl text-gray-800 '>Ride in Style, Drive with Pride!</h1>
        <h2 className='absolute left-10 top-28 m-5 font-bold size-25 text-4xl text-orange-700'> Unlock your journey with our cars!</h2>
      </div>
      <div className='h-[60] flex items-center bg-orange-200 w-full justify-center
        mt-4'>
        <h4 className='text-centre text-3xl font-display '>
          Buy your Dream Car today!
        </h4>
      </div>
<br />
      <div >
        <Link to={"/Brands"} className='p-[250px] font-bold text-2xl ' >All Brands</Link>
        <BrandSlider/>
      </div>
     
      
    </div>
    
  )
}
