import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import { CartProvider } from './context/CartContext';

//components
import App from '../src/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
      <App />
    </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);