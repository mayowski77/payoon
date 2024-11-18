import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Pricing from './components/Pricing/Pricing';
import Footer from './components/Footer/Footer';
import './components/styles/index.css';

const App = () => (
  <div className="app">
    <Header />
    <Hero />
    <Features />
    <Pricing />
    <Footer />
  </div>
);

export default App;