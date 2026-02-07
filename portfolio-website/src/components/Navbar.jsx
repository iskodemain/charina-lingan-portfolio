import React, { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ProfileContext } from '../context/ProfileContext';
import { assets } from '../assets/assets';
import '../styles/Navbar.css';
import { HiMenuAlt3 } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';

const Navbar = () => {
  const { navigate } = useContext(ProfileContext);
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const activeLink = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => handleNavigation('/')}>
          <img src={assets.logo} alt="Logo" />
        </div>

        <ul className={`navbar-menu ${isMobileMenuOpen ? 'mobile-menu-active' : ''}`}>
          <li className={activeLink === '/' ? 'active' : ''}>
            <a onClick={() => handleNavigation('/')}>Home</a>
          </li>
          <li className={activeLink === '/about' ? 'active' : ''}>
            <a onClick={() => handleNavigation('/about')}>About</a>
          </li>
          <li className={activeLink === '/contact' ? 'active' : ''}>
            <a onClick={() => handleNavigation('/contact')}>Contact</a>
          </li>
          <li className={activeLink === '/portfolio' ? 'active' : ''}>
            <a onClick={() => handleNavigation('/portfolio')}>Portfolio</a>
          </li>
          <li className={activeLink === '/services' ? 'active' : ''}>
            <a onClick={() => handleNavigation('/services')}>Services</a>
          </li>

          {isMobileMenuOpen && (
            <button className="mobile-close-btn" onClick={toggleMobileMenu}>
              <IoClose />
            </button>
          )}
        </ul>

        {!isMobileMenuOpen && 
            <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
            <HiMenuAlt3 />
          </button>
        }
      </div>
    </nav>
  );
};

export default Navbar;