import Image from "next/image";
import React from "react";
import movementLine from "@/public/movementLine.png";
import paperPlane from "@/public/paperPlane.png";
import groupOurValue from "@/public/groupOurValue.png";

const OurValue = () => {
  return (
    <div className="flex flex-col lg:flex-row m-10 lg:m-20 px-8 lg:px-16 justify-between">
      <div className="main flex justify-evenly flex-col w-full lg:w-1/2">
        <div className="head text-[#2D81FFDB] text-3xl md:text-4xl lg:text-6xl font-semibold">
          Our Value
        </div>
        <div className="description text-lg md:text-xl lg:text-3xl tracking-wide text-gray-700/70 mt-4 lg:mt-0">
          We don’t use sales gimmicks even at the cost of losing important
          projects. We help our clients increase their brand value to grow their
          business. Yes! We are a start-up with a small team size but good
          brains for project execution. 5th August 2017, we laid the foundation
          of our firm with our 50+ corporate team experience.
        </div>
        <button className="rounded-full w-1/2 md:w-1/3 lg:w-1/4 text-[#2D81FF] bg-[#545AE840] px-4 py-2 hover:scale-105 hover:bg-[#3b3f6b] hover:text-white hover:shadow-lg transition-all duration-300 ease-in-out mt-4 lg:mt-0">
          Read More
        </button>
      </div>
      <div className="img mt-10 lg:mt-0">
        <div className="bg-img relative -z-10">
          <Image src={movementLine} alt="Movement Line" className="absolute" />
          <Image
            src={paperPlane}
            alt="Paper Plane"
            className="absolute -left-12 -top-11"
          />
        </div>
        <Image alt="Group of people" src={groupOurValue} />
      </div>
    </div>
  );
};

export default OurValue;