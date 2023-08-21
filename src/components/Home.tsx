import React from 'react';

import LandingPage from './content/LandingPage';
import StatCards from './content/StatCards';
import ContentOne from './content/ContentOne';
import ContentTwo from './content/ContentTwo';
import ContentThree from './content/ContentThree';
import ContentFAQ from './content/ContentFAQ';
import Layout from './layout/Layout';

// Home Component: Represents the home page of the website
const Home = (): JSX.Element => {
  return (
     // Using the Layout component to structure the page
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
