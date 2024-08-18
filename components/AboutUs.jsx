import React from "react";

const AboutUs = () => {
  return (
    <div className="m-20 px-16 flex  flex-col h-60">
      <div className="about-header flex flex-row gap-2 text-[#2D81FFDB] items-end text-5xl lg:text-8xl font-semibold">
        <span>About</span>
        <span className="text-gray-700/80 text-3xl">Let&apos;s Make it</span>
      </div>

      <div className="about-description text-3xl tracking-wide text-[#00000040]/45">
        <div className="flex flex-row">
          <span className="text-5xl lg:text-8xl text-[#2D81FFDB]">Us</span>
          <p className="leading-relaxed tracking-wider">
            <span className="text-4xl text-[#2D81FF]">MONARCH</span> is an
            interactive agency where we create digital platforms for your
            business. We understand our client problems offer quality solutions
            to suit their needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
