import React from 'react';
import { TiTick } from "react-icons/ti";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { GiSofa } from "react-icons/gi";
import { FiShoppingCart } from "react-icons/fi";
import { TbCircleNumber2Filled } from "react-icons/tb";
import Link from 'next/link';
import Image from 'next/image';

const Products = () => {
  return (
    <div>
      <div className='w-[1920px]'>
        {/* Top Header Section */}
        <div className="w-full  h-[45px] px-4 md:px-12 lg:px-24 bg-[#272343] flex justify-between items-center text-white">
          {/* Left Section */}
          <div className="flex items-center gap-2 text-sm md:text-base">
            <TiTick className="text-xl" />
            Free Shipping On All Orders Over $50
          </div>
          {/* Right Section */}
          <div className="flex items-center gap-6 text-sm opacity-70">
            <div className="flex items-center">
              Eng
              <IoIosArrowDown className="ml-2" />
            </div>
            <div>Faqs</div>
            <div className="flex items-center">
              <AiOutlineExclamationCircle className="text-2xl md:text-4xl mr-2" />
              Need Help
            </div>
          </div>
        </div>

        {/* Middle Header Section */}
        <div className="w-full h-auto py-4 bg-[#F0F2F3] flex flex-col md:flex-row justify-between items-center px-4 md:px-12 lg:px-24">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <GiSofa className="text-4xl md:text-6xl text-[#56d3be]" />
            <div className="text-lg md:text-xl">Comforty</div>
          </div>
          {/* Cart Section */}
          <div className="flex items-center gap-4 bg-white rounded-lg px-4 py-2 mt-4 md:mt-0">
            <FiShoppingCart className="text-2xl md:text-4xl" />
            <div className="flex items-center text-sm md:text-xl">
              Cart
              <TbCircleNumber2Filled className="text-[#56d3be] ml-2 text-lg md:text-2xl" />
            </div>
          </div>
        </div>

        {/* Bottom Header Section */}
        <div className="w-full h-auto py-4 bg-white flex flex-col md:flex-row justify-between items-center px-4 md:px-12 lg:px-24">
          {/* Navigation Links */}
          <div className="flex gap-4 md:gap-8 text-sm md:text-base">
            <ul className="flex gap-4">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/Shop-Cart">Shop-Cart</Link>
              </li>
              <li>
                <Link href="/Products">Products</Link>
              </li>
              <li>
                <Link href="/Pages">Pages</Link>
              </li>
              <li>
                <Link href="/About">About</Link>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div className="mt-4 md:mt-0 text-sm md:text-base">Contact: (808) 555-0111</div>
        </div>
      </div>

      <div className="w-full h-auto mt-16 px-4 md:px-12 lg:px-24">
        {/* Products Image Section */}
        <div className="w-full mt-10 flex justify-center">
          <Image
            src="/image/Products.svg"
            alt="Products"
            width={1200}
            height={600}
          />
        </div>

        {/* Featured Section */}
        <div className="w-full mt-16 flex justify-center">
          <Image
            src="/image/Featured.svg"
            alt="Featured"
            width={1200}
            height={600}
          />
        </div>

        {/* Pro Section */}
        <div className="w-full mt-16 flex justify-center">
          <Image
            src="/image/pro.svg"
            alt="Pro Section"
            width={1200}
            height={600}
          />
        </div>
      </div>

      <div className="bg-[#FFFFFF] w-full">
        {/* Main Footer Section */}
        <div className="flex flex-wrap justify-center items-center gap-8 px-4 md:px-12 lg:px-24 py-8">
          {/* First Image */}
          <Image
            className="w-full max-w-[200px] md:max-w-[300px] mt-4"
            src="/image/Chairy.svg"
            alt="Footer Logo"
            width={300}
            height={150}
          />

          {/* Second Image */}
          <Image
            className="w-[100px] md:w-[105px] h-auto mt-4"
            src="/image/footer-text.svg"
            alt="Footer Text"
            width={105}
            height={50}
          />

          {/* Third Image */}
          <Image
            className="w-[120px] md:w-[156px] h-auto mt-4"
            src="/image/Frametext.svg"
            alt="Frame Text"
            width={156}
            height={60}
          />

          {/* Newsletter Section */}
          <Image
            className="w-full max-w-[250px] md:max-w-[424px] h-auto border border-gray-200 rounded-md mt-4"
            src="/image/Newsletter.svg"
            alt="Newsletter"
            width={424}
            height={150}
          />
        </div>

        {/* Last Footer Section */}
        <div className="w-full mt-8">
          <Image
            src="/image/Frame 69.svg"
            alt="Footer Bottom"
            width={1920}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
