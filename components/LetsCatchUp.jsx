import React from "react";
import catchup from "@/public/catchup.png";
import Image from "next/image";
import roundedArrow from "@/public/roundedArrow.png";

const LetsCatchUp = () => {
  return (
    <div className="flex flex-col m-20 px-16 justify-between">
      <div className="head text-[#2D81FFDB] text-2xl lg:text-4xl font-semibold text-center my-7">
        Let&apos;s catch up over a coffee
      </div>
      <div className="main flex justify-evenly flex-row">
        <div className="contact-card bg-white border relative border-1 border-gray-500 h-100 w-50 flex flex-col w-1/3 justify-evenly shadow-2xl shadow-black/70 py-10 rounded-md items-center p-6 space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="phone"
            maxLength="10"
            placeholder="Phone"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="query"
            placeholder="Type your query here..."
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button className="rounded-full w-[80%] text-[#2D81FF] bg-[#2D81FF6E] px-4 py-3 hover:scale-105 hover:bg-[#1a4b8a] hover:text-white hover:shadow-lg transition-all duration-300 ease-in-out">
            Join Now
          </button>
          <Image
            alt="Arrow"
            src={roundedArrow}
            className="absolute -bottom-24 -right-56 -z-10 rotate-12"
          />
        </div>

        <div className="image">
          <Image alt="Catchup" src={catchup} />
        </div>
      </div>
    </div>
  );
};

export default LetsCatchUp;
