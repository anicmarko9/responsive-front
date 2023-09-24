import React from 'react';

import FAQ from '@Components/features/FAQ';
import MainButton from '@Components/features/MainButton';

// ContentFAQ Component: Section containing Frequently Asked Questions (FAQs).
const ContentFAQ = (): JSX.Element => {
  return (
    // Section container for FAQs with responsive styling.
    <section className="baseContainerX baseContainerY relative flex h-full flex-col space-y-4 bg-white text-lg  sm:space-y-6 md:space-y-9 lg:space-y-9 xl:space-y-12 2xl:space-y-12">
      <h2 className="text-2xl tracking-wide">Frequently Asked Questions</h2>
      <FAQ question="Why is it free?" />
      <FAQ
        question="Do I need this if I've had my yearly medical check? What is the
          difference?"
      />
      {/* FAQ about the necessity of the service after a medical check and its differences. */}
      <FAQ question="Can I bring another person to the appointment?" />
      <FAQ question="How long does it take?" />
      <FAQ question="What if I have to cancel or if I'm not sure I'll be able to make it?" />
      <FAQ question="Do I need to bring anything with me?" />
      <FAQ question="What if I don't have insurance?" />
      <FAQ question="Do the weight loss programs you offer work?" />
      <FAQ question="What's the catch?" />
      <FAQ question="Will I have to exhaust myself in the gym to make it work?" />
      <FAQ question="Where are you located?" />
      <MainButton overwrite="self-center max-sm:hidden" />
    </section>
  );
};

// Exporting the ContentFAQ component as the default export.
export default ContentFAQ;
