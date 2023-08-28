import React from 'react';
import Location from '@/components/Locations/Location';
import Layout from '@Components/layout/Layout';
// Locations Component: Represents the page for displaying different locations
const Locations = (): JSX.Element => {
  return (
    <Layout>
      <section className="w-screen mx-auto flex flex-row gap-5 mt-5 py-10 flex-wrap bg-primary justify-center w-5/6">
        <Location
          imgSrc={'../Stores/store1.jpg'}
          name={'name'}
          schedule={'09-17h'}
          address={'Some address 122'}
        ></Location>
        <Location
          imgSrc={'../Stores/store2.jpg'}
          name={'name'}
          schedule={'09-17h'}
          address={'Some address 122'}
        ></Location>
        <Location
          imgSrc={'../Stores/store3.jpg'}
          name={'name'}
          schedule={'09-17h'}
          address={'Some address 122'}
        ></Location>
      </section>
    </Layout>
  );
};

export default Locations;
