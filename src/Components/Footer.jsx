
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 bg-opacity-75 backdrop-filter backdrop-blur-lg text-white py-6">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div>
          <p className="text-lg font-bold">Follow us:</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-pink-400"><FaFacebook /></a>
            <a href="#" className="text-gray-300 hover:text-pink-400"><FaTwitter /></a>
            <a href="#" className="text-gray-300 hover:text-pink-400"><FaInstagram /></a>
            <a href="#" className="text-gray-300 hover:text-pink-400"><FaYoutube /></a>
          </div>
        </div>
        <div>
          <p className="text-lg font-bold">Car Website</p>
          <p>© 2024 Car Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
