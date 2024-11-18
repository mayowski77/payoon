import React from 'react';
import '../styles/Header.css';

const Header = () => (
  <header className="header">
    <div className="logo-container">
      <img
        src="https://i.postimg.cc/BQ2jTYHQ/image-83095c31.png"
        alt="Payoon Logo"
        className="logo-circle"
      />
      <span className="logo-text">PAYOON</span>
    </div>
    <nav className="nav">
      <ul className="nav-list">
        <li>
          <button className="nav-link" onClick={() => alert('Our Features clicked!')}>
            Our Features
          </button>
        </li>
        <li>
          <button className="nav-link" onClick={() => alert('Pricing clicked!')}>
            Pricing
          </button>
        </li>
        <li>
          <button className="nav-link" onClick={() => alert('About Us clicked!')}>
            About Us
          </button>
        </li>
      </ul>
      <button className="sign-up-btn">Sign Up</button>
    </nav>
  </header>
);

export default Header; 