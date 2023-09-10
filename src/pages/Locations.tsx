import React from 'react';

import Layout from '@Layout/Layout';
import Location from '@Components/content/locations/Location';

// Locations Component: Represents the page for displaying different locations
const Locations = (): JSX.Element => {
  return (
    <Layout>
      <section className="mx-auto mt-3 flex w-screen flex-row flex-wrap justify-center gap-5 bg-primary py-10 xl:h-[90vh]">
        <Location
          imgSrc={'/images/store/store1.jpg'}
          name={'name'}
          schedule={'09-17h'}
          address={'Some address 122'}
        ></Location>
        <Location
          imgSrc={'/images/store/store2.jpg'}
          name={'name'}
          schedule={'09-17h'}
          address={'Some address 122'}
        ></Location>
        <Location
          imgSrc={'/images/store/store3.jpg'}
          name={'name'}
          schedule={'09-17h'}
          address={'Some address 122'}
        ></Location>
      </section>
    </Layout>
  );
};

export default Locations;
