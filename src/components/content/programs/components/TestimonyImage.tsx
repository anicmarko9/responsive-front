// ImageComponent.tsx
import React from 'react';

interface TestimonyImageProps {
  imgSrc: string;
  altText: string;
}

const TestimonyImage: React.FC<TestimonyImageProps> = ({ imgSrc, altText }) => {
  return (
    <figure className="flex w-[300px] flex-col items-center">
      <img
        className="h-[200px] w-[200px] rounded-full"
        src={imgSrc}
        alt={altText}
      />
    </figure>
  );
};

export default TestimonyImage;
