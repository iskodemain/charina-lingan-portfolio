import React, { useContext, useState, useEffect } from 'react';
import '../styles/Contact.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { assets } from '../assets/assets';
import { ProfileContext } from '../context/ProfileContext';

const Contact = () => {
  const { navigate } = useContext(ProfileContext);

  const handleWhatsApp = () => {
    window.open('https://wa.me/1234567890', '_blank');
  };

  const handleEmail = () => {
    window.open('mailto:charinajoylingan@gmail.com', '_blank');
  };

  const handleFacebook = () => {
    window.open('https://www.facebook.com/CharinaLingan23', '_blank');
  };

  return (
    <>
      <Navbar />
      <div className="contact-page">
        
        {/* Hero Title Section */}
        <section className="contact-hero-section">
          <div className="contact-hero-container">
            <h1 className="contact-hero-title">
              Let's make your vision <span className="contact-highlight">visible</span>
            </h1>
          </div>
        </section>

        {/* Three Cards Section */}
        <section className="contact-cards-section">
          <div className="contact-cards-container">
            
            {/* Card 1: Check How We Work */}
            <div 
              className="contact-card contact-card-clickable" 
              onClick={() => navigate('/portfolio')}
            >
              <div className="contact-card-logo">
                <img src={assets.logo} alt="Logo" draggable={false}/>
              </div>
              <h3 className="contact-card-title">Check How We Work</h3>
              <p className="contact-card-description">
                Look through my case studies to see how I turn ideas into high-quality, intentional content. Let's see if my style matches your brand's vision.
              </p>
            </div>

            {/* Card 2: Pick a Package/Service */}
            <div 
              className="contact-card contact-card-clickable" 
              onClick={() => navigate('/services')}
            >
              <div className="contact-card-logo">
                <img src={assets.logo} alt="Logo" draggable={false}/>
              </div>
              <h3 className="contact-card-title">Pick a Package/Service</h3>
              <p className="contact-card-description">
                Explore my tailored packages to find the best support for your current goals and budget.
              </p>
            </div>

            {/* Card 3: Contact Us */}
            <div className="contact-card">
              <div className="contact-card-logo">
                <img src={assets.logo} alt="Logo" draggable={false}/>
              </div>
              <h3 className="contact-card-title bold">Contact Us</h3>
              <p className="contact-card-description">
                Ready to start? Message me via WhatsApp, Messenger, or Email. Let’s talk about your vision and how we can bring it to life.
              </p>
            </div>

          </div>
        </section>

        {/* Contact Methods Section */}
        <section className="contact-methods-section">
          <div className="contact-methods-container">
            
            {/* WhatsApp */}
            <div 
              className="contact-method-item" 
              onClick={handleWhatsApp}
            >
              <div className="contact-method-icon">
                <img src={assets.wcp_icon} alt="WhatsApp" draggable={false}/>
              </div>
              <p className="contact-method-text">Charina Lingan</p>
            </div>

            {/* Email */}
            <div 
              className="contact-method-item" 
              onClick={handleEmail}
            >
              <div className="contact-method-icon">
                <img src={assets.ecp_icon} alt="Email" draggable={false}/>
              </div>
              <p className="contact-method-text">charinajoylingan@gmail.com</p>
            </div>

            {/* Facebook */}
            <div 
              className="contact-method-item" 
              onClick={handleFacebook}
            >
              <div className="contact-method-icon">
                <img src={assets.cpf_icon} alt="Facebook" draggable={false}/>
              </div>
              <div className="contact-method-text-wrapper">
                <p className="contact-method-text contact-method-name">Charina Joy Lingan</p>
                <p className="contact-method-subtext">For immediate inquiries</p>
              </div>
            </div>

          </div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default Contact;