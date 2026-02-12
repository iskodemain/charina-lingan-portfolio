import React from 'react';
import '../styles/Services.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { SiAboutdotme } from 'react-icons/si';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Social Media Management',
      items: [
        'Strategy & content planning',
        'Content Production',
        'Visual Design',
        'Post scheduling & publishing',
        'Community management',
        'Analytics & reporting',
        'Campaign & launch support'
      ]
    },
    {
      id: 2,
      title: 'Video Editing',
      items: [
        'Short & long-form video editing',
        'Social media-optimized cuts',
        'Motion graphics & captions',
        'Audio & color enhancement',
        'Content repurposing & cut-downs',
        'Brand-consistent editing'
      ]
    },
    {
      id: 3,
      title: 'Graphic Design',
      items: [
        'Brand & visual identity',
        'Digital & social media design',
        'Marketing & campaign assets',
        'Print & promotional materials'
      ]
    },
    {
      id: 4,
      title: 'Content Production',
      items: [
        'Content strategy & creative direction',
        'Video & photo production',
        'Editing & post-production',
        'Platform-optimized content',
        'Repurposing & asset delivery'
      ]
    }
  ];

  return (
    <>
      <Navbar />
      <div className="services-page">
        {/* Hero Section */}
        <section className="services-hero">
          <h1 className="services-hero-title">SERVICES</h1>
        </section>

        {/* Services Grid */}
        <section className="services-grid-section">
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <h2 className="service-card-title">{service.title}</h2>
                <ul className="service-card-list">
                  {service.items.map((item, index) => (
                    <li key={index} className="service-card-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="services-cta">
          <h2 className="services-cta-title">READY TO BUILD TOGETHER?</h2>
          <button className="services-cta-button">Work with me!</button>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Services;