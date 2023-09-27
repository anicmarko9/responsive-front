import React from 'react';
import { IProgram } from '@Types/interfaces';
import MainButton from '@/components/features/MainButton';

const Program: React.FC<IProgram> = ({
  programName,
  duration,
  description,
  imgSrc,
}): JSX.Element => {
  // A fallback image source in case the provided image is not found.
  const notFound = '/images/NotFound.svg';

  return (
    <section className="m-2 flex w-full flex-wrap items-center justify-center rounded-lg bg-customWhite shadow-md shadow-slate-700 backdrop-blur-xl sm:m-6 sm:w-1/3 md:p-5 lg:m-8">
      <figure className="relative mt-3 flex w-[95%] flex-col transition-all ease-in-out hover:scale-[0.98] md:w-full">
        <img
          className="w-full rounded-lg md:h-[300px]"
          src={imgSrc || notFound}
          alt={programName}
        />
        <figcaption className="absolute bottom-0 left-0 flex w-full flex-col items-center justify-center bg-black/60 px-3 py-1 text-sm text-white transition-all ease-in-out">
          {description}
        </figcaption>
        <div className="absolute left-0 top-0 flex w-full flex-row items-center justify-between bg-black/60 p-1 uppercase text-white transition-all ease-in-out">
          <h2 className="ml-1 font-bold">{programName}</h2>
          <p className="mr-1 text-center text-sm">{duration}</p>
        </div>
      </figure>
      <MainButton overwrite="self-center sm:m-0 sm:my-4 m-2" />
    </section>
  );
};

export default Program;
