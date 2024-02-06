import React from 'react'
import video from '../assets/mix/v2.mp4'

export default function About() {
  return (
    
    <div className='relative'>
        <video  className='bg-cover max-h-100 max-w-100% p-2'src={video} autoPlay loop muted/>
        {/* <p className='absolute left-1/2 top-1/2'>Hello</p> */}
        
    </div>
  )
}
