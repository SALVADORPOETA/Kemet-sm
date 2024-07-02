import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Egypt from './routes/Egypt';
import Products from './routes/Products';
import Contact from './routes/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='/egypt' element={<Egypt />}></Route>
      <Route path='/products' element={<Products />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
    </Routes>
  </BrowserRouter>
);

