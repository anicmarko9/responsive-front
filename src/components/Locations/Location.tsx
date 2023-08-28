import React from 'react';
import { ILocation } from '@Types/countdownType';

const Location = ({
  name,
  imgSrc,
  schedule,
  address,
}: ILocation): JSX.Element => {
  const notFound = '../ImgNotFound.svg';
  return (
    <article className="flex flex-col group items-center bg-gray-900 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={imgSrc || notFound}
        alt={name}
      ></img>
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white group-hover:text-gray-800 ">
          Opening hours:{schedule}
        </h5>

        <p className="mb-3 font-normal text-white group-hover:text-gray-800">
          {address}
        </p>
        <button
          className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          Call
        </button>
        <button
          className="bg-amber-500 text-white active:bg-amber-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          Map
        </button>
      </div>
    </article>
  );
};

export default Location;
