import React from "react";
import image from "../assets/new4.jpg";

import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <img className="brightness-50 " src={image} />
      <div className="hero1">
        <h1 className="text-top">Make Your Driving </h1>
        <bg className="hero2">More Exciting</bg>
      </div>
      <button className="button-1 bg-transparent  hover:bg--500 text-white hover:text-white text-2xl font-bold py-9 px-20  rounded-sm transition duration-300 ease-in-out"><Link to={"./Brandslider"}></Link>Buy Now</button>
    </div>

  );
}
