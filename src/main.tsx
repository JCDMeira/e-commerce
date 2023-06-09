import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ProductContextProvider } from './contexts/useProductConsumer.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ProductContextProvider>
      <App />
    </ProductContextProvider>
  </React.StrictMode>,
);
