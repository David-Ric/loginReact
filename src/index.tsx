import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Routes/routes';
import Home from './pages/Home';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);


