import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <><br />
    <footer className="bg-transparent w-full z-50 backdrop-filter backdrop-blur-lg ">
      <div className="max-w-full mx-auto px-4 bg-black">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-gray-400 text-4xl font-bold hover:text-gray-700">CarLo</h1>
          </div>
          
        </div>
        {/* Additional section */}
        <div className="mt-4 text-gray-400">
        <div className="mt-4">
            <h2 className="text-xl font-semibold">Privacy Policy</h2>
            <p>Our privacy policy outlines how we handle your personal information.</p> 
              <p>Please read it carefully.</p>
            <p>You can find our full privacy policy <a href="/PrivacyPolicyPage" className="text-blue-500 hover:underline">here</a>.</p>
          </div>
        <div className="flex justify-between items-center py-4">
          <p>CarLo is your go-to destination for all things automotive.<br />
         Stay connected with us!</p>
          </div>
        </div>

        <div className="flex justify-between items-center py-4">


        <div className="md:flex ">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-700 py-2 md:px-4">
              <FaFacebook className="h-6 w-6 transition duration-300 ease-in-out hover:text-blue-500 hover:scale-110" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-700 py-2 md:px-4">
              <FaTwitter className="h-6 w-6 transition duration-300 ease-in-out hover:text-blue-500 hover:scale-110" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-700 py-2 md:px-4">
              <FaInstagram className="h-6 w-6 transition duration-300 ease-in-out hover:text-blue-500 hover:scale-110" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-700 py-2 md:px-4">
              <FaLinkedin className="h-6 w-6 transition duration-300 ease-in-out hover:text-blue-500 hover:scale-110" />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-700 py-2 md:px-4">
              <FaPinterest className="h-6 w-6 transition duration-300 ease-in-out hover:text-blue-500 hover:scale-110" />
            </a>
          </div>
          <p className='text-gray-400'>Contact us at: CarLo@email.com</p>
          </div>
      </div>

      <div className='bg-black'>
      <p className='text-white grid justify-items-center'>CarLo © 2024 All Rights Reserved. </p>
      </div>
    </footer>
    </>
  );
};

export default Footer;
