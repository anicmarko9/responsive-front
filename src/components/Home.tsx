import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import LandingPage from './content/LandingPage';
import Layout from './layout/Layout';

// Lazy loading components to improve performance
const LazyCards = React.lazy(() => import('./content/StatCards'));
const LazyContentOne = React.lazy(() => import('./content/ContentOne'));
const LazyContentTwo = React.lazy(() => import('./content/ContentTwo'));
const LazyContentThree = React.lazy(() => import('./content/ContentThree'));
const LazyContentFAQ = React.lazy(() => import('./content/ContentFAQ'));
// Home Component: Represents the home page of the website
// Updating to a functional component
function Home() {
   useEffect(() => {
     const lenis = new Lenis({
       lerp: 0.075,
       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
     });

      lenis.on('scroll', (e: any) => {
        console.log(e)
      })
      function raf(time: any) {
       lenis.raf(time);
       requestAnimationFrame(raf);
      }
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
