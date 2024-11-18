import React from 'react';
import '../styles/Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-brand">
        <div className="footer-logo">
          <img
            src="https://i.postimg.cc/BQ2jTYHQ/image-83095c31.png"
            alt="Payoon Footer Logo"
            className="footer-logo-circle"
          />
          <span className="footer-logo-text">PAYOON</span>
        </div>
        <p className="footer-description">
          Streamline your project management with intuitive team collaboration tools designed to boost productivity and efficiency.
        </p>
        <div className="footer-social">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img
              src="https://i.postimg.cc/RC66FV0t/image-9e7e1f4d.png"
              alt="LinkedIn"
              className="social-icon-linkedin"
            />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img
              src="https://i.postimg.cc/44DKhkKS/image-e49ed31b.png"
              alt="Facebook"
              className="social-icon-facebook"
            />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img
              src="https://i.postimg.cc/CxYzmGsC/image-4c5429d.png"
              alt="Instagram"
              className="social-icon-instagram"
            />
          </a>
        </div>
      </div>
      <div className="footer-column">
        <h3 className="footer-title">Product</h3>
        <div className="footer-links">
          <a href="#features" className="footer-link">Features</a>
          <a href="#services" className="footer-link">Services</a>
          <a href="#pricing" className="footer-link">Pricing</a>
          <a href="#how-it-works" className="footer-link">How it Works</a>
          <a href="#demo" className="footer-link">Live Demo</a>
        </div>
      </div>
      <div className="footer-column">
        <h3 className="footer-title">Resources</h3>
        <div className="footer-links">
          <a href="#gallery" className="footer-link">Gallery</a>
          <a href="#docs" className="footer-link">Documentation</a>
          <a href="#blog" className="footer-link">Blogs</a>
        </div>
      </div>
      <div className="footer-column">
        <h3 className="footer-title">Legals</h3>
        <div className="footer-links">
          <a href="#privacy" className="footer-link">Privacy Policy</a>
          <a href="#copyright" className="footer-link">Copyright</a>
          <a href="#disclaimer" className="footer-link">Disclaimer</a>
          <a href="#terms" className="footer-link">Terms</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;