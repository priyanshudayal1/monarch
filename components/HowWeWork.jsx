import Image from "next/image";
import React from "react";
import laptopBg from "@/public/laptopBg.png";

const HowWeWork = () => {
  return (
    <div className="flex flex-col m-20 px-16 justify-evenly gap-10">
      <div className="head text-[#2D81FFDB] text-3xl md:text-4xl lg:text-6xl font-semibold">
        Look How We Work
      </div>
      <div className="description text-xl md:text-2xl lg:text-3xl tracking-wide text-gray-700/70">
        We calculate and evolve with interactive ideas focused on web and mobile
        apps development. We are keen at offering amazing IT Solutions and long
        term support. We develop all kinds of products users love.
      </div>
      <div className="imgs-corrousel flex justify-center items-center">
        <Image alt="Laptop" src={laptopBg} />
      </div>
    </div>
  );
};

export default HowWeWork;