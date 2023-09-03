import React, { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from '@Components/Home';
import NotFound from '@Components/NotFound';
import Locations from '@Pages/Locations';
import AboutUs from '@Pages/AboutUs';
import WeightLossProgram from '@Pages/WeightLossProgram';
import Shop from '@Pages/Shop';
import { useOverlayScrollbars } from 'overlayscrollbars-react';

function App(): JSX.Element {
  const [initBodyOverlayScrollbars] = useOverlayScrollbars({
    defer: true,

    options: {
      scrollbars: {
        theme: 'os-theme-dark',
      },
    },
  });

  useEffect(() => {
    initBodyOverlayScrollbars(document.body);
  }, [initBodyOverlayScrollbars]);

  return (
    <div className="font-heebo relative">
      <BrowserRouter>
        <Routes>
          <Route path="/not-found" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/weight-loss" element={<WeightLossProgram />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
