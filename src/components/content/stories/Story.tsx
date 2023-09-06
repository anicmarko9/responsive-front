import React from 'react';

import { IStories } from '@Types/interfaces';

const Story = ({ imgSrc, name, text }: IStories): JSX.Element => {
  return (
    <article className="flex flex-col xl:h-1/3 group px-3 py-2 items-center bg-gray-900 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <figure className="flex flex-col items-center justify-center">
        <img
          className="object-cover w-full rounded-l-md h-96 md:h-auto md:w-48 md:rounded-l-md"
          src={imgSrc}
          alt={name}
        ></img>
        <figcaption className="flex flex-col justify-between p-4 leading-normal">
          <p className="mb-3 font-normal text-white group-hover:text-gray-800">
            {name}
          </p>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white group-hover:text-gray-800 ">
            My Storie: {text}
          </h5>
        </figcaption>
      </figure>
    </article>
  );
};

export default Story;
