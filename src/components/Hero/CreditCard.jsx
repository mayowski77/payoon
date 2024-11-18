import React from 'react';

const CreditCard = () => (
  <div className="stat-card credit-card">
    <p className="card-label">Cardholder name</p>
    <h3 className="card-name">MALIQ QUEEN</h3>
    <div className="card-number">
      {[1, 2, 3, 4].map((group) => (
        <div key={group} className="number-group">
          {[1, 2, 3, 4].map((dot) => (
            <div key={dot} className="dot"></div>
          ))}
        </div>
      ))}
      <span>4567</span>
    </div>
    <p className="valid-till">Valid till 03/2027</p>
  </div>
);

export default CreditCard;