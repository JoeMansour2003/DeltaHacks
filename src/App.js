import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Cart from './pages/Cart';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App( {Component, pageProps} ) {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
}

export default App;
