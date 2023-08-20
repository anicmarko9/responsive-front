import React from 'react';

import LandingPage from './content/LandingPage';
import StatCards from './content/StatCards';
import ContentOne from './content/ContentOne';
import ContentTwo from './content/ContentTwo';
import ContentThree from './content/ContentThree';
import ContentFAQ from './content/ContentFAQ';
import Layout from './layout/Layout';

const Home = (): JSX.Element => {
  return (
    <Layout>
      <LandingPage />
      <StatCards />
      <ContentOne />
      <ContentTwo />
      <ContentThree />
      <ContentFAQ />
    </Layout>
  );
};

export default Home;
