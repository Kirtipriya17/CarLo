import React from 'react'
import video from '../assets/mix/v2.mp4'

export default function About() {
  return (

    <div className='relative'>
      <video className='bg-cover max-h-100 max-w-100% p-2' src={video} autoPlay loop muted />
      <div>
        <h1 className='absolute left-10 top-20 font-bold size-19 text-4xl text-gray-700 '>Driven by Perfection, Guided by Trust</h1>
        <h2 className='absolute left-10 top-28 m-5 font-bold size-25 text-3xl text-white'>Feel the Thrill, Seal the Deal</h2>
        {/* <p className='absolute left-10 top-1/3 font-semibold size-25 text-xl'>

          "Revitalize your drive with our premium selection of cars, meticulously curated for performance and style. Experience the epitome of automotive excellence as you explore our showroom. With flexible financing options and a dedicated team committed to your satisfaction, driving your dream car home has never been more attainable. Visit us today!"
        </p> */}
      </div>




    </div>
  )
}
