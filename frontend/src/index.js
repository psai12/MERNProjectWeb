import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Home } from './Pages/Home/Home.js';
import Cones from './Pages/Cones/Cones.js';
import Cakes from './Pages/Cakes/Cakes.js';
import Catering from './Pages/Catering/Catering.js';
import Register from './Pages/Register/Register.js';
import Login from './Pages/Login/Login.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Cones' element={<Cones/>} />
          <Route path='/Cakes' element={<Cakes/>} />
          <Route path='/Catering' element={<Catering/>} />
          <Route path='/Register' element={<Register/>} />
          <Route path='/Login' element={<Login/>} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


