import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export default function Slider({pic1, pic2, pic3,Car,Price}) {
  return (
<div className='flex flex-row'>

    <Carousel className='rounded-xl w-[200px] max-h-[80vh] '  autoPlay infiniteLoop interval={1000} stopOnHover={false} showThumbs={false}
    showArrows={false} showStatus={false} >
    <div>
        <img  src={pic1} alt='pic1' />
     
    </div>
    <div>
    <img  src={pic2} alt='pic2'/>
        
    </div>
    <div>
    <img src={pic3} alt='pic3'/>
        
    </div>
</Carousel>
<div className='m-5'> {Car} <br /> {Price}</div>
    
</div>
  )
}
