import React from 'react';

import FAQ from '@Components/features/FAQ';
import MainButton from '@Components/features/MainButton';

// ContentFAQ Component: Section containing Frequently Asked Questions (FAQs).
const ContentFAQ = (): JSX.Element => {
  return (
     // Section container for FAQs with responsive styling.
    <section className="relative flex h-full flex-col bg-white px-8 py-8 text-lg sm:px-36 xl:px-36 xl:py-16">
      <h2 className="mb-8 text-2xl tracking-wide sm:text-4xl xl:mb-12 xl:mt-4">
        Frequently Asked Questions
      </h2>
      <FAQ question="Why is it free?" />
      <FAQ
        question="Do I need this if I've had my yearly medical check? What is the
          difference?"
      />{/* FAQ about the necessity of the service after a medical check and its differences. */}
      <FAQ question="Can I bring another person to the appointment?" />
      <FAQ question="How long does it take?" />
      <FAQ question="What if I have to cancel or if I'm not sure I'll be able to make it?" />
      <FAQ question="Do I need to bring anything with me?" />
      <FAQ question="What if I don't have insurance?" />
      <FAQ question="Do the weight loss programs you offer work?" />
      <FAQ question="What's the catch?" />
      <FAQ question="Will I have to exhaust myself in the gym to make it work?" />
      <FAQ question="Where are you located?" />
      <MainButton overwrite="self-center mt-8 xl:mt-12 sm:mb-0 max-sm:hidden" />
    </section>
  );
};

// Exporting the ContentFAQ component as the default export.
export default ContentFAQ;
