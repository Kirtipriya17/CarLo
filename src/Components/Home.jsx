import React from 'react'
import video from '../assets/mix/v4.mp4'
import Card from './Cards'
import L from '../assets/mix/L.jpg'
import B from '../assets/mix/B.jpg'

export default function Home() {
  return (
    <div className='relative'>
       <video className='bg-cover max-h-50 ' src={video} autoPlay loop muted/>
      <div>
      <h1 className='absolute left-10 top-20 font-bold size-19 text-5xl text-gray-700 '>Ride in Style, Drive with Pride!</h1>
        <h2 className='absolute left-10 top-28 m-5 font-bold size-25 text-4xl text-red-700'> Unlock your journey with our cars!</h2>

       <div >
        <Card title={"hh"} image={L}/>
        <Card  title={"kk"}  image={B}/>
       
       </div>
      </div>
    </div>
    
  )
}
