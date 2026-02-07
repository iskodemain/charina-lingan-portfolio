import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { ProfileContext } from '../context/ProfileContext';
import '../styles/Footer.css';

const Footer = () => {
  const { navigate } = useContext(ProfileContext);

  const handleSocialClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-social">
          <div 
            className="social-icon" 
            onClick={() => handleSocialClick('https://www.facebook.com/CharinaLingan23')}
          >
            <img src={assets.facebook} alt="Facebook" draggable={false}/>
          </div>
          <div 
            className="social-icon logo-icon" 
            onClick={() => navigate('/')}
          >
            <img src={assets.logo} alt="Logo" draggable={false}/>
          </div>
          <div 
            className="social-icon" 
            onClick={() => handleSocialClick('https://www.linkedin.com/in/charinajoylingan/')}
          >
            <img src={assets.linkedin} alt="LinkedIn" draggable={false}/>
          </div>
        </div>
        <div className="footer-copyright">
          <p>© 2026 by Charina Lingan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;