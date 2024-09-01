"use client";
import React, { useState } from "react";
import startup from "@/public/startup.png";
import interprises from "@/public/interprices.png";
import agencies from "@/public/agencies.png";
import Image from "next/image";
import dashedLine from "@/public/dashedLine.png";
import nextArrow from "@/public/nextArrow.svg";
import prevArrow from "@/public/prevArrow.svg";
import { items } from "@/lib/constants";


const Intro = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Create a duplicate of the first few items to avoid empty space
  const displayItems = [...items, ...items.slice(0, 3)];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex flex-col m-20 px-16 justify-evenly gap-10 relative mb-32">
      <div className="head text-[#2D81FFDB] text-3xl md:text-4xl lg:text-5xl font-semibold my-4">
        We Are India&apos;s One Of the Best Web And Mobile App Developers For
      </div>
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / 3)}%)`,
            width: `${displayItems.length * (100 / 3)}%`,
          }}
        >
          {displayItems.map((item, index) => (
            <div
              key={index}
              className="flex justify-center items-center flex-col gap-5 w-1/3"
            >
              <div className="head-logo">
                <Image alt={item.title} src={item.image} />
              </div>
              <div className="column-header text-[#C3BEFF] text-xl md:text-2xl lg:text-3xl font-semibold">
                {item.title}
              </div>
              <div className="column-description text-center text-base md:text-xl lg:text-2xl tracking-wide text-gray-700/70">
                {item.description}
              </div>
            </div>
          ))}
        </div>
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-lg"
          onClick={handlePrev}
        >
          <Image src={prevArrow} alt="Previous" className="w-10 h-10" />
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-lg"
          onClick={handleNext}
        >
          <Image src={nextArrow} alt="Next" className="w-10 h-10" />
        </button>
      </div>
      <div className="flex w-full justify-center items-center">
        <button className="rounded-full w-1/2 md:w-1/3 lg:w-1/5 text-[#2D81FF] bg-[#2D81FF6E] px-4 py-3 hover:scale-105 hover:bg-[#1a4b8a] hover:text-white hover:shadow-lg transition-all duration-300 ease-in-out">
          Get a Free Consultance
        </button>
      </div>
      <Image
        alt="Dashed Lines"
        src={dashedLine}
        className="absolute -bottom-36 -right-20"
      />
    </div>
  );
};

export default Intro;