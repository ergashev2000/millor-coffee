import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './style/index.scss';
import App from './App';
import Context from './components/Context';
import ScrollToTop from './components/ScrollToTop';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Context>
        <ScrollToTop />
        <App />
      </Context>
    </BrowserRouter>
  </React.StrictMode>
);

