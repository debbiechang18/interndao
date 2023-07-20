import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import "./App.css"
import App from './App';
import "./assets/grid-background.svg"
import ScrollToTop from "./functions/ScrollToTop"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

