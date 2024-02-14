import React from 'react'
import { Link } from 'react-router-dom'

export default function CarCards({ link,image,brand,car,price,fuelType,mileage,transmission }) {
    return (
        <div>
            <Link to={link} className="bg-white shadow-md rounded-lg p-4  m-9 flex border border-gray-300 hover:border-gray-900 shadow-black transition duration-300 ease-in-out">
                <div className="mr-4">
                    <img src={image} alt="" className="w-[450px] h-[350px] rounded-xl" />
                </div>
                <div>
                    <div className='ml-10 mt-10'>
                        <span className=' text-violet-600 font-semibold'>{brand}</span>
                        <h1 className='text-3xl font-bold'>{car}</h1>

                        <br />
                        <h6 className='text-2xl font-semibold'>{price}</h6>

                        <p className="text-gray-600 mb-4">
                            {fuelType}  • {mileage} kmpl  • {transmission}
                        </p>
                        <button className="bg-violet-800 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded">
                            Add To Cart
                        </button>
                    </div>
                </div>

            </Link>
        </div>
    )
}
