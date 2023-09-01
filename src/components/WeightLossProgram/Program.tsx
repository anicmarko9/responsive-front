import React from 'react';

import { IProgram } from '@/types/interfaces';

// Program Component: Represents a program with its details and an image.
const Program = ({
  programName,
  duration,
  description,
  imgSrc,
}: IProgram): JSX.Element => {
  // A fallback image source in case the provided image is not found.
  const notFound = './ImgNotFound.svg';

  return (
    <div className="m-auto md:w-[500px] w-full h-auto md:p-5 bg-white rounded-lg shadow-md shadow-slate-700 backdrop-blur-xl flex flex-col justify-between items-center">
      <figure className="md:w-full w-[95%] mt-3 flex flex-col relative transition-all hover:scale-[0.98] ease-in-out">
        <img
          className="mx-auto w-full md:h-[300px] rounded-lg"
          src={imgSrc || notFound}
          alt={programName}
        />
        <figcaption className="absolute bottom-0 left-0 w-full bg-black/60 flex flex-col justify-center items-center font-libre-baskerville py-1 px-3 text-sm text-white hover:text-yellow-300 transition-all ease-in-out">
          {description}
        </figcaption>
        <div className="absolute top-0 left-0 w-full bg-black/60 flex flex-row justify-between p-1 items-center font-libre-baskerville text-white uppercase hover:text-yellow-300 transition-all ease-in-out">
          <h2 className="font-bold ml-1">{programName}</h2>
          <p className="text-sm text-center mr-1">{duration}</p>
        </div>
      </figure>

      <button className="mt-2 mb-3 md:w-[450px] w-[95%] text-white font-bold font-libre-baskerville bg-[--violet] rounded-md p-3 hover:bg-[--purple] hover:scale-[0.98] transition-all ease-in-out">
        ROLL IN!
      </button>
    </div>
  );
};

export default Program;
