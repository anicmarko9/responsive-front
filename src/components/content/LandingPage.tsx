import React from 'react';

import Counter from '@Components/features/Counter';
import MainButton from '@Components/features/MainButton';
// LandingPage Component: Represents the landing page of the application.
export default function LandingPage() {
  return (
    // Main container for the landing page.
    <>
      <div className="yellowBlock" />
      {/* yellowBlock and other styles are in file: index.css */}
      {/* changed page height to make sure only the top level components are rendered upon entry */}
      <section className="z-10 flex h-screen flex-col justify-evenly px-8 py-8 mb-20 sm:mb-20 lg:mb-0 sm:px-16 xl:px-36 xl:py-16">
        <div className="flex flex-wrap justify-between pt-10">
          <h1 className="mb-6 w-full break-words text-center text-3xl leading-normal tracking-wide sm:mb-8 sm:w-3/4 sm:text-start sm:text-4xl lg:text-4xl lg:leading-relaxed xl:mb-0 xl:w-2/5 xl:text-5xl xl:leading-relaxed">
            Chicago&apos;s <span className="text-primary">Free</span> Medical
            Check-Up and Weight Loss Consultation
          </h1>
          <Counter />
          {/* Component to display a counter. */}
        </div>
        <p className="my-6 w-full leading-relaxed sm:mb-4 sm:mt-8 sm:w-3/4 sm:text-lg xl:mb-6 xl:mt-6 xl:w-2/5">
          {/* Description of the service, its availability, and requirements. */}
          Limited spots available due to the Physicians schedule and the high
          demand for service. No credit card or insurance required.
        </p>
        <MainButton overwrite={''} />
      </section>
    </>
  );
}
