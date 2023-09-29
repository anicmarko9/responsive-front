import React from 'react';

import { IProduct } from '@Types/interfaces';

const Product = ({
  title,
  description,
  imgSrc,
  price,
}: IProduct): JSX.Element => {
  // A fallback image source in case the provided image is not found.
  const notFound = '/images/NotFound.svg';
  return (
    <section className="mb-4 max-w-sm space-y-2 overflow-hidden rounded-lg bg-green-100 p-3 text-center shadow-lg">
      <figure>
        <img
          className="mx-auto w-3/4 rounded-lg md:h-[300px]"
          src={imgSrc || notFound}
          alt={title}
        />
        <figcaption className="my-2 text-xl font-bold">{title}</figcaption>
      </figure>
      <p className="text-base text-gray-700">{description}</p>
      <div className="px-6 pb-2">
        <h1 className="text-4xl font-black text-gray-700">{price}</h1>
        <button className="mb-3 mt-6 w-full rounded-md bg-gray-700 py-2 font-semibold text-white duration-200 hover:bg-gray-800 hover:shadow-xl">
          Buy Now
        </button>
      </div>
    </section>
  );
};

export default Product;
