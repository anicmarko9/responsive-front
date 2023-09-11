import React from 'react';

import Layout from '@Layout/Layout';
import BookOnline from '@Components/content/booking/BookOnline';

const Booking = (): JSX.Element => {
  return (
    <Layout>
      <section className="mx-auto mt-3 flex w-screen flex-col flex-wrap gap-5 bg-primary px-4 py-10 md:px-16 lg:px-32 xl:px-56">
        <BookOnline />
      </section>
    </Layout>
  );
};

export default Booking;
