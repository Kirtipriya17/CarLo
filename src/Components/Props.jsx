import React, { useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../style.css'

export default function Props({ pic1, pic2, pic3, Car, Price, about, F1, F2, F3, T, Mileage, FuelType, EngineDisplacement, Cylinder, Seat, FuelCapacity, MaxPower, MaxTorque, TransmissionType, BodyType, GroundClearanceUnladen })
// Engine, Power, Torque, Seat, Drive, Mileage, Feature
{

  const [showText, setShowText] = useState(false);


  return (
    <div className='ml-[100px] mr-[50px]' >

      <div className='flex flex-row '>
        <Carousel className='w-[200px] h-[200px] overflow-hidden rounded-xl  max-h-[80vh]  ' autoPlay infiniteLoop interval={1000} stopOnHover={false} showThumbs={false}
          showArrows={false} showStatus={false} >
          <div>
            <img src={pic1} alt='pic1' />

          </div>
          <div>
            <img src={pic2} alt='pic2' />

          </div>
          <div>
            <img src={pic3} alt='pic3' />

          </div>
        </Carousel>
        <div className='m-5'> {Car} <br /> {Price}</div>

      </div>


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

