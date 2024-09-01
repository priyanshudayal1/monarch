import Image from "next/image";
import React from "react";
import Link from "next/link";
import logo from "@/public/logo.png";

const Header = () => {
  return (
    <div
      className="my-6 flex  shadow-lg justify-between items-center top-0 z-30 bg-[#2D81FFDB]"
      style={{
        background: "",
      }}
    >
      <div className="logo mx-8 flex flex-row justify-between items-center">
        <Image src={logo} height="100%" width="100%" alt="Monarch Logo" className="" />
        <span className="text-xl md:text-2xl lg:text-3xl text-white">Monarch</span>
      </div>
      <div className="nav-links mx-8 flex justify-evenly md:w-[60%] items-center">
        <Link href="/" className="text-sm md:text-base lg:text-lg rounded-xl p-2 px-6 transition-all duration-300 ease-in-out transform hover:bg-white/20 hover:scale-105 hover:text-white">Home</Link>
        <Link href="/about" className="text-sm md:text-base lg:text-lg rounded-xl p-2 px-6 transition-all duration-300 ease-in-out transform hover:bg-white/20 hover:scale-105 hover:text-white">About Us</Link>
        <Link href="/services" className="text-sm md:text-base lg:text-lg rounded-xl p-2 px-6 transition-all duration-300 ease-in-out transform hover:bg-white/20 hover:scale-105 hover:text-white">Services</Link>
        <Link href="/products" className="text-sm md:text-base lg:text-lg rounded-xl p-2 px-6 transition-all duration-300 ease-in-out transform hover:bg-white/20 hover:scale-105 hover:text-white">Products</Link>
        <Link href="/team" className="text-sm md:text-base lg:text-lg rounded-xl p-2 px-6 transition-all duration-300 ease-in-out transform hover:bg-white/20 hover:scale-105 hover:text-white">Our Team</Link>
        <Link href="/contact" className="text-sm md:text-base lg:text-lg rounded-xl p-2 px-6 transition-all duration-300 ease-in-out transform hover:bg-white/20 hover:scale-105 hover:text-white">Contact Us</Link>
      </div>
    </div>
  );
};

export default Header;