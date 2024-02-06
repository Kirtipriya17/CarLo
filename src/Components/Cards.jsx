import React from 'react'

export default function Card({title,image}) {
  return (
    <div className='backdrop-blur shadow-gray-900 shadow-lg rounded-xl
    bg-gray-200 p-5  bg-opacity-30'>

    <img src={image} alt="" />
   {title}
    </div>
  )
}