import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

import Program from '@Components/content/programs/Program';
import Testimony from '@Components/content/programs/Testimony';
import Layout from '@Layout/Layout';
import { WeightLossProgramData } from '@Mocks/weight-loss-program-data';
import { TestimonyData } from '@Mocks/testimony-data';
import { IProgram, ITestimony } from '@Types/interfaces';

// WeightLossProgram Component: Represents the weight loss programs page
const WeightLossProgram = (): JSX.Element => {
  useEffect(() => {
    const lenis: Lenis = new Lenis({
      lerp: 0.075,
      easing: (t: number): number => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    const raf = (time: number): void => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);

  return (
    <Layout>
      <section className="baseContainerX baseContainerY flex flex-wrap items-center justify-evenly sm:justify-center">
        {/* Displaying different weight loss programs using the Program component */}
        {WeightLossProgramData.map(
          (program: IProgram, index: number): JSX.Element => (
            <Program
              key={index}
              programName={program.programName}
              duration={program.duration}
              description={program.description}
              imgSrc={program.imgSrc}
            />
          ),
        )}
      </section>

      <section className="baseContainerX baseContainerY flex flex-wrap">
        {/* Displaying testimonials using the Testimony component */}
        {TestimonyData.map(
          (testimony: ITestimony, index: number): JSX.Element => (
            <Testimony
              key={index}
              imgSrc={testimony.imgSrc}
              name={testimony.name}
              testimony={testimony.testimony}
            />
          ),
        )}
      </section>
    </Layout>
  );
};

export default WeightLossProgram;
