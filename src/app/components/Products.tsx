import React from 'react';
import Image from 'next/image';

const Products = () => {
  return (
    <div className="w-full mt-10 flex justify-center">
      <div className="w-full h-auto flex justify-center px-4 sm:px-8 md:px-12 lg:px-24">
        <Image
          className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%] h-auto"
          src="/image/Our Products.svg"
          alt="Products"
          width={19000}
          height={19000}
        />
      </div>
    </div>
  );
};

export default Products;
