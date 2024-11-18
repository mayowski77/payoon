import React from 'react';
import '../styles/Hero.css';
import SpendStatsCard from './SpendStatsCard';
import CreditCard from './CreditCard';
import BalanceCard from './BalanceCard';

const HeroSection = () => (
  <section className="hero">
    <div className="hero-content">
      <div className="hero-badge-container">
        <span className="new-badge">New</span>
        <span className="integration-text">
          You can buy any item with our complete integration
        </span>
      </div>
      <h1 className="hero-title">
        Powering Your Payment
        <br />
        and Management
      </h1>
      <p className="hero-description">
        Freelancer! Get a bank account that pays your taxes, automates your
        savings, and sends you a paycheck.
      </p>
      <div className="cta-container">
        <button className="free-trial-btn">Free trial</button>
        <button className="watch-video-btn">
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="video-icon"
            fill="currentColor"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
          Watch our video
        </button>
      </div>
    </div>
    <div className="hero-bottom">
      <div className="stat-cards">
        <SpendStatsCard />
        <CreditCard />
        <BalanceCard />
      </div>
      <div className="powered-by">
        <span className="powered-text">Powered by</span>
        <div className="partner-logos">
          <img
            src="https://i.postimg.cc/0y1K3Kpf/image-4edf53b2.png"
            alt="Partner Logo 1"
            className="partner-logo"
          />
          <img
            src="https://i.postimg.cc/T3j5X20X/image-889dc8c4.png"
            alt="Partner Logo 2"
            className="partner-logo"
          />
          <img
            src="https://i.postimg.cc/TPRL28N5/image-a525c88d.png"
            alt="Partner Logo 3"
            className="partner-logo"
          />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
