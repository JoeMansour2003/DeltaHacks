import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Cart from './pages/Cart';
import Property from './pages/Marketplace';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App( {Component, pageProps} ) {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/marketplace" component={Property} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
}

export default App;
