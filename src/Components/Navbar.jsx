import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent fixed w-full z-50 backdrop-filter backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
           
              
            <h1 className="ml-2 text-gray-400 text-4xl font-bold hover:text-gray-700 transition duration-300 ease-in-out">CarLo</h1>
          </div>
          <div className="md:hidden">
            <button onClick={toggleNavbar} className="text-white focus:outline-none">
              <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                {isOpen ? (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          <div className={`md:flex flex-col md:flex-row md:items-center ${isOpen ? 'flex' : 'hidden'} `}>
            <Link to={'/'}>
              <a href="#" className="text-gray-400 hover:text-gray-700 py-2 md:px-4 font-bold transition duration-300 ease-in-out">Home </a>
            </Link>
            <Link to={'./About'}>
              <a href="#" className="text-gray-400 hover:text-gray-700 py-2 md:px-4 font-bold transition duration-300 ease-in-out">About</a>
            </Link>
            <Link to={'./Brands'}>
              <a href="#" className="text-gray-400 hover:text-gray-700 py-2 md:px-4 font-bold transition duration-300 ease-in-out">Brands</a>
            </Link>
            <Link to={'./Login'}>
              <a href="#" className="text-gray-400 hover:text-gray-700 py-2 md:px-4 font-bold transition duration-300 ease-in-out">Login</a>
            </Link>
            <Link to={'./Register'}>
              <a href="#" className="text-gray-400 hover:text-gray-700 py-2 md:px-4 font-bold transition duration-300 ease-in-out">Register</a>
            </Link>
            <Link to={'./BookingPage'}>
              <a href="#" className="text-gray-400 hover:text-gray-700 py-2 md:px-4 font-bold transition duration-300 ease-in-out">Booking</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
