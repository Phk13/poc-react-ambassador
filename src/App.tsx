import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductsFrontend from './pages/ProductsFrontend';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Stats from './pages/Stats';
import Rankings from './pages/Rankings';
import ProductsBackend from './pages/ProductsBackend';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<ProductsFrontend />} />
        <Route path={'/backend'} element={<ProductsBackend />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/register'} element={<Register />} />
        <Route path={'/profile'} element={<Profile />} />
        <Route path={'/stats'} element={<Stats />} />
        <Route path={'/rankings'} element={<Rankings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
