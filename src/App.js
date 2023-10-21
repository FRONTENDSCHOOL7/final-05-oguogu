import NotFoundPage from 'pages/404/NotFoundPage';
import MainLoginPage from 'pages/LoginPage/MainLoginPage';
import SplashPage  from 'pages/SplashPage/SplashPage';
import React, { useEffect, useState } from 'react';
import AppRouter from 'router/AppRouter';
import GlobalStyle from 'style/GlobalStyle';

export default function App() {
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setLoading(false);
    },2500);
  
    return () => clearTimeout(timer);
  },loading)

  return (
    <>
      <GlobalStyle />
      {/* <AppRouter /> */}
      {/* <MainLoginPage></MainLoginPage> */}
      {/* <SplashPage></SplashPage> */}
      {/* <NotFoundPage></NotFoundPage> */}
      {loading ? <SplashPage /> : <AppRouter />}
      
    </>
  );
}
