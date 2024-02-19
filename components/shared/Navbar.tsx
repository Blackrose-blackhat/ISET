"use client";
import React from "react";
import logo from "@/public/assets/images/iset_logo.png";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav className="top-0 flex flex-row justify-between items-center p-2 ">
      <div className="relative w-60 h-20 p-5">
        <Image src={logo} alt="logo" fill />
      </div>
    </nav>
  );
};

export default Navbar;
