import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from '@Components/Home';
import NotFound from '@Components/NotFound';
import Locations from '@Pages/Locations';
import AboutUs from '@Pages/AboutUs';
import WeightLossProgram from '@Pages/WeightLossProgram';

function App(): JSX.Element {
  return (
    <div className="font-libre-baskerville relative">
      <BrowserRouter>
        <Routes>
          <Route path="/not-found" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/weight-loss" element={<WeightLossProgram />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
