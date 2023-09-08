import React from 'react';
import { IProgram } from '@Types/interfaces';

const Program: React.FC<IProgram> = ({
  programName,
  duration,
  description,
  imgSrc,
}): JSX.Element => {
  // A fallback image source in case the provided image is not found.
  const notFound = '/images/NotFound.svg';

  return (
    <div className="m-auto flex h-auto w-full flex-col items-center justify-between rounded-lg bg-customWhite shadow-md shadow-slate-700 backdrop-blur-xl md:w-[500px] md:p-5">
      <figure className="relative mt-3 flex w-[95%] flex-col transition-all ease-in-out hover:scale-[0.98] md:w-full">
        <img
          className="mx-auto w-full rounded-lg md:h-[300px]"
          src={imgSrc || notFound}
          alt={programName}
        />
        <figcaption className="font-libre-baskerville absolute bottom-0 left-0 flex w-full flex-col items-center justify-center bg-black/60 px-3 py-1 text-sm text-white transition-all ease-in-out hover:text-yellow-300">
          {description}
        </figcaption>
        <div className="font-libre-baskerville absolute left-0 top-0 flex w-full flex-row items-center justify-between bg-black/60 p-1 uppercase text-white transition-all ease-in-out hover:text-yellow-300">
          <h2 className="ml-1 font-bold">{programName}</h2>
          <p className="mr-1 text-center text-sm">{duration}</p>
        </div>
      </figure>

      <button className="font-libre-baskerville mb-3 mt-2 w-[95%] rounded-md bg-[--violet] p-3 font-bold text-secondary transition-all ease-in-out hover:scale-[0.98] hover:bg-[--purple] md:w-[450px]">
        ROLL IN!
      </button>
    </div>
  );
};

export default Program;
