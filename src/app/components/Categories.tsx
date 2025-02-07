import React from "react";
import Image from "next/image";
import 'tailwindcss/tailwind.css';

function Categories() {
  return (
    <div className="w-full px-4 sm:px-8 md:px-12 lg:px-24">
      {/* Image Section */}
      <div className="mt-24 flex justify-center">
        <Image
          className="block w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] h-auto"
          src="/image/Top-Categotires.png"
          alt="Top Categories"
          width={19000}
          height={19000}
        />
      </div>

      {/* Hot Category Section */}
      <div className="mt-24 flex justify-center">
        <Image
          className="block  w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] h-auto"
          src="/image/hot-category.svg"
          alt="Hot Category"
          width={19000}
          height={19000}
        />
      </div>
    </div>
  );
}

export default Categories;
