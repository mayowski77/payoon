import React from 'react';
import '../styles/Features.css'; // Assuming you have a separate CSS file

const Features = () => (
  <section className="features-section">
    <h2 className="features-title">
      Payoon is an intuitive business bank account
      <br />
      designed for <span className="freelancers-highlight">freelancers.</span>
    </h2>
    <div className="features-grid">
      <div className="feature-card">
        <div className="feature-icon orange"></div>
        <div className="feature-content">
          <h3 className="feature-title">Transfer your salary</h3>
          <p className="feature-description">
            Take control of your earnings! Easily transfer and manage your salary with flexible options tailored for freelancers.
          </p>
        </div>
      </div>
      <div className="feature-card">
        <div className="feature-icon cyan"></div>
        <div className="feature-content">
          <h3 className="feature-title">Never miss a deduction</h3>
          <p className="feature-description">
            Automated tax tracking and deduction management ensures you stay compliant and avoid unexpected financial surprises.
          </p>
        </div>
      </div>
      <div className="feature-card">
        <div className="feature-icon green"></div>
        <div className="feature-content">
          <h3 className="feature-title">Budget your savings</h3>
          <p className="feature-description">
            Set smart savings goals and track your progress with intelligent budgeting tools designed for financial freedom.
          </p>
        </div>
      </div>
      <div className="feature-card">
        <div className="feature-icon purple"></div>
        <div className="feature-content">
          <h3 className="feature-title">Pay your taxes</h3>
          <p className="feature-description">
            Simplify tax payments with automated calculations and scheduled contributions to your tax fund.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Features;