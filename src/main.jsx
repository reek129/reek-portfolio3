import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
// const root = ReactDOM.createRoot(rootElement);
const root = createRoot(rootElement);

// // Fix scroll-blocking event warnings
// window.addEventListener(
//   "wheel",
//   () => {},
//   { passive: true }
// );

// window.addEventListener(
//   "touchmove",
//   () => {},
//   { passive: true }
// );

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
