import React from 'react';

import Program from '@Components/content/programs/Program';
import Testimony from '@Components/content/programs/Testimony';
import Layout from '@Layout/Layout';
import { WeightLossProgramData } from '@Mocks/weight-loss-program-data';
import { TestimonyData } from '@Mocks/testimony-data';
import { IProgram, ITestimony } from '@Types/interfaces';

// WeightLossProgram Component: Represents the weight loss programs page
const WeightLossProgram = (): JSX.Element => {
  return (
    <Layout>
      <section className="mt-3 h-auto w-full bg-primary py-10">
        <div className=" mx-auto flex w-5/6 flex-row flex-wrap items-center justify-center gap-5 md:w-3/5">
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
        </div>
      </section>

      <section className="w-full bg-secondary py-10">
        <div className="m-auto flex w-full flex-row flex-wrap justify-center gap-2 md:w-3/5 md:justify-between">
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
        </div>
      </section>
    </Layout>
  );
};

export default WeightLossProgram;
