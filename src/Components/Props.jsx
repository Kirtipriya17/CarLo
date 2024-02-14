import React, { useEffect, useState } from 'react'

import '../style.css'

export default function Props({imagesArray,brand, images, data, Car, Price, About, F1, F2, F3, Mileage, FuelType, EngineDisplacement, Cylinder, Seat, FuelCapacity, MaxPower, MaxTorque, TransmissionType, BodyType, GroundClearanceUnladen })
// Engine, Power, Torque, Seat, Drive, Mileage, Feature
{

  const [showText, setShowText] = useState(false);
  // const imagesArray = [h1, h2, h3,h5 , h4];
  const [activeIndex, setActiveIndex] = useState(0);
  const [amount, setAmount] = useState(1);
  const handleImageClick = (index) => {
      setActiveIndex(index);
  };


  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 1000); // Change slide every 3 seconds

    return () => clearInterval(intervalId);
  }, [currentImageIndex]); // Restart interval when currentImageIndex changes

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };



  return (
    <>

<div className='flex flex-col justify-between lg:flex-row gap-16 lg:items-center'>
            <div className='flex flex-col gap-6 lg:w-2/4'>
                <img src={imagesArray[activeIndex]} alt="" className='w-full h-full aspect-square object-cover rounded-xl' />
                <div className='flex flex-row justify-between h-24'>
                    {imagesArray.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt=""
                            className={`w-24 h-24 rounded-md cursor-pointer ${activeIndex === index ? 'border-2 border-blue-500' : ''}`}
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

 
<br />

      <div className='ml-[100px] mr-[50px]' >

        

        <div>
          <p className='font-bold'> {Car} </p>
          <h1>{About}</h1>
        </div>

        {/* <button onClick={() => setShowText(!showText)}>
          <h1  className='font-bold '>
          Key Specifications
          </h1>
      </button>
      {showText && <div>
      <p> Hello </p> </div>} */}


        <div><br />
          <h5 className='font-bold'>Specification of {Car}</h5>
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

        <div>
          <h1 className='font-bold'>Features of {Car}</h1>
          <section class="table__body">
          <table>
      
      <tbody>
        {data.map((value) => (
          <tr>
            <td>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
            {/* <table>
              <tbody>
                <tr><td> Power Steering</td> <td> </td></tr>
                <tr><td>Power Windows Front  </td> <td> </td></tr>
                <tr><td>Anti Lock Braking System </td> <td> </td></tr>
                <tr><td>Air Conditioner  </td> <td> </td></tr>
                <tr><td>Driver Airbag  </td> <td> </td></tr>
                <tr><td> Passenger Airbag</td> <td> </td></tr>
                <tr><td> Alloy Wheels</td> <td> </td></tr>
                <tr><td> Multi-function Steering Wheel</td> <td> </td></tr>
                <tr><td> </td> <td> </td></tr>
              </tbody>
            </table> */}
          </section>
          <div><br />
            <p className='font-bold'>Standout Features of {Car}</p>
            <div className='flex flex-row'>
              {F1} <br />
              {F2} <br />
              {F3} <br />
            </div>
          </div>
        </div>


      </div>
    </>
  )
}

{/* <h5>Specification of {Car}</h5>
City Mileage {Mileage} <br />
Fuel Type  {FuelType} <br />
Engine Displacement {EngineDisplacement} <br />
No. of Cylinders {Cylinder} <br />
Seating Capacity {Seat} <br />
Body Type {BodyType} <br />
Fuel Tank Capacity  {FuelCapacity} <br />
Transmission Type {TransmissionType} <br />
Max Power {MaxPower} <br />
Max Torque {MaxTorque} <br />
Ground Clearance Unladen {GroundClearanceUnladen} <br /> 
<h1>Features of {Car}</h1> <br />
          Power Steering 
          Power Windows Front 
          Anti Lock Braking System 
          Air Conditioner 
          Driver Airbag 
          Passenger Airbag 
          Alloy Wheels 
Multi-function Steering Wheel
         </div>*/}

