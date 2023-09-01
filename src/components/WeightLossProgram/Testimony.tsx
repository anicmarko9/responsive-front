import React from 'react';

import { ITestimony } from '@/types/interfaces';
// Testimony Component: Represents a testimony with an image, name, and text.
const Testimony = ({ imgSrc, name, testimony }: ITestimony): JSX.Element => {
  // A fallback image source in case the provided image is not found.
  const notFound = './ImgNotFound.svg';

  return (
    <div className="flex flex-col items-center overflow-y-auto overflow-x-hidden h-[450px]">
      <figure className="w-[300px] flex flex-col items-center">
        <img
          className="h-[250px] w-[250px] rounded-full"
          src={imgSrc || notFound}
          alt={name}
        />
        <figcaption className="p-3 text-xl italic flex flex-col">
          {name}
          {testimony && <span className="text-justify">{testimony}</span>}
        </figcaption>
      </figure>
    </div>
  );
};

export default Testimony;
