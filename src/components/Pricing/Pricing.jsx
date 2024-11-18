import React, { useState } from 'react';
import '../styles/Pricing.css';

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  // Calculate prices based on billing cycle
  const calculatePrice = (basePrice) => {
    return isYearly ? Math.round(basePrice * 12 * 0.5) : basePrice;
  };

  return (
    <section className="pricing-section">
      <div className="pricing-header">
        <h2 className="pricing-title">Select your Account Plans</h2>
        <p className="pricing-subtitle">
          The higher the plans you use, the more benefits
        </p>

        <div className="pricing-toggle">
          <span className="toggle-text">Monthly</span>
          <button
            className={`toggle-switch ${isYearly ? "yearly" : "monthly"}`}
            onClick={() => setIsYearly(!isYearly)}
          >
            <span className="toggle-slider"></span>
          </button>
          <span className="toggle-text">Yearly - Save 50%</span>
        </div>
      </div>

      <div className="pricing-cards">
        <div className="price-card">
          <div className="price-card-header">
            <h3 className="plan-name">FREE PLAN</h3>
            <div className="plan-price">N{calculatePrice(0)}</div>
          </div>
          <ul className="price-features">
            <li className="price-feature">
              <span className="feature-check"></span>
              Automatic tax withholding
            </li>
            <li className="price-feature">
              <span className="feature-check"></span>
              Fee-free salary transfers
            </li>
            <li className="price-feature">
              <span className="feature-check"></span>
              Instantly active virtual debit card
            </li>
            <li className="price-feature">
              <span className="feature-check"></span>
              Unlimited payments & transfers
            </li>
            <li className="price-feature">
              <span className="feature-check"></span>
              Fee-free ATM deposits
            </li>
            <li className="price-feature">
              <span className="feature-check"></span>
              Government-insured FDIC bank
            </li>
          </ul>
          <button className="price-button secondary">Go to Free Plan</button>
        </div>

        <div className="price-card highlighted">
          <div className="price-card-header">
            <h3 className="plan-name">PAYOON PRO</h3>
            <div className="plan-price">N{calculatePrice(20000)}</div>
            {isYearly && <div className="yearly-savings">50% OFF</div>}
          </div>
          <ul className="price-features">
            <li className="price-feature">
              <span className="feature-check"></span>
              24/7 support
            </li>
            <li className="price-feature">
              <span className="feature-check"></span>
              Unlimited accounting reports
            </li>
            <li className="price-feature">
              <span className="feature-check"></span>
              Everything in free
            </li>
            <li className="price-feature">
              <span className="feature-check"></span>
              Unlimited payments & transfers
            </li>
            <li className="price-feature">
              <span className="feature-check"></span>
              Automatic tax payment
            </li>
            <li className="price-feature">
              <span className="feature-check"></span>
              Automatic fee-free salary transfers
            </li>
          </ul>
          <button className="price-button secondary">Go to Payoon Pro</button>
        </div>

        <div className="price-card">
          <div className="price-card-header">
            <h3 className="plan-name">PAYOON UNLIMITED</h3>
            <div className="plan-price">N{calculatePrice(50000)}</div>
            {isYearly && <div className="yearly-savings">50% OFF</div>}
          </div>
          <ul className="price-features">
            <li className="price-feature">
              <span className="feature-check"></span>
              Free plan
            </li>
            <li className="price-feature">
              <span className="feature-check"></span>
              Pro Plan
            </li>
            <li className="price-feature">
              <span className="feature-check"></span>
              Export your Schedule C
            </li>
            <li className="price-feature">
              <span className="feature-check"></span>
              Unlimited payments & transfers
            </li>
            <li className="price-feature">
              <span className="feature-check"></span>
              All features free
            </li>
            <li className="price-feature">
              <span className="feature-check"></span>
              One month free tax consultant
            </li>
          </ul>
          <button className="price-button secondary">
            Go to Payoon Unlimited
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;