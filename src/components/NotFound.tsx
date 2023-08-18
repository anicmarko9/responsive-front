import React from 'react';
import Layout from './layout/Layout';

const NotFound = (): JSX.Element => {
  return (
    <Layout>
      <main className="flex h-screen w-screen flex-col">
        <button className="button my-8 self-center">
          <a href="/">Go back home</a>
        </button>
        <img
          src="/NotFound.svg"
          alt="404 - Page Not Found"
          className="h-auto w-full self-center sm:h-[80%]"
        />
      </main>
    </Layout>
  );
};

export default NotFound;
