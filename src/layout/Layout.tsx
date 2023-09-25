import React, { ReactNode } from 'react';

import Header from './Header';
import Footer from './Footer';

// Layout Component: Represents the main layout structure of the web page.
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
