import React from 'react';
import './MerchantHome.css';

const MerchantHome = () => {
  return (
    <div className="merchant-home-container">
      <h1 className="merchant-home-title">Welcome, Merchant!</h1>
      <p className="merchant-home-description">
        Manage your products and orders here.
      </p>
      <div className="merchant-home-actions">
        <button className="merchant-home-button">Manage Products</button>
        <button className="merchant-home-button">View Orders</button>
      </div>
    </div>
  );
};

export default MerchantHome;