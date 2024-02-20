"use client";
import React from "react";
import logo from "@/public/assets/images/iset_logo.png";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav className="top-0 flex flex-row justify-between items-center p-2 px-10 sticky z-50 ">
      <div className="relative w-60 h-20  p-5">
        <Image src={logo} alt="logo" fill />
      </div>

      <div className="lg:flex flex-row gap-5 uppercase lg:text-lg tracking-wider hidden ">
        <a href="#" className="text-white hover:text-gray-300">
          Home
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          About
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          Events
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          Team
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
