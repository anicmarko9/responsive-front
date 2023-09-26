import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

import ProfilePics from '@Components/content/about-us/ProfilePics';
import Layout from '@Layout/Layout';

// AboutUs Component: Represents the about page with team information
const AboutUs = (): JSX.Element => {
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
      <div className="yellowBlock" />
      <section className="">
        <section className="baseContainerX baseContainerY flex flex-col gap-2 md:flex-row">
          <figure className="flex justify-center md:w-3/5 md:p-5">
            <img
              className="rounded-md shadow-md shadow-yellow-300"
              src="/images/home/aboutus_image1.webp"
              alt="about us"
            />
          </figure>
          <div className="md:w-2/5 md:p-5 ">
            <div className="flex w-full justify-center">
              <h2 className="w-4/5 rounded-2xl bg-blue-400 p-3 text-center text-4xl font-bold text-yellow-300 md:w-[200px]">
                About us
              </h2>
            </div>
            <p className="text-justify text-xl">
              <span className="text-4xl font-bold text-blue-400">L</span>orem
              ipsum dolor sit amet, consectetur adipisicing elit. Nam quam
              aspernatur expedita facilis consectetur beatae.
            </p>
            <p className="mt-5 text-justify text-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam quam
              aspernatur expedita facilis consectetur beatae.
            </p>
          </div>
        </section>
        <section className="baseContainerX baseContainerY flex flex-col gap-2 bg-white md:flex-row">
          <div className="md:w-3/5 md:p-5">
            <div className="flex w-full justify-center">
              <h2 className="w-4/5 rounded-2xl bg-blue-400 p-3 text-center text-4xl font-bold text-yellow-300 md:w-[300px]">
                Changing lives
              </h2>
            </div>
            <p className="text-justify text-xl">
              <span className="text-4xl font-bold text-pink-400">L</span>orem
              ipsum dolor sit amet, consectetur adipisicing elit. Nam quam
              aspernatur expedita facilis consectetur beatae.
            </p>
            <p className="mt-5 text-justify text-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam quam
              aspernatur expedita facilis consectetur beatae.
            </p>
          </div>
          <figure className="flex justify-center md:w-2/5 md:p-5">
            <img
              className="rounded-md shadow-md shadow-yellow-300"
              src="/images/home/aboutus_image1.webp"
              alt="about us"
            />
          </figure>
        </section>
        <section className="baseContainerX baseContainerY flex flex-col gap-2">
          <div className="flex w-full justify-center">
            <h2 className="w-4/5 rounded-2xl bg-blue-400 p-3 text-center text-4xl font-bold text-yellow-300 md:w-[200px]">
              Our people
            </h2>
          </div>
          <div className="mt-10 flex w-full flex-col items-center gap-[20px] md:flex-row md:justify-between">
            <ProfilePics
              positionAndName={'CEO John Doe'}
              imgSrc={'/images/home/aboutus_image1.webp'}
            />
            <ProfilePics
              positionAndName={'COO Johana Doe'}
              imgSrc={'/images/home/aboutus_image1.webp'}
            />
            <ProfilePics
              positionAndName={'Medical Head Dr. Doeliuos'}
              imgSrc={'/images/home/aboutus_image1.webp'}
            />
          </div>
          <div className="mt-10 flex w-full flex-col items-center justify-center gap-[20px] md:flex-row md:gap-[200px]">
            <ProfilePics
              positionAndName={'Product Owner'}
              imgSrc={'/images/home/aboutus_image1.webp'}
              href={'https://github.com/anicmarko9'}
              nickName={'@anicmarko9'}
            />

            <ProfilePics
              positionAndName={'Developer'}
              imgSrc={'/images/home/aboutus_image1.webp'}
              href={'https://www.bellodev.com'}
              nickName={'@BelloDev'}
            />
          </div>
        </section>
      </section>
    </Layout>
  );
};

export default AboutUs;
