import React from 'react';

import Program from '@Components/WeightLossProgram/Program';
import Testimony from '@Components/WeightLossProgram/Testimony';
import Layout from '@Components/layout/Layout';

// WeightLossProgram Component: Represents the weight loss programs page
const WeightLossProgram = (): JSX.Element => {
  return (
    <Layout>
      <section className="w-full h-auto mt-5 py-10 bg-primary">
        <div className=" mx-auto flex flex-row gap-5 flex-wrap justify-center items-center md:w-3/5 w-5/6">
          {/* Displaying different weight loss programs using the Program component */}
          <Program
            programName={'Loss weight: Level 1'}
            duration={'4 weeks'}
            description={
              "Beginner's program and easy to follow to lose weight and get started into a healthy life style"
            }
            imgSrc={'./WeightLossProgram/Level1.svg'}
          />
          <Program
            programName={'Intermediate Loss weight: Level 2'}
            duration={'4 weeks'}
            description={
              "Intermediate's program. This includes workouts and special diets"
            }
            imgSrc={'./WeightLossProgram/Level2.svg'}
          />
          <Program
            programName={'Mussel gains: Level 3'}
            duration={'4 weeks'}
            description={
              'This program will push you to limits so you can get maximum mussel grow.'
            }
            imgSrc={'./WeightLossProgram/Level3.svg'}
          />

          <Program
            programName={'Calisthenics: Level 4'}
            duration={'16 weeks'}
            description={
              'This is the ultimate program. This includes all diets to make you look as Captain America'
            }
            imgSrc={'./WeightLossProgram/Level4.svg'}
          />
        </div>
      </section>

      <section className="bg-secondary w-full py-10">
        <div className="flex flex-row gap-5 flex-wrap md:justify-between justify-center md:w-3/5 w-full m-auto">
          {/* Displaying testimonials using the Testimony component */}
          <Testimony
            imgSrc={'./WeightLossProgram/1.png'}
            name={'BelloDev'}
            testimony={'This has been the most rewarding feat of my life!'}
          />

          <Testimony
            imgSrc={'./WeightLossProgram/marko-program.png'}
            name={'anicmarko'}
            testimony={
              "I'm so happy for having so much help and improving my health. I really recommend the beginner's course"
            }
          />

          <Testimony
            imgSrc={'./WeightLossProgram/3.png'}
            name={'John Dope'}
            testimony={
              "I would have not believe these results if I haven't tried out myself."
            }
          />

          <Testimony
            imgSrc={'./WeightLossProgram/4.png'}
            name={'Johana Dope'}
            testimony={
              "Cooking was so easy thanks to the plans provided by Dr. Dope. I used to spend hours cooking unhealthy food but now it takes me 20 mins top. Thanks to beginner's program I've lost over 10 pounds."
            }
          />
        </div>
      </section>
    </Layout>
  );
};

export default WeightLossProgram;
