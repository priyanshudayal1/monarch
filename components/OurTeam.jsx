"use client";
import React, { useState } from "react";
import meetTeamBG from "@/public/meetTeamBG.svg";
import nextArrow from "@/public/nextArrow.svg";
import prevArrow from "@/public/prevArrow.svg";
import Image from "next/image";
import Link from "next/link";
import { teamMembers } from "@/lib/constants";


const OurTeam = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - 3 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === teamMembers.length - 3 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex flex-col relative min-h-screen">
      <div
        className="text-center bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: `url(${meetTeamBG.src})` }}
      >
        <span
          className="font-kaisei-decol font-bold"
          style={{
            fontSize: "70px",
            lineHeight: "101.36px",
            background: "linear-gradient(to right, #FFFFFF, #8358E0, #2D81FF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Meet Our Team
        </span>
      </div>
      <div className="bg-white z-30 py-10 absolute top-44 ">
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${(currentIndex * 100) / 3}%)` }}
          >
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="member-box text-center w-full md:w-1/3 px-4 flex-shrink-0"
              >
                <div className="member-img mb-4 bg-[#D9D9D9] overflow-hidden h-80">
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="member-details bg-[#FFF1F1] flex flex-col justify-center items-center p-6 rounded-xl shadow-lg -mt-16 relative z-10 border border-gray-200">
                  <h3 className="text-2xl font-bold text-[#2D81FF] mb-2">
                    {member.name}
                  </h3>
                  <span className="text-lg text-gray-500 mb-4">
                    {member.position}
                  </span>
                  <div className="socials flex space-x-4 mt-4 text-gray-400 items-center justify-start gap-4">
                    {member.socials.map((social, idx) => (
                      <Link href={social.link} key={idx}>
                        <Image
                          alt="social icon"
                          src={social.icon}
                          className="w-8 h-8 transition-transform transform hover:scale-110 filter grayscale hover:grayscale-0"
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-lg"
            onClick={handlePrev}
          >
            <Image src={prevArrow} alt="Previous" className="" />
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-lg"
            onClick={handleNext}
          >
            <Image src={nextArrow} alt="Next" className="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
