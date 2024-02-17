import React from 'react';
import { Link } from 'react-router-dom';


export default function Cards({ title, image, link }) {
  return (
    <Link to={link} className="max-w-md rounded-lg overflow-hidden shadow-md bg-white bg-opacity-10 border border-gray-200 transition duration-300 ease-in-out transform hover:scale-105 ml-2 p-2 hover:bg-gray-300 ">
      <div className="h-48 overflow-hidden">
        <img className="object-cover w-full h-full" src={image} alt="Card" />
      </div>
      <div className="px-4 py-2">
        <div className="font-bold text-lg mb-2 text-center">{title}</div>
      </div>
    </Link>
  );
}
