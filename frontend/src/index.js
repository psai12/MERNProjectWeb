import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Home } from './Pages/Home/Home.js';
import Cones from './Pages/Cones/Cones.js';
import Cakes from './Pages/Cakes/Cakes.js';
import Catering from './Pages/Catering/Catering.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Cones' element={<Cones/>} />
          <Route path='/Cakes' element={<Cakes/>} />
          <Route path='/Catering' element={<Catering/>} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


