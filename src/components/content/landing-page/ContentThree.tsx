import React from 'react';
import { BsDot } from 'react-icons/bs';

import MainButton from '@Components/features/MainButton';

// ContentThree Component: Represents the third section of the page outlining what the user will get at their consultation.
const ContentThree = (): JSX.Element => {
  return (
    // Section container for the third content section with responsive styling.
    <section className="relative flex h-full flex-col items-center space-y-8 bg-customWhite px-8 py-8 text-lg sm:px-16 xl:space-y-16 xl:px-36 xl:py-16">
      <h2 className="my-2 text-start text-3xl tracking-wide sm:my-4 xl:text-center xl:text-4xl">
        What You&apos;ll Get At Your <span className="text-primary">Free</span>{' '}
        Consultation
      </h2>
      <div className="flex flex-wrap justify-around space-y-8 xl:space-y-0">
        <div className="contentThreeContainer popUpAnimation">
          <h2 className="text-center text-2xl text-secondary xl:text-3xl">
            Body Mass Index
          </h2>
          <hr className="border-1 border-secondary" />
          <ul className="space-y-4">
            <li className="flex text-base xl:text-lg">
              <BsDot className="bulletPoint" />
              Complete understanding of your body composition
            </li>
            <li className="flex text-base xl:text-lg">
              <BsDot className="bulletPoint" />A clear view of your weight loss
              goals
            </li>
            <li className="flex text-base xl:text-lg">
              <BsDot className="bulletPoint" />
              Clear data to help you make an informed decision about your health
            </li>
          </ul>
        </div>
        <div className="contentThreeContainer popUpAnimation">
          <h2 className="text-center text-2xl text-primary xl:text-3xl">
            Vital Signs Check
          </h2>
          <hr className="border-1 border-primary" />
          <ul className="space-y-4">
            <li className="flex text-base xl:text-lg">
              <BsDot className="bulletPoint" />
              Body temperature
            </li>
            <li className="flex text-base xl:text-lg">
              <BsDot className="bulletPoint" />
              Pulse rate, heart&apos;s rate, rhythm and regularity
            </li>
            <li className="flex text-base xl:text-lg">
              <BsDot className="bulletPoint" />
              Breathing rare
            </li>
            <li className="flex text-base xl:text-lg">
              <BsDot className="bulletPoint" />
              Blood pressure
            </li>
          </ul>
        </div>
      </div>
      {/* Main Call to Action Button */}
      <MainButton overwrite="xl:self-center" />
    </section>
  );
};
// Exporting the ContentThree component as the default export.
export default ContentThree;
