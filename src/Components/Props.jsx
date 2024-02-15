import React, { useEffect, useState } from 'react'

import '../style.css'

export default function Props({ imagesArray, brand, Features, Car, Price, About, StandoutFeatures, Mileage, FuelType, EngineDisplacement, Cylinder, Seat, FuelCapacity, MaxPower, MaxTorque, TransmissionType, BodyType, GroundClearanceUnladen })

{

  const [activeIndex, setActiveIndex] = useState(0);
  const [amount, setAmount] = useState(1);
  const handleImageClick = (index) => {
    setActiveIndex(index);
  };




  return (
    <>
      
      
      
      <div className='border border-gray-300 hover:border-gray-900 shadow-black transition duration-300 ease-in-out shadow-xl p-5 m-4'>
      <div className='flex flex-col justify-between lg:flex-row gap-16 lg:items-center'>
        <div className='flex flex-col gap-6 lg:w-2/4'>
            <img src={imagesArray[activeIndex]} alt="" className='w-[400-px] h-[500px] aspect-square object-cover rounded-xl ' />
            <div className='flex justify-center gap-2 p-4'>
              {imagesArray.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt=""
                  className={`w-20 h-20 rounded-md cursor-pointer ${activeIndex === index ? 'border-2 border-blue-500' : ''}`}
                  onClick={() => handleImageClick(index)}
                />
              ))}
            </div>

        </div>
        {/* ABOUT */}
        <div className='flex flex-col gap-4 lg:w-2/4'>
          <div>
            <span className=' text-violet-600 font-semibold'>{brand}</span>
            <h1 className='text-3xl font-bold'>{Car}</h1>
          </div>
          <p className='text-gray-700'>
            {About} </p>
          <h6 className='text-2xl font-semibold'>{Price}</h6>
          <div className='flex flex-row items-center gap-12'>
            <div className='flex flex-row items-center'>
              <button className='bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl' onClick={() => setAmount((prev) => prev - 1)}>-</button>
              <span className='py-4 px-6 rounded-lg'>{amount}</span>
              <button className='bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl' onClick={() => setAmount((prev) => prev + 1)}>+</button>
            </div>
            <button className='bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full'>Add to Cart</button>
          </div>
        </div>
      </div>
      </div>


      <br />

      <div >
        <div className='border hover:border-gray-900 shadow-black transition duration-300 ease-in-out m-4 p-5 shadow-xl'>
          <p className='font-bold'> {Car} </p>
          <h1>{About}</h1>
       </div>







        <div className='border border-gray-300 hover:border-gray-900 shadow-black transition duration-300 ease-in-out shadow-xl p-5 m-4'>
          <h5 className='font-bold '>Specification of {Car}</h5>
          <section class="table__body">
            <table>
              <tbody>
                <tr><td>City Mileage</td> <td>{Mileage}</td></tr>
                <tr><td>Fuel Type</td>  <td>{FuelType} </td></tr>
                <tr><td>Engine Displacement </td> <td>{EngineDisplacement} </td></tr>
                <tr><td> No. of Cylinders</td> <td> {Cylinder}</td></tr>
                <tr><td> Seating Capacity</td> <td> {Seat}</td></tr>
                <tr><td>Body Type </td> <td>{BodyType} </td></tr>
                <tr><td>  Fuel Tank Capacity</td> <td>{FuelCapacity} </td></tr>
                <tr><td> Transmission Type  </td> <td>{TransmissionType} </td></tr>
                <tr><td> Max Power </td> <td>{MaxPower} </td></tr>
                <tr><td>Max Torque  </td> <td> {MaxTorque} </td></tr>
                <tr><td>Ground Clearance Unladen </td> <td> {GroundClearanceUnladen}  </td></tr>
              </tbody>
            </table>
          </section>
        </div>



        <div className='border border-gray-300 hover:border-gray-900 shadow-black transition duration-300 ease-in-out shadow-xl p-5 m-4'>
          <h1 className='font-bold'>Features of {Car}</h1>
          <section class="table__body">
            <table>

              <tbody>
                {Features.map((value) => (
                  <tr>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>

          </section>
          </div>

          <div className='border border-gray-300 hover:border-gray-900 shadow-black transition duration-300 ease-in-out shadow-xl p-5 m-4'>
            <p className='font-bold'>Standout Features of {Car}</p>
            <div className='flex flex-row'>
              <table>

                <tbody>
                  {StandoutFeatures.map((value) => (
                    <tr>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>


    
    </>
  )
}