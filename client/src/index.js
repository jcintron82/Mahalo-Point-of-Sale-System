import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RouteSwitch from './routes/routeswitch.js';

// import RouteSwitch from './routes/routeswitch';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouteSwitch />
  </React.StrictMode>
);


