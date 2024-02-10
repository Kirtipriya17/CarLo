import React from 'react'

export default function Card({title,image,}) {
  return (
    <div>
      
    <div className='backdrop-blur shadow-gray-900 shadow-2xl rounded-xl w-[254px] h-[180px]  
    bg-gray-200 p-5  bg-opacity-30'>

    <img src={image} alt="" />
   {title}
    </div>
    
   {/* <div className='w-[254px] h-[180px]  bg-[#212121] rounded-xl shadow-lg  shadow-gray-900' >
<img src={p1} alt="" />
   </div> */}

   {/* [15px_15px_30px_rgb(25,25,25),-15px_-15px_30px_rgb(60, 60,60)] */}
    </div>
  )
}