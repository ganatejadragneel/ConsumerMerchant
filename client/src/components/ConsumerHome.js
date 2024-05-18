import React from 'react';
import './ConsumerHome.css';

const ConsumerHome = () => {
  return (
    <div className="consumer-home-container">
      <h1 className="consumer-home-title">Welcome, Consumer!</h1>
      <p className="consumer-home-description">
        Explore products and make purchases.
      </p>
      <div className="consumer-home-actions">
        <button className="consumer-home-button">Browse Products</button>
        <button className="consumer-home-button">View Cart</button>
      </div>
    </div>
  );
};

export default ConsumerHome;