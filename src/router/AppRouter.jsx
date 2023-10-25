import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFoundPage from 'pages/404/NotFoundPage';
import HomePage from 'pages/HomePage/HomePage';
import MainLoginPage from 'pages/LoginPage/MainLoginPage';
import ChatListPage from 'pages/ChatPage/ChatListPage';
import ChatRoomPage from 'pages/ChatPage/ChatRoomPage';
import EmailLoginPage from 'pages/LoginPage/EmailLoginPage';
import JoinPage from 'pages/JoinPage/JoinPage';
import UploadPage from 'pages/Upload/UploadPage';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLoginPage />} />
        <Route path="/*" element={<NotFoundPage />} />
        <Route path="/login" element={<EmailLoginPage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/chatlist" element={<ChatListPage />} />
        <Route path="/chatroom" element={<ChatRoomPage />} />
        <Route path="/upload" element={<UploadPage/>} /> 
        <Route path="/profile" element={<ProfileMy/>} />
        <Route path="/home/yourprofile" element={<ProfileYour/>} />
      </Routes>
    </BrowserRouter>
  );
}