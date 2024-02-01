import React from 'react'

export default function Cards({image,title}) {
  return (
    <div className='backdrop-blur shadow-gray--500 shadow-lg rounded-xl
    bg-gray-200  p-5 bg-opacity-30'>
        <img src={image} alt="" />
        {title}
        
    </div>
    
  )
}
