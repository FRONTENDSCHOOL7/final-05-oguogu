import NotFoundPage from 'pages/404/NotFoundPage';
import HomePage from 'pages/HomePage/HomePage';
import MainLoginPage from 'pages/LoginPage/MainLoginPage';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLoginPage />} />
        <Route path="/*" element={<NotFoundPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
