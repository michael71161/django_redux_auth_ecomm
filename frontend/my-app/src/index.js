import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Newview from './app/Newview';
import Apptest from './app/Apptest';
import Testview from './app/Testview';
import Login from './app/Login';
import Product from './app/Product';
import ImageUpld from './app/ImageUpld';
import Zhopa from './app/Zhopa';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter>
        <Provider store={store}>
            <Routes>
                <Route path="/" element={<Apptest/>}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/products" element={<Product />} />
                    <Route path="/testview" element={<Testview />} />
                    <Route path="/newview" element={<Newview/>} />
                    <Route path="/imageupload" element={<ImageUpld/>} />
                    <Route path="/zhopa" element={<Zhopa/>} />
                        
                    
                </Route>
            </Routes>
        </Provider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
