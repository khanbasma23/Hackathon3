import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";


const HeroSection = () => {
  return (
    <div className="w-full bg-[#dae2e6] py-16 mt-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 sm:px-8 md:px-12 lg:px-24">
        {/* Left Section */}
        <div className="flex flex-col lg:w-1/2 space-y-6 lg:space-y-10 text-center lg:text-left">
          <div className="text-lg sm:text-xl font-serif text-[#272343]">
            WELCOME TO CHAIRY
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#272343] leading-tight">
            Best Furniture Collection for your interior.
          </h1>
          <button className="flex items-center justify-center gap-2 bg-[#029FAE] text-white font-medium px-6 py-3 rounded-lg hover:bg-[#027a87] transition">
            Shop Now
            <FaArrowRight />
          </button>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
          <Image
            className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[800px] h-auto object-cover"
            src="/image/BG.png"
            alt="Chair"
            width={800}
            height={600}
          />
        </div>
      </div>

      {/* Logos Section */}
      <div className="flex justify-center flex-wrap items-center mt-16 gap-8">
        <Image
          className="w-16 sm:w-20 md:w-28 lg:w-40 h-auto"
          src="/image/comlogo.svg"
          alt="Logos"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
};

export default HeroSection;
