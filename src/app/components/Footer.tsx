import React from "react";
import Image from "next/image";
import { GiSofa } from "react-icons/gi";

const Footer = () => {
  return (
    <footer className="bg-white w-full">
      {/* Main Footer Section */}
      <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 px-4 sm:px-8 md:px-12 lg:px-24 py-8">
        {/* Logo Section */}
        <div className="flex flex-col items-center gap-2 text-center">
          <GiSofa className="text-4xl sm:text-5xl md:text-6xl text-[#56d3be]" />
          <div className="text-lg sm:text-xl md:text-2xl font-bold">Comforty</div>
        </div>

        {/* First Image */}
        <div className="w-full max-w-[150px] sm:max-w-[200px] md:max-w-[250px] relative">
          <Image
            src="/image/Chairy.svg"
            alt="Footer Logo"
            layout="responsive"
            width={300}
            height={200}
          />
        </div>

        {/* Second Image */}
        <div className="w-[80px] sm:w-[100px] md:w-[120px] h-auto relative">
          <Image
            src="/image/footer-text.svg"
            alt="Footer Text"
            layout="responsive"
            width={105}
            height={50}
          />
        </div>

        {/* Third Image */}
        <div className="w-[100px] sm:w-[120px] md:w-[156px] h-auto relative">
          <Image
            src="/image/Frametext.svg"
            alt="Frame Text"
            layout="responsive"
            width={156}
            height={60}
          />
        </div>

        {/* Newsletter Section */}
        <div className="w-full max-w-[200px] sm:max-w-[300px] md:max-w-[424px] h-auto border border-gray-200 rounded-md relative">
          <Image
            src="/image/Newsletter.svg"
            alt="Newsletter"
            layout="responsive"
            width={424}
            height={150}
          />
        </div>
      </div>

    
    </footer>
  );
};

export default Footer;
