
import React, { useState } from 'react';
import ProductList from './ProductList';
import './styles/App.css';
import AboutUs from './components/AboutUs';

function App() {
  
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  const handleHomeClick = () => {
    setShowProductList(false);
  };

  return (
    <div className="app-container">
      <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
        <div className="background-image"></div>
        <div className="content">
          <div className="landing_content">
          <h1>Welcome To Green Haven Plants</h1>
            <div className="divider"></div>
            <p>Your Oasis of Green Living</p>
            <button className="get-started-button" onClick={handleGetStartedClick}>
              Get Started
            </button>
          </div>
          <div className="aboutus_container">
          <AboutUs/>
          </div>
        </div>
      </div>
      <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
        <ProductList onHomeClick={handleHomeClick}/>
      </div>
    </div>
  );
}

export default App;



