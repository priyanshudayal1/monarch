import React from "react";
import footerImage from "@/public/footerImg.png";
import footerLogo from "@/public/footerLogo.png";
import facebook from "@/public/facebook.png";
import twitter from "@/public/twitter.png";
import instagram from "@/public/instagram.png";
import linkedin from "@/public/linkedin.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mb-4 mt-40 py-10 bg-[#2D81FFDB] relative">
      <Image
        src={footerImage}
        className="absolute -top-48 left-96"
        alt="Footer Lady with laptop"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 h-full mx-10">
        <div className="col-span-1 md:col-span-2 flex items-center flex-col justify-evenly">
          <div className="logo">
            <Image src={footerLogo} alt="Footer Logo" height="80%" width="80%" />
          </div>
          <div className="text flex flex-col justify-between text-base md:text-lg lg:text-xl">
            <p className="text-white">Let&apos;s Make it...</p>
            <p className="text-white">Build your website and mobile apps with US</p>
            <div className="flex flex-row w-full mt-4">
              <input
                type="email"
                className="bg-gray-400/60 active:border-none focus:border-none placeholder:text-white text-center rounded-2xl w-full"
                placeholder="Your Email"
              />
              <button className="bg-white px-4 py-2 border-1 border-black/80 rounded-2xl w-1/2">Join Us</button>
            </div>
            <div className="socials flex space-x-4 mt-4 text-white items-center justify-start gap-4">
              <Link href="#"><Image alt="social icon" src={facebook} /></Link>
              <Link href="#"><Image alt="social icon" src={twitter} /></Link>
              <Link href="#"><Image alt="social icon" src={linkedin} /></Link>
              <Link href="#"><Image alt="social icon" src={instagram} /></Link>
            </div>
          </div>
        </div>
        <div className="flex items-start text-white flex-col justify-center">
          <div className="head text-white font-semibold text-xl md:text-2xl lg:text-3xl">Help</div>
          <div className="flex flex-col text-start text-base md:text-lg lg:text-xl">
            <Link href="#">How does it works?</Link>
            <Link href="#">Where to start?</Link>
          </div>
        </div>
        <div className="flex items-start flex-col text-white justify-center">
          <div className="head text-white font-semibold text-xl md:text-2xl lg:text-3xl">Contact</div>
          <div className="flex flex-col text-start text-base md:text-lg lg:text-xl">
            <p>+ 1 888 HUBSPOT</p>
            <p>(+1 888 482 7768)</p>
            <p>Headquarters</p>
            <p>2 Canal ParkCambridge,</p>
            <p>MA 02141</p>
            <p>United States</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;