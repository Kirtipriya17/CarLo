import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiHome,
  HiOutlineInformationCircle,
  HiBriefcase,
  HiUserCircle,
  HiLogin,
  HiShoppingCart,
} from "react-icons/hi";
import { AiFillAccountBook } from "react-icons/ai";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent fixed w-full z-50 backdrop-filter backdrop-blur-lg ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="ml-2 text-gray-400 text-4xl font-bold hover:text-gray-700 transition duration-300 ease-in-out">
              CarLo
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
                className="text-gray-400 hover:text-gray-700 py-2 md:px-4 font-bold transition duration-300 ease-in-out flex items-center"
              >
                <HiHome className="h-5 w-5 mr-1" /> Home
              </a>
            </Link>
            <Link to={"./About"}>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-700 py-2 md:px-4 font-bold transition duration-300 ease-in-out flex items-center"
              >
                <HiOutlineInformationCircle className="h-5 w-5 mr-1" /> About
              </a>
            </Link>
            <Link to={"./Brands"}>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-700 py-2 md:px-4 font-bold transition duration-300 ease-in-out flex items-center"
              >
                <HiBriefcase className="h-5 w-5 mr-1" /> Brands
              </a>
            </Link>
            <Link to={"./Login"}>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-700 py-2 md:px-4 font-bold transition duration-300 ease-in-out flex items-center"
              >
                <HiLogin className="h-5 w-5 mr-1" /> Login
              </a>
            </Link>
            <Link to={"./Register"}>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-700 py-2 md:px-4 font-bold transition duration-300 ease-in-out flex items-center"
              >
                <HiUserCircle className="h-5 w-5 mr-1" /> Register
              </a>
            </Link>
          </div>

          <div className="hidden md:flex items-center">
            <form class="max-w-md mx-auto">
              <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-100 sr-only dark:text-white"
              >
                Search
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  class="block w-full h-8  ps-8 text-sm  border  rounded-2xl       "
                  placeholder="Search "
                  required
                />
              </div>
            </form>

            <Link to={"/Cart"}>
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
