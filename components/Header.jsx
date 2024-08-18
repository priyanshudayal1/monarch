import Image from "next/image";
import React from "react";
import Link from "next/link";
import logo from "@/public/logo.png";
const Header = () => {
  return (
    <div className="my-14 bg-white flex sticky border-b-black/70 border-4 border-t-0 border-r-0 border-l-0 justify-between items-center">
      <div className="logo mx-8 flex flex-row justify-between items-center ">
        <Image src={logo} height="100%" width="100%" alt="Monarch Logo" />
        <span className="text-2xl">Monarch</span>
      </div>
      <div className="nav-links mx-8 flex justify-evenly md:w-[60%] items-center">
        <Link href="/"  className=" rounded-xl p-2 px-6 hover:bg-gray-900/10 transition-all">Home</Link>
        <Link href="/about" className=" rounded-xl p-2 px-6 hover:bg-gray-900/10 transition-all">About</Link>
        <Link href="/services" className=" rounded-xl p-2 px-6 hover:bg-gray-900/10 transition-all">Services</Link>
        <Link href="/products" className=" rounded-xl p-2 px-6 hover:bg-gray-900/10 transition-all">Products</Link>
        <Link href="/team" className=" rounded-xl p-2 px-6 hover:bg-gray-900/10 transition-all">Our Team</Link>
        <Link href="/contact" className=" rounded-xl p-2 px-6 hover:bg-gray-900/10 transition-all">Contact Us</Link>
      </div>
    </div>
  );
};

export default Header;
