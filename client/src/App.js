import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import MerchantHome from './components/MerchantHome';
import ConsumerHome from './components/ConsumerHome';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <nav className="menu-bar">
          <div className="menu-left">
            <Link to="/" className="menu-item">Home</Link>
          </div>
          <div className="menu-right">
            <Link to="/login" className="menu-item">Login</Link>
            <Link to="/signup" className="menu-item">Signup</Link>
          </div>
        </nav>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/merchant" element={<MerchantHome />} />
          <Route path="/consumer" element={<ConsumerHome />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;