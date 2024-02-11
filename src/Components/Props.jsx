import React, { useEffect, useState } from 'react'

import '../style.css'

export default function Props({ images, Car, Price, about, F1, F2, F3, T, Mileage, FuelType, EngineDisplacement, Cylinder, Seat, FuelCapacity, MaxPower, MaxTorque, TransmissionType, BodyType, GroundClearanceUnladen })
// Engine, Power, Torque, Seat, Drive, Mileage, Feature
{

  const [showText, setShowText] = useState(false);

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
  <div className='grid grid-cols-2'>

        <div className="container mx-auto">
          <div className="relative">
            <div className="overflow-hidden w-2/3 mx-auto" style={{ maxWidth: '400px', height: '300px' }}>
              <img
                src={images[currentImageIndex]}
                alt="Slider"
                className='w-full h-full object-cover transition-all duration-500 transform rounded-xl border-black border-4'
              />
            </div>
          </div>
        </div>
        <div>
      <p> {Car} <br /> {Price}</p>
    </div>
 </div>
<br />

      <div className='ml-[100px] mr-[50px]' >

        

        <div>
          <p className='font-bold'> {Car} </p>
          <h1>{about}</h1>
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
            </table>
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

