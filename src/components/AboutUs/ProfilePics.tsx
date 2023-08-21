import React from 'react';

// ProfilePics Component
// Reusable component to display a profile picture and related information.
const ProfilePics = ({
  positionAndName,
  imgSrc,
  href,
  nickName,
}: {
    // Destructuring props with their types for clarity and type safety.
  positionAndName: string;
  imgSrc: string;
  href?: string;
  nickName?: string;
}): JSX.Element => {
  // JSX component function definition begins here.
  return (
    <figure className="flex h-[300px] w-[300px] flex-col items-center justify-center">
      <img
        className="h-[250px] w-[250px] rounded-full"
        src={imgSrc}
        alt={`${positionAndName}`}
      />
      <figcaption className="p-3 text-xl italic">
        {positionAndName}
        {href && nickName && <a href={href}>{` ${nickName}`}</a>}
      </figcaption>
    </figure>
  );
};

// Exporting the ProfilePics component as the default export.
export default ProfilePics;
