import React from 'react';

import LandingPage from './content/LandingPage';
import Layout from './layout/Layout';

// Lazy loading components to improve performance
const LazyCards = React.lazy(() => import('./content/StatCards'));
const LazyContentOne = React.lazy(() => import('./content/ContentOne'));
const LazyContentTwo = React.lazy(() => import('./content/ContentTwo'));
const LazyContentThree = React.lazy(() => import('./content/ContentThree'));
const LazyContentFAQ = React.lazy(() => import('./content/ContentFAQ'));
// Home Component: Represents the home page of the website
// Updating to a functional component
function Home() {
  return (
    // Using the Layout component to structure the page
    <Layout>
      <LandingPage />
      <LazyCards />
      <LazyContentOne />
      <LazyContentTwo />
      <LazyContentThree />
      <LazyContentFAQ />
    </Layout>
  );
}

export default Home;
