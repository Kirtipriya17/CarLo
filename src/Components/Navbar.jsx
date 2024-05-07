import "./Home.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiHome,
  HiOutlineInformationCircle,
  HiBriefcase,
  HiUserCircle,
  HiLogin,
  HiShoppingCart,
  HiCalendar,
} from "react-icons/hi";
import { AiFillAccountBook } from "react-icons/ai";
import Search from "./Search";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent fixed w-full z-50 backdrop-filter  navbar-top ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="ml-2 text-white text-4xl font-bold hover:text-gray-700 transition duration-300 ease-in-out">
            <Link to={"/"}>CarLo </Link>
            </h1>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleNavbar}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          <div
            className={`md:flex flex-col md:flex-row md:items-center ${
              isOpen ? "flex" : "hidden"
            } `}
          >
            <Link to={"/"}>
              <a
                href="#"
                className="text-gray-700 navbar-text hover:text-gray-700 py-2 md:px-4 font-bold transition duration-300 ease-in-out flex items-center"
              >
                <HiHome className="h-5 w-5 mr-1" /> Home
              </a>
            </Link>
            <Link to={"/About"}>
              <a
                href="#"
                className="text-gray-700 navbar-text hover:text-gray-700 py-2 md:px-4 font-bold transition duration-300 ease-in-out flex items-center"
              >
                <HiOutlineInformationCircle className="h-5 w-5 mr-1" /> About
              </a>
            </Link>
            <Link to={"/Brands"}>
              <a
                href="#"
                className="text-gray-700 navbar-text hover:text-gray-700 py-2 md:px-4 font-bold transition duration-300 ease-in-out flex items-center"
              >
                <HiBriefcase className="h-5 w-5 mr-1" /> Brands
              </a>
            </Link>
            <Link to={"/Login"}>
              <a
                href="#"
                className="text-gray-700 navbar-text hover:text-gray-700 py-2 md:px-4 font-bold transition duration-300 ease-in-out flex items-center"
              >
                <HiLogin className="h-5 w-5 mr-1" /> Login
              </a>
            </Link>
            <Link to={"/Register"}>
              <a
                href="#"
                className="text-gray-700 navbar-text hover:text-gray-700 py-2 md:px-4 font-bold transition duration-300 ease-in-out flex items-center"
              >
                <HiUserCircle className="h-5 w-5 mr-1" /> Register
              </a>
            </Link>
            {/* Add Link to Booking Page */}
            <Link to={"/BookingPage"}>
              <a
                href="#"
                className="text-gray-700 navbar-text hover:text-gray-700 py-2 md:px-4 font-bold transition duration-300 ease-in-out flex items-center"
              >
                <HiCalendar className="h-5 w-5 mr-1" /> Booking
              </a>
            </Link>
          </div>

          <div className="hidden   md:flex items-center">
            <div className="me-2  ">
              <Search />
            </div>

            <Link to={"/"}>
              <button className="text-white focus:outline-none ">
                <HiShoppingCart className="h-7  w-8 fill-current" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
