import React from 'react'
import { Link } from 'react-router-dom'

export default function Cards({title,image,link}) {
  return (
    <Link to={link} className="max-w-sm rounded-lg overflow-hidden shadow-2xl bg-white bg-opacity-10 border border-gray-200 hover:border-gray-300 transition duration-300 ease-in-out transform hover:scale-105 ml-2 p-1 w-[350px] ">
    <div className=" h-[200px] overflow-hidden">
      <img className="object-cover w-full h-full" src={image} alt="Card" />
    </div>
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2 justify-center">{title}</div>
    </div>
  </Link>
  )
}