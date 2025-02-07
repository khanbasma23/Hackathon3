"use client";
import { useState } from "react";
import Link from "next/link";
import "tailwindcss/tailwind.css";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#272343] shadow-md w-full">
      <div className="container mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between">
        
        {/* Logo */}
        <div className="text-xl font-bold text-white">Comforty</div>

        {/* Mobile Menu Toggle */}
        <div className="sm:hidden flex items-center">
          <button
            type="button"
            className="text-white hover:text-gray-300 focus:outline-none text-2xl"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } sm:flex flex-col sm:flex-row sm:space-x-6 w-full sm:w-auto mt-4 sm:mt-0 sm:items-center`}
        >
          <div className="flex gap-4 md:gap-8 text-sm md:text-base">
            <Link href="/" className="text-white hover:text-[#56d3be]">Home</Link>
            <Link href="/ShopCart" className="text-white hover:text-[#56d3be]">ShopCart</Link>
            <Link href="/Products1" className="text-white hover:text-[#56d3be]">Products</Link>
            <Link href="/customPages" className="text-white hover:text-[#56d3be]">Pages</Link>
            <Link href="/About" className="text-white hover:text-[#56d3be]">About</Link>
          </div>
        </nav>

        {/* Contact Info */}
        <div className="hidden sm:block text-sm text-white text-right">
          <div>Contact: (080) 555-0111</div>
          <span className="text-xs">Free Shipping On All Orders Over $50</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
