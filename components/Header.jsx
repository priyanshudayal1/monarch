import Image from "next/image";
import React from "react";
import Link from "next/link";
import logo from "@/public/logo.png";
import bg from "@/public/bg.svg";
import footLogo from "@/public/footerLogo.png";
const Header = () => {
  return (
    <div className="my-14 bg-white flex sticky shadow-lg justify-between items-center top-0 z-30">
      <div className="logo mx-8 flex flex-row justify-between items-center ">
        <Image src={logo} height="100%" width="100%" alt="Monarch Logo" className="" />
        <span className="text-2xl">Monarch</span>
      </div>
      <div className="nav-links mx-8 flex justify-evenly md:w-[60%] items-center">
        <Link href="/"  className=" rounded-xl p-2 px-6 hover:bg-gray-900/10 transition-all">Home</Link>
        <Link href="/about" className=" rounded-xl p-2 px-6 hover:bg-gray-900/10 transition-all">About Us</Link>
        <Link href="/services" className=" rounded-xl p-2 px-6 hover:bg-gray-900/10 transition-all">Services</Link>
        <Link href="/products" className=" rounded-xl p-2 px-6 hover:bg-gray-900/10 transition-all">Products</Link>
        <Link href="/team" className=" rounded-xl p-2 px-6 hover:bg-gray-900/10 transition-all">Our Team</Link>
        <Link href="/contact" className=" rounded-xl p-2 px-6 hover:bg-gray-900/10 transition-all">Contact Us</Link>
      </div>
    </div>
  );
};

export default Header;
