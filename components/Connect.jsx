import React from "react";
import coffee from "@/public/coffee.png";
import Image from "next/image";
import connectChain from "@/public/connectChain.png";

const Connect = () => {
  return (
    <div className="flex flex-col md:flex-row shadow-2xl shadow-black my-10 mx-12 h-full border border-1 border-gray-200">
      <div className="first bg-white flex flex-col w-full pl-8 md:pl-28 py-10 md:py-20 gap-4 justify-evenly">
        <Image src={coffee} alt="coffee" />
        <p className="text-black font-semibold text-3xl md:text-5xl">We&apos;re Here</p>
        <p className="text-black font-semibold text-xl md:text-3xl">
          Our door is always open for a good cup of coffee.
        </p>
      </div>
      <div className="second bg-[#2D81FFDB] flex flex-col w-full pl-8 md:pl-28 py-10 md:py-20 gap-4 justify-evenly">
        <p className="text-white font-semibold text-3xl md:text-5xl flex flex-row">
          <span>Let&apos;s Connect</span>
          <Image src={connectChain} alt="connectChain" />
        </p>
        <p className="text-white font-semibold text-xl md:text-3xl">
          Share your contact with us.
        </p>
        <div className="form flex flex-col md:flex-row w-full md:w-2/4">
          <input
            type="text"
            placeholder="info@monarch.com"
            className="w-full p-2 border-b-2 border-white placeholder-gray-300 bg-transparent focus:outline-none focus:border-b-2 focus:border-white"
          />
          <button className="bg-white rounded-full px-5 py-2 mt-4 md:mt-0 md:ml-4">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Connect;