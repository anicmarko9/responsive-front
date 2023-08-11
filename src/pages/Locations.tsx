import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Layout from '../components/layout/Layout';

const Locations = (): JSX.Element => {
  return (
    <Layout>
      <div className="yellowBlock"></div>

      <Header />
      <div className="mt-10 h-[200px] px-5 text-center">
        THIS IS LOCATIONS PAGE
        <h1>IM DOING SOMETHING</h1>
      </div>
      <Footer />
    </Layout>
  );
};

export default Locations;
