
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import vedio from '../assets/mix/V1.mp4'
import Cards from './Cards';




export default function Slider() {
  return (
    <><div>
      <h1 className='text-center text-blue-900 m-1 text-bold font-bold text-2xl '>Find The Cars Of Your Choice</h1>

      <Carousel autoPlay infiniteLoop interval={3000} stopOnHover={false} showThumbs={false}
        showArrows={false} showStatus={false}>
        <div className='m-2 p-2'>
          <video src={vedio} autoPlay loop muted />



        </div>
        <div className='m-2 p-2'>
          <img className='rounded-xl max-h-[100vh] ' src='../../src/assets/1.jpg' />

        </div>
        <div className='m-2 p-2'>
          <img className='rounded-xl max-h-[100vh] ' src='../../src/assets/5.jpg' />
        </div>
        <div className='m-2 p-2'>
          <img className='rounded-xl max-h-[100vh] ' src='../../src/assets/6.jpg' />
        </div>



      </Carousel>

    </div><div>
        <h3>All Brands </h3>
        <div>
          <Cards title={"hh"}  />
          <Cards title={"ggg"}/>
        </div>

      </div></>





)
}
  


