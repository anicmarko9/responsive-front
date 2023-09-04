import React from 'react';

import Layout from '@Layout/Layout';
import Location from '@Components/content/locations/Location';

// Locations Component: Represents the page for displaying different locations
const Locations = (): JSX.Element => {
  return (
    <Layout>
      <section className="w-screen mx-auto flex flex-row gap-5 mt-5 py-10 flex-wrap bg-primary justify-center">
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
