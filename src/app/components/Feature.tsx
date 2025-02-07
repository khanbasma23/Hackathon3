import React from 'react';
import Image from 'next/image';

const Feature = () => {
  return (
    <div className="w-full h-auto mt-24 px-4 sm:px-6 md:px-12 lg:px-24 flex justify-center">
      <div className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%]">
        <Image
          src="/image/Featuredproducts.svg"
          alt="Products"
          layout="responsive"
          width={19000}
          height={19000}
        />
      </div>
    </div>
  );
};

export default Feature;
