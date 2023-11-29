import React from "react";
import logo from "../assets/logos/ndclogo1.png";

function Navbar() {
  return (
    <div className=" flex items-center justify-between ">
      {/* Nav logo extreeme left begin */}
      <img src={logo} alt="logo" className="w-40 md:cursor-pointer" />
      {/* Nav logo extreeme left ends */}

      {/* Nav links in the middle begins */}
      <div className="flex-grow text-center">
        <a href="/" className=" px-4 py-2 inline-block">
          Home
        </a>
        <a href="/" className=" px-4 py-2 inline-block">
          About Us
        </a>
        <a href="/" className=" px-4 py-2 inline-block">
          Events
        </a>
        <a href="/" className=" px-4 py-2 inline-block">
          Blog
        </a>
        <a href="/" className=" px-4 py-2 inline-block">
          Faqs
        </a>
        <a href="/" className=" px-4 py-2 inline-block">
          Careers
        </a>
        <a href="/" className=" px-4 py-2 inline-block">
          Contact Us
        </a>
        {/* Add more links as needed */}
      </div>
      {/* Nav links in the middle ends */}

      {/* Button on the extreme right begins */}

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Sign In
      </button>
      {/* Button on the extreme right ends */}
    </div>
  );
}

export default Navbar;
