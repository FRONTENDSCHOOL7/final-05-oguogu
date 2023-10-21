import HomePage from 'pages/HomePage/HomePage';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
