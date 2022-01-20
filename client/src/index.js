import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { StoreCartProvider } from './contexts/StoresCartContext';
import { UserProvider } from './contexts/UserContext';

const container = document.getElementById('root');

// create root
const root = ReactDOM.createRoot(container);

root.render(
  // <React.StrictMode> disable for React 18 RC
  <BrowserRouter>
    <StoreCartProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </StoreCartProvider>
  </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
