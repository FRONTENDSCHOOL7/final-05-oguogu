import React from 'react';
import ReactDOM from 'react-dom/client';
import 'style/index.css';
import App from 'App';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);
