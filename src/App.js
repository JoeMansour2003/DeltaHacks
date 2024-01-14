import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Cart from './pages/Cart';
import Marketplace from './pages/Marketplace';
import Login from './pages/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App( {Component, pageProps} ) {
  return (
    <Router>
      <Routes>
        <Route path="/marketplace" element={<Navbar />} />
        <Route path="/cart" element={<Navbar />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
