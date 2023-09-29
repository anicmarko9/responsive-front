import React from 'react';

import { IStories } from '@Types/interfaces';

const Story = ({ imgSrc, name, text }: IStories): JSX.Element => {
  return (
    <article className="statDescriptionText flex flex-col items-center rounded-lg border border-gray-200 bg-primary p-4 text-white hover:border-primary hover:bg-customWhite hover:text-primary">
      <figure className="flex flex-col items-center justify-center">
        <img
          className="rounded-l-md object-cover"
          src={imgSrc}
          alt={name}
          width={200}
          height={200}
        ></img>
        <figcaption>{name}</figcaption>
      </figure>
      <h2>My Story: {text}</h2>
    </article>
  );
};

export default Story;
