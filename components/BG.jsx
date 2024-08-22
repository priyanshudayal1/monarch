import React from "react";
import Image from "next/image";
import bg from "@/public/bg.svg";

const BG = () => {
  return (
    <Image
      src={bg}
      alt="Monarch Background"
      className="flex min-w-full min-h-full absolute object-contain bg-repeat top-0 left-0 z-0"
    />
  );
};

export default BG;
