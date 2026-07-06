import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/global.css';

console.info(
  '%cVeritas Legal — sitio original · build-id: VL-2026-ORIGINAL',
  'color:#76ABAE;background:#222831;padding:6px 12px;border-radius:6px;'
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
