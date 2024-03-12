import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="abt-section">
      <div className="hero1">
        <h1 className="text-top">Make Your Driving </h1>
        <bg className="hero2">More Exciting</bg>
        <div className="wel">
          <p>
            At CarLo, we're passionate about simplifying the car buying
            experience. We understand that purchasing a vehicle can often be
            stressful and time-consuming, which is why we've created a platform
            that puts convenience and transparency at the forefront.
          </p>
        </div>
      </div>
      <button className="button-1 abt-btn bg-transparent  hover:bg--500 text-white hover:text-white text-4xl font-bold py-9 px-20  rounded-sm transition duration-300 ease-in-out">
       <Link to='/BookingPage'></Link>Buy now!
      </button>
      
    </div>
  );
}
