import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-transparent w-full z-50 backdrop-filter backdrop-blur-lg">
      <div className="max-w-full mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-gray-400 text-4xl font-bold hover:text-gray-700">CarLo</h1>
          </div>
          <div className="md:flex">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-700 py-2 md:px-4"><FaFacebook className="h-6 w-6" /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-700 py-2 md:px-4"><FaTwitter className="h-6 w-6" /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-700 py-2 md:px-4"><FaInstagram className="h-6 w-6" /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-700 py-2 md:px-4"><FaLinkedin className="h-6 w-6" /></a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-700 py-2 md:px-4"><FaPinterest className="h-6 w-6" /></a>
          </div>
        </div>
        {/* Additional section */}
        <div className="mt-4 text-gray-400">
          <p>CarLo is your go-to destination for all things automotive.</p>
          <p>Stay connected with us!</p>
          <p>Contact us at: CarLo@email.com</p>
          <div className="mt-4">
            <h2 className="text-xl font-semibold">Privacy Policy</h2>
            <p>Our privacy policy outlines how we handle your personal information. Please read it carefully.</p>
            <p>You can find our full privacy policy <a href="/privacy-policy" className="text-blue-500 hover:underline">here</a>.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
