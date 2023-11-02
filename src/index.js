import React from 'react';
import ReactDOM from 'react-dom/client';
import 'style/index.css';
import App from 'App';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient}>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </QueryClientProvider>

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);
