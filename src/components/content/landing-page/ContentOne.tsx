import React from 'react';

import MainButton from '@Components/features/MainButton';

// ContentOne Component: Represents the first section of the page with information and an image.
const ContentOne = (): JSX.Element => {
  return (
    // Section container for the first content section with responsive styling.
    <section className="baseContainerX baseContainerY relative flex h-full flex-col justify-between space-y-8 bg-secondary text-lg text-customWhite sm:space-y-0 xl:flex-row xl:-space-y-9">
      <div className="flex flex-col space-y-8 sm:space-y-12 xl:w-1/2 xl:space-y-16">
        <div className="space-y-16 sm:space-y-16">
          <h2 className="contentOneTitle">Who Is The Consultation For?</h2>
          <p className="contentOneDescription">
            {/* Description of the target audience for the consultation. */}
            Chicago&apos;s free medical check-up and weight loss consultation is
            for Chicago residents who are looking to lose weight so they can
            live a long, vibrant and healthy life, while looking good and not
            breaking the bank.
          </p>
        </div>
        <div className="space-y-16 sm:space-y-16">
          <h2 className="contentOneTitle">How Does It Work?</h2>
          <p className="contentOneDescription">
            {/* Description of how the consultation works and its process. */}
            In this exam a certified nurse or physician will do various tests to
            check your overall health level and find which easy-to-do
            physician-supervised weight loss program will work best for you.
          </p>
        </div>
        <MainButton overwrite="" />
      </div>
      <figure className="flex w-3/4 justify-center self-center sm:w-full xl:w-1/2">
        <img
          src="/images/home/trainer.png"
          alt="Trainer"
          className="h-full max-sm:h-32 sm:h-40 md:h-60 lg:h-80 xl:h-[70%]"
        />
      </figure>
    </section>
  );
};

// Exporting the ContentOne component as the default export.
export default ContentOne;
