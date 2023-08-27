import React from 'react';

import { IShop } from '@Types/countdownType';

const Shop = ({ title, description, imgSrc, price }: IShop): JSX.Element => {
  // A fallback image source in case the provided image is not found.
  const notFound = './ImgNotFound.svg';
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-green-100">
        <img
          className="mx-auto w-9/12 md:h-[300px] rounded-lg"
          src={imgSrc || notFound}
          alt={'product description'}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <h1 className="text-gray-700 text-4xl font-black">{price}</h1>
          <button className="w-full mt-6 mb-3 py-2 text-white font-semibold bg-gray-700 hover:shadow-xl duration-200 hover:bg-gray-800">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
