import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdDriveEta } from "react-icons/md"; // Import car icon

export default function Booking() {
    const [carModel, setCarModel] = useState(""); // State to store car model
    const [pickupDate, setPickupDate] = useState(""); // State to store pickup date
    const [returnDate, setReturnDate] = useState(""); // State to store return date
    const [name, setName] = useState(""); // State to store user's name
    const [email, setEmail] = useState(""); // State to store user's email
    const [password, setPassword] = useState(""); // State to store user's password

    function handleBooking(e) {
        e.preventDefault();
        // You can implement your booking logic here
        console.log("Booking details:", { carModel, pickupDate, returnDate, name, email, password });
    }

    return (
        <div>
            <form onSubmit={handleBooking} action=''>
                <div className='text-white h-[100vh] flex justify-center items-center bg-cover' style={{ "background": "url('../src/assets/11.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                    <div className='bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-blur-sm bg-opacity-30 relative'>
                        <h1 className='text-4xl text-white font-bold size-25 flex justify-left justify-evenly'>Car Booking</h1>
                        <div className='relative my-4 m-4 p-5'>
                            <MdDriveEta /> {/* Display car icon */}
                            <input type='text' className='block w-72 py-2.3 px-0 text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus-border-blue-600 peer' placeholder='Car Model'
                                value={carModel}
                                onChange={(e) => setCarModel(e.target.value)} />
                        </div>
                        <div className='relative my-4 m-5 p-5'>
                            <input type='date' className='block w-72 py-2.3 px-0 text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus-border-blue-600 peer' placeholder='Pickup Date'
                                value={pickupDate}
                                onChange={(e) => setPickupDate(e.target.value)} />
                        </div>
                        <div className='relative my-4 m-4 p-5'>
                            <input type='date' className='block w-72 py-2.3 px-0 text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus-border-blue-600 peer' placeholder='Return Date'
                                value={returnDate}
                                onChange={(e) => setReturnDate(e.target.value)} />
                        </div>
                        <div className='relative my-4 m-4 p-5'>
                            <input type='text' className='block w-72 py-2.3 px-0 text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus-border-blue-600 peer' placeholder='Your Name'
                                value={name}
                                onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className='relative my-4 m-5 p-5'>
                            <input type='email' className='block w-72 py-2.3 px-0 text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus-border-blue-600 peer' placeholder='Your Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='relative my-4 m-4 p-5'>
                            <input type='password' className='block w-72 py-2.3 px-0 text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus-border-blue-600 peer' placeholder='Your Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div>
                            <button className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300" type='submit'>Book Now</button>
                        </div>
                    
                    </div>
                </div>
            </form>
        </div>
    )
}
