import React from 'react';

import { IStories } from '@Types/interfaces';

const Story = ({ imgSrc, name, text }: IStories): JSX.Element => {
  return (
    <article className="group flex flex-col items-center rounded-lg border border-gray-200 bg-gray-900 px-3 py-2 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:max-w-xl md:flex-row xl:h-1/3">
      <figure className="flex flex-col items-center justify-center">
        <img
          className="h-96 w-full rounded-l-md object-cover md:h-auto md:w-48 md:rounded-l-md"
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
