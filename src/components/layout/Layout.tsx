import React from 'react';

import Header from './Header';
import Footer from './Footer';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }): React.ReactElement => {
  return (
    <>
      <div className="relative">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
