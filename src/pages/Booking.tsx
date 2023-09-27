import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

import Layout from '@Layout/Layout';
import BookOnline from '@Components/content/booking/BookOnline';

const Booking = (): JSX.Element => {
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
      <BookOnline />
    </Layout>
  );
};

export default Booking;
