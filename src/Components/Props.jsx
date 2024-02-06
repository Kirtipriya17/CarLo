import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export default function Slider({ pic1, pic2, pic3, Car, Price, Engine, Power, Torque, Seat, Drive, Mileage, Feature}) {
  return (
    <div>

      <div className='flex flex-row'>
        <Carousel className='rounded-xl w-[200px] max-h-[80vh]  ' autoPlay infiniteLoop interval={1000} stopOnHover={false} showThumbs={false}
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
        <h3 className='font-bold'>Key Specifications & Features of {Car}</h3>
        <div >
          <h1  className='font-bold'>
            Key Specifications
          </h1>
          <p className='flex flex-row'> <svg height="20px" width="30px"
            viewBox="0 0 511.999 511.999" >
            <g>
              <g>
                <path d="M494.32,196.801l-4.858-8.131h-85.516v39.564h-8.557v-57.371h-44.32l-28.138-24.95h-46.53v-22.695h14.966V89.827H172.742
			v33.391h14.966v22.695h-48.443l-28.138,24.95H55.791v16.696v66.236h-22.4v-42.616H0v118.625h33.391v-42.617h22.4v66.236v16.696
			h83.474l58.709,52.054h197.414v-58.444h8.557v39.565h85.516l4.858-8.132c1.81-3.027,17.68-31.537,17.68-99.181
			S496.13,199.829,494.32,196.801z M221.101,123.22h21.909v22.695h-21.909V123.22z M468.927,369.902h-31.59v-39.565h-75.34v58.444
			H210.646l-58.709-52.054H89.183V204.255h34.617l28.138-24.95h158.32l28.138,24.95h23.601v57.371h75.34v-39.564h31.59
			c3.873,11.386,9.681,34.956,9.681,73.921C478.609,334.947,472.801,358.516,468.927,369.902z"/> </g></g> </svg>
            Engine  {Engine} </p>

          <p className='flex flex-row'>
            <svg width="30px" height="20px"><path d="M12,10h7L8,22l3-9H5L13,2Z" /></svg> Power &nbsp; {Power}</p>

          <p className='flex flex-row'>  Torque &ensp; {Torque} </p>

          <p className='flex flex-row'><svg width="30px" height="20px" viewBox="0 0 24 24" >
            <path d="M22.5 20V22C22.5 22.5523 22.0523 23 21.5 23H7.59646C6.66266 23 5.85314 22.3538 5.64619 21.4432L1.27764 2.22162C1.13542 1.59586 1.61105 1 2.25277 1H5.70799C6.17204 1 6.57512 1.31925 6.6814 1.77096L10.5 18H20.5C21.6046 18 22.5 18.8954 22.5 20Z" stroke="#71717A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6.96729 3H8.99999C9.55228 3 10 3.44772 10 4V6L8 7.5" stroke="#71717A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M13.5 14.375H9.625H7.5" stroke="#71717A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
            Seating Capacity &emsp;  {Seat} </p>

          <p className='flex flex-row'> Drive Type {Drive} </p>

          <p className='flex flex-row'> <svg width="30px" height="20px" viewBox="0 0 1024 1024" ><path fill="#000000" d="M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z" /><path fill="#000000" d="M192 512a320 320 0 1 1 640 0 32 32 0 1 1-64 0 256 256 0 1 0-512 0 32 32 0 0 1-64 0z" /><path fill="#000000" d="M570.432 627.84A96 96 0 1 1 509.568 608l60.992-187.776A32 32 0 1 1 631.424 440l-60.992 187.776zM502.08 734.464a32 32 0 1 0 19.84-60.928 32 32 0 0 0-19.84 60.928z" /></svg>
            Mileage {Mileage} </p>
        </div>

        <div>
          <h1  className='font-bold'>Top Features</h1> {Feature}
        </div>
      </div>

      {/* <div>
        <h5>Specification of {Car}</h5><br />
        City Mileage {Mileage} <br />
        Fuel Type  {FuelType} <br />
        Engine Displacement (cc) <br />
        No. of Cylinders {Cylinder} <br />
        Seating Capacity {Seat} <br />
        Body Type {BodyType} <br />
        Fuel Tank Capacity (Litres) {FuelCapacity} <br />
        Ground Clearance Unladen (mm) <br />
        Transmission Type <br />
        Max Power (bhp@rpm) <br />
        Max Torque (nm@rpm) <br />

      </div> */}
    </div>
  )
}
