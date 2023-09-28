import React from 'react';

import Layout from '@Layout/Layout';
import Location from '@Components/content/locations/Location';

// Locations Component: Represents the page for displaying different locations
const Locations = (): JSX.Element => {
  return (
    <Layout>
      <section className="baseContainerX baseContainerY flex flex-wrap justify-center bg-primary">
        <Location
          imgSrc={'/images/store/store1.jpg'}
          name={'name'}
          schedule={'09-17h'}
          address={'Serbia'}
        ></Location>
        <Location
          imgSrc={'/images/store/store2.jpg'}
          name={'name'}
          schedule={'09-17h'}
          address={'Romania'}
        ></Location>
        <Location
          imgSrc={'/images/store/store3.jpg'}
          name={'name'}
          schedule={'09-17h'}
          address={'Croatia'}
        ></Location>
      </section>
    </Layout>
  );
};

export default Locations;
