import React from "react";
import startup from "@/public/startup.png";
import interprises from "@/public/interprices.png";
import agencies from "@/public/agencies.png";
import Image from "next/image";
import dashedLine from "@/public/dashedLine.png";
const Intro = () => {
  return (
    <div className="flex flex-col m-20 px-16 justify-evenly gap-10 relative mb-32">
      <div className="head text-[#2D81FFDB]  text-4xl lg:text-5xl font-semibold my-4">
        We Are India&apos;s One Of the Best Web And Mobile App Developers For
      </div>
      <div className="flex-row grid grid-cols-3 gap-8 my-8">
        <div className="column flex justify-center items-center flex-col gap-5">
          <div className="head-logo">
            <Image alt="Startup" src={startup} />
          </div>
          <div className="column-header text-[#C3BEFF] text-2xl lg:text-3xl font-semibold">
            Startup
          </div>
          <div className="column-description text-center text-2xl tracking-wide text-gray-700/70">
            With our Agile and DevOps practises we deliver products within 12-16
            weeks with hard-pressed deadlines and high quality standard.
          </div>
        </div>
        <div className="column flex justify-center items-center flex-col gap-5">
          <div className="head-logo">
            <Image alt="Interprises" src={interprises} />
          </div>
          <div className="column-header text-[#C3BEFF] text-2xl lg:text-3xl font-semibold">
            Interprises
          </div>
          <div className="column-description text-center text-2xl tracking-wide text-gray-700/70">
            We build and optimize digital platforms with high end experiences
            for better custom engagement . We create this magic with our expert
            solutions.
          </div>
        </div>
        <div className="column flex justify-center items-center flex-col gap-5">
          <div className="head-logo">
            <Image alt="Agencies" src={agencies} />
          </div>
          <div className="column-header text-[#C3BEFF] text-2xl lg:text-3xl font-semibold">
            Agencies
          </div>
          <div className="column-description text-center text-2xl tracking-wide text-gray-700/70">
            We act as a guiding force for your business upstreaming your
            performance with our high degree technical expertise and strategy.
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center items-center">
        <button className="rounded-full w-1/5 text-[#2D81FF] bg-[#2D81FF6E] px-4 py-3 hover:scale-105 hover:bg-[#1a4b8a] hover:text-white hover:shadow-lg transition-all duration-300 ease-in-out">
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
