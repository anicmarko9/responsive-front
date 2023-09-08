import React from 'react';

import { ITestimony } from '@Types/interfaces';
import TestimonyImage from '@Components/content/programs/components/TestimonyImage';
import TestimonyText from '@Components/content/programs/components/TestimonyText';
// Testimony Component: Represents a testimony with an image, name, and text.
const Testimony = ({ imgSrc, name, testimony }: ITestimony): JSX.Element => {
  // A fallback image source in case the provided image is not found.
  const notFound = '/images/NotFound.svg';

  return (
    <div className="flex h-auto flex-col items-center overflow-y-auto overflow-x-hidden xl:w-1/4">
      <TestimonyImage imgSrc={imgSrc || notFound} altText={name} />
      <TestimonyText name={name} testimony={testimony} />
    </div>
  );
};

export default Testimony;
