import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/index.css'

import Index from './Pages/Inicio/index';
import Login from './Pages/Login/login';
import Register from './Pages/Registro/register';
import Mapa from './Pages/Mapa/mapa';
import Perfil from './Pages/Perfil/perfil';

import { BrowserRouter, Route, Routes } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/registrarse" element={<Register/>} />
        <Route path="/mapa" element={<Mapa/>} />
        <Route path="/perfil" element={<Perfil/>} />
  </Routes>    
  </BrowserRouter>
  </React.StrictMode>
);
