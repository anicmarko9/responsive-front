import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

import Layout from '@Layout/Layout';
import LandingPage from '@Components/content/landing-page/LandingPage';

// Lazy loading components to improve performance
const LazyCards = React.lazy(
  () => import('@Components/content/landing-page/StatCards'),
);
const LazyContentOne = React.lazy(
  () => import('@Components/content/landing-page/ContentOne'),
);
const LazyContentTwo = React.lazy(
  () => import('@Components/content/landing-page/ContentTwo'),
);
const LazyContentThree = React.lazy(
  () => import('@Components/content/landing-page/ContentThree'),
);
const LazyContentFAQ = React.lazy(
  () => import('@Components/content/landing-page/ContentFAQ'),
);
// Home Component: Represents the home page of the website
// Updating to a functional component
function Home() {
  useEffect(() => {
    const lenis: Lenis = new Lenis({
      lerp: 0.075,
      easing: (t: number): number => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenis.on('scroll', (e: Event): void => {
      console.log(e);
    });
    const raf = (time: number): void => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);
  return (
    // Using the Layout component to structure the page
    <Layout>
      <LandingPage />
      <LazyCards />
      <LazyContentOne />
      <LazyContentTwo />
      <LazyContentThree />
      <LazyContentFAQ />
    </Layout>
  );
}

export default Home;
