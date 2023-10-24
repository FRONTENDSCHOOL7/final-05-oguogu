import NotFoundPage from 'pages/404/NotFoundPage';
import HomePage from 'pages/HomePage/HomePage';
import MainLoginPage from 'pages/LoginPage/MainLoginPage';
import ChatList from 'pages/ChatPage/ChatList';
import ChatRoom from 'pages/ChatPage/ChatRoom';
import JoinPage from 'pages/LoginPage/EmailLoginPage'
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UploadPage from 'pages/Upload/UploadPage';
import { EmailLogin } from 'pages/LoginPage/MainLoginPage.style';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLoginPage />} />
        <Route path="/*" element={<NotFoundPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/chatlist" element={<ChatList />} />
        <Route path="/chatroom" element={<ChatRoom />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/login" element={<EmailLogin />} />
        <Route path="/join" element={<JoinPage/>} />
      </Routes>
    </BrowserRouter>
  );
}
