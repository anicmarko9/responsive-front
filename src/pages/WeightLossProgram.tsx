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
      <section className="w-full h-auto mt-3 py-10 bg-primary">
        <div className=" mx-auto flex flex-row gap-5 flex-wrap justify-center items-center md:w-3/5 w-5/6">
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

      <section className="bg-secondary w-full py-10">
        <div className="flex flex-row gap-2 flex-wrap md:justify-between justify-center md:w-3/5 w-full m-auto">
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
