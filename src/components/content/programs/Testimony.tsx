import React from 'react';

import { ITestimony } from '@Types/interfaces';
// Testimony Component: Represents a testimony with an image, name, and text.
const Testimony = ({ imgSrc, name, testimony }: ITestimony): JSX.Element => {
  // A fallback image source in case the provided image is not found.
  const notFound = '/images/NotFound.svg';

  return (
    <div className="flex flex-col items-center overflow-y-auto overflow-x-hidden h-auto xl:w-1/4">
      <figure className="w-[300px] flex flex-col items-center">
        <img
          className="h-[200px] w-[200px] rounded-full"
          src={imgSrc || notFound}
          alt={name}
        />
        <figcaption className="p-3 text-xl italic flex flex-col text-center gap-y-1">
          <h2 className='font-semibold text-xl'>{name}</h2>
          {testimony && <span className="text-justify text-base">{testimony}</span>}
        </figcaption>
      </figure>
    </div>
  );
};

export default Testimony;
