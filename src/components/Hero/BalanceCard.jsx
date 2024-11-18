import React from 'react';

const BalanceCard = () => (
  <div className="stat-card balance-card">
    <h3 className="card-title">YOUR BALANCE</h3>
    <div className="balance-amount">N128,000.00</div>
    <div className="income-container">
      <div className="income-label">
        <div className="income-icon"></div>
        <span className="income-text">Average Income</span>
      </div>
      <p className="income-amount">N80,000.00</p>
    </div>
  </div>
);

export default BalanceCard;