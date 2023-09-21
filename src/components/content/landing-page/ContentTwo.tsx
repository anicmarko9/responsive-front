import React from 'react';

import MainButton from '@Components/features/MainButton';

// ContentTwo Component: Represents the second section of the page with a message about weight loss assistance.
const ContentTwo = (): JSX.Element => {
  return (
    // Section container for the second content section with responsive styling.
    <section className="baseContainerX baseContainerY relative flex h-full flex-col items-center space-y-4 bg-white text-start text-lg sm:space-y-6 md:space-y-9 lg:space-y-12 xl:pb-0 xl:text-center">
      <h2 className="order-first w-full text-3xl tracking-wide xl:order-none xl:text-4xl">
        We Can Help You
      </h2>
      <p className="flex flex-col space-y-4 sm:space-y-8 xl:block xl:space-y-0">
        <span className="order-1 text-sm sm:text-base xl:order-none xl:text-lg">
          {/* First part of the message about weight loss challenges and common experiences. */}
          For those of us who struggle with our weight it&apos;s easy to lose
          hope. We have seen so many tricks, gimmicks and weight loss programs
          that simply do not work for us. They want us to eat like a pigeon,
          avoid all the things we love to eat and work out till we cry.
        </span>{' '}
        <span className="order-2 text-sm sm:text-base xl:order-none xl:text-lg">
          {/* Second part of the message highlighting hope and the advancements in technology. */}
          We are here to tell you that it doesn&apos;t have to be that way.
          There is hope! Technology has advanced rapidly in recent years and
          now, with proper guidance...
        </span>
      </p>
      {/* Additional Information */}
      <p className="order-4 text-sm sm:text-base xl:order-none xl:text-lg">
        You can join the ranks of our over 15,000 satisfied clients who have
        lost weight, regained their confidence and are living happy exuberant
        lives with their family. They did this without: breaking the bank,
        sweating buckets in intense workout programs, and most importantly,
        without giving up ice-cream, bread, pizza, doughnuts and all their
        favorite foods.
      </p>
      <MainButton overwrite="xl:self-center order-last xl:order-none" />
      <figure>
        <img
          src="/images/home/group.png"
          alt="Group of people"
          height={760}
          className="order-3 h-40 w-full sm:h-full xl:order-none"
        />
      </figure>
    </section>
  );
};
// Exporting the ContentTwo component as the default export.
export default ContentTwo;
