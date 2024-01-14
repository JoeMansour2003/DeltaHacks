import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Cart from './pages/Cart';
import Marketplace from './pages/Marketplace';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App( {Component, pageProps} ) {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Marketplace />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
