import HomePage from 'pages/HomePage/HomePage';
import ChatList from 'pages/ChatPage/ChatList';
import ChatRoom from 'pages/ChatPage/ChatRoom';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/chatlist" element={<ChatList />} />
        <Route path="/chatroom" element={<ChatRoom />} />
      </Routes>
    </BrowserRouter>
  );
}
