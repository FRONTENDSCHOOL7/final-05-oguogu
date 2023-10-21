import HomePage from 'pages/HomePage/HomePage';
import React from 'react';
import AppRouter from 'router/AppRouter';
import GlobalStyle from 'style/GlobalStyle';
import ChatPage from 'pages/ChatPage/ChatPage';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <AppRouter />
      <ChatPage />
    </>
  );
}
