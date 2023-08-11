import React from 'react';
import MainButton from '../features/MainButton';

const ContentTwo = (): JSX.Element => {
  return (
    <section className="relative flex h-full flex-col items-center space-y-8 bg-white px-0 py-8 text-start text-lg xl:px-36 xl:pb-0 xl:pt-16 xl:text-center">
      <h2 className="order-first my-2 w-full px-8 text-3xl tracking-wide sm:px-36 xl:order-none xl:my-4 xl:px-0 xl:text-4xl">
        We Can Help You
      </h2>
      <p className="flex flex-col space-y-4 px-8 sm:space-y-8 sm:px-36 xl:block xl:space-y-0 xl:px-0">
        <span className="order-1 text-sm sm:text-base xl:order-none xl:text-lg">
          For those of us who struggle with our weight it&apos;s easy to lose
          hope. We have seen so many tricks, gimmicks and weight loss programs
          that simply do not work for us. They want us to eat like a pigeon,
          avoid all the things we love to eat and work out till we cry.
        </span>{' '}
        <span className="order-2 text-sm sm:text-base xl:order-none xl:text-lg">
          We are here to tell you that it doesn&apos;t have to be that way.
          There is hope! Technology has advanced rapidly in recent years and
          now, with proper guidance...
        </span>
      </p>
      <p className="order-4 px-8 text-sm sm:px-36 sm:text-base xl:order-none xl:px-0 xl:text-lg">
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
          src="/group.png"
          alt="Group of people"
          height={760}
          className="order-3 h-40 w-full sm:h-full xl:order-none"
        />
      </figure>
    </section>
  );
};

export default ContentTwo;
