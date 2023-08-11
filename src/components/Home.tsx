import React from 'react';
import LandingPage from './content/LandingPage';
import StatCards from './content/StatCards';
import ContentOne from './content/ContentOne';
import ContentTwo from './content/ContentTwo';
import ContentThree from './content/ContentThree';
import ContentFAQ from './content/ContentFAQ';
import Footer from './layout/Footer';

const Home = (): JSX.Element => {
  return (
    <div className="relative">
      <LandingPage />
      <StatCards />
      <ContentOne />
      <ContentTwo />
      <ContentThree />
      <ContentFAQ />
      <Footer />
    </div>
  );
};

export default Home;
