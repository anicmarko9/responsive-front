import React, { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useOverlayScrollbars } from 'overlayscrollbars-react';

import NotFound from '@/pages/NotFound';
import Home from '@Pages/Home';
import Locations from '@Pages/Locations';
import AboutUs from '@Pages/AboutUs';
import WeightLossProgram from '@Pages/WeightLossProgram';
import Shop from '@Pages/Shop';
import Subscription from '@Pages/Subscription';
import Stories from '@Pages/Stories';
import Blog from '@Pages/Blog';
import Booking from '@Pages/Booking';

function App(): JSX.Element {
  const [initBodyOverlayScrollbars] = useOverlayScrollbars({
    defer: true,

    options: {
      scrollbars: {
        theme: 'os-theme-dark',
        autoHide: 'scroll',
        clickScroll: true,
        pointers: ['mouse', 'pen', 'touch'],
      },
    },
  });

  useEffect(() => {
    initBodyOverlayScrollbars(document.body);
  }, [initBodyOverlayScrollbars]);

  return (
    <div className="relative font-heebo">
      <BrowserRouter>
        <Routes>
          <Route path="/not-found" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/weight-loss" element={<WeightLossProgram />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/bookings" element={<Booking />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
