import React from 'react';
import { ReactNode } from 'react';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }: { children: ReactNode }): React.ReactElement => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
