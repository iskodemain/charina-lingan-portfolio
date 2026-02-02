import React, { useContext, useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Home.css';
import { assets } from '../assets/assets';
import { ProfileContext } from '../context/ProfileContext';
import { IoIosArrowDropdown } from "react-icons/io";

const Home = () => {
  const { navigate } = useContext(ProfileContext);
  
  // Loading state
  const [loading, setLoading] = useState(true);
  
  // Vision slider state
  const [currentVisionIndex, setCurrentVisionIndex] = useState(0);
  const visionImages = [assets.hs_1, assets.hs_2, assets.hs_3];
  
  // Filter dropdown state
  const [selectedFilter, setSelectedFilter] = useState('ALL');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // Portfolio items
  const portfolioItems = [
    { img: assets.ps_1, category: 'PROFESSIONAL SERVICES', name: 'Digital Marketing Agency', description: 'Social Media Management | Visual Designer' },
    { img: assets.ps_2, category: 'PROFESSIONAL SERVICES', name: 'AI-enabled Social Agency', description: 'Content Producer | Video Editor' },
    { img: assets.ps_3, category: 'PROFESSIONAL SERVICES', name: 'Social Media Agency', description: 'Content Producer | Visual Designer' },
    { img: assets.ps_4, category: 'PROFESSIONAL SERVICES', name: 'Commercial Cleaning Property', description: 'Content Producer | Video Editor' },
    { img: assets.ps_5, category: 'PROFESSIONAL SERVICES', name: 'Cleaning Property', description: 'Content Producer | Visual Designer' },
    { img: assets.ps_6, category: 'PROFESSIONAL SERVICES', name: 'Digital Mentorship Platform', description: 'Graphic Design' },
    { img: assets.hr_1, category: 'HOSPITALITY & RENTALS', name: 'Vacation Rentals', description: 'Graphic Designer' },
    { img: assets.hr_2, category: 'HOSPITALITY & RENTALS', name: 'Property Management ', description: 'Content Producer | Visual Design' },
    { img: assets.fc_1, category: 'FAMILY & CARE', name: 'Natural Dog Treats', description: 'Graphic Designer' },
    { img: assets.fc_2, category: 'FAMILY & CARE', name: 'Educational Center', description: 'Social Media Manager | Content Producer | Video Editor' },
    { img: assets.fbs_1, category: 'FOOD & BEVERAGES', name: "Churro Café", description: 'Content Producer | Video Editor' },
    { img: assets.fbs_2, category: 'FOOD & BEVERAGES', name: 'Mexican Coffeehouse', description: 'Content Producer | Video Editor' },
    { img: assets.personality_1, category: 'PERSONALITY', name: 'Media Kit Template', description: 'Graphic Design' },
    { img: assets.personality_2, category: 'PERSONALITY', name: 'CG Artist', description: 'Video Editor' }
  ];

  // Loading animation
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  // Vision slider auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVisionIndex((prev) => (prev + 1) % visionImages.length);
    }, 1500);
    
    return () => clearInterval(interval);
  }, []);

  // Filter portfolio items
  const filteredItems = selectedFilter === 'ALL' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedFilter);

  const filterOptions = [
    'ALL',
    'PROFESSIONAL SERVICES',
    'HOSPITALITY & RENTALS',
    'FAMILY & CARE',
    'FOOD & BEVERAGES',
    'PERSONALITY'
  ];

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <div className="loading-logo">
            <img src={assets.logo} alt="Logo" />
          </div>
          <div className="loading-bar">
            <div className="loading-progress"></div>
          </div>
          <p className="loading-text">Loading Amazing Work...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="home-page">
        
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-container">
            <div className="hero-content">
              <h1 className="hero-title">
                Helping brands show <br/>
                their <span className="highlight">vision...</span>
              </h1>
              <p className="hero-subtitle">
                I'm a passionate designer crafting compelling visual narratives that elevate brands and connect with audiences.
              </p>
              <div className="hero-buttons">
                <button className="btn-primary" onClick={() => navigate('/contact')}>
                  Work with me!
                </button>
                <button className="btn-secondary" onClick={() => navigate('/services')}>
                  Check Services
                </button>
              </div>
            </div>
            <div className="hero-image">
              <div className="profile-container">
                <img src={assets.profile} alt="Profile" />
                <div className="profile-tag tag-1">
                  <span>⭐</span> Great Designs
                </div>
                <div className="profile-tag tag-2">
                  <span>🎨</span> Art
                </div>
                <div className="profile-tag tag-3">
                  <span>✨</span> Charina Lingan
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visions Section */}
        <section className="visions-section">
          <h2 className="section-title">SEE THE VISIONS I BROUGHT TO LIFE</h2>
          <div className="visions-slider">
            <div className="vision-card" onClick={() => navigate('/portfolio')}>
              <img src={visionImages[currentVisionIndex]} alt="Vision" />
            </div>
            <div className="slider-dots">
              {visionImages.map((_, index) => (
                <span 
                  key={index} 
                  className={`dot ${index === currentVisionIndex ? 'active' : ''}`}
                  onClick={() => setCurrentVisionIndex(index)}
                ></span>
              ))}
            </div>
          </div>
        </section>

        {/* Brands Section */}
        <section className="brands-section">
          <h2 className="section-title">BRANDS I'VE WORKED WITH</h2>
          <div className="brands-carousel">
            <div className="brands-track">
              <img src={assets.brand_1} alt="Brand 1" />
              <img src={assets.brand_2} alt="Brand 2" />
              <img src={assets.brand_3} alt="Brand 3" />
              <img src={assets.brand_4} alt="Brand 4" />
              <img src={assets.brand_5} alt="Brand 5" />
              {/* Duplicate for seamless loop */}
              <img src={assets.brand_1} alt="Brand 1" />
              <img src={assets.brand_2} alt="Brand 2" />
              <img src={assets.brand_3} alt="Brand 3" />
              <img src={assets.brand_4} alt="Brand 4" />
              <img src={assets.brand_5} alt="Brand 5" />
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="portfolio-section">
          <div className="filter-dropdown">
            <button 
              className="dropdown-toggle" 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              {selectedFilter}
              <IoIosArrowDropdown className={`dropdown-icon ${isDropdownOpen ? 'open' : ''}`} />
            </button>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                {filterOptions.map((option) => (
                  <div
                    key={option}
                    className={`dropdown-item ${selectedFilter === option ? 'active' : ''}`}
                    onClick={() => {
                      setSelectedFilter(option);
                      setIsDropdownOpen(false);
                    }}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="portfolio-grid">
            {filteredItems.map((item, index) => (
              <div key={index} className="portfolio-card" onClick={() => navigate('/portfolio')}>
                <div className="portfolio-image-wrapper">
                  <img src={item.img} alt={item.name} />
                  <div className="portfolio-overlay">
                    <img src={assets.logo} alt="Logo" className="overlay-logo" />
                  </div>
                </div>
                <div className='portfolio-info'>
                  <p className="portfolio-name">{item.name}</p>
                  <p className="portfolio-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials-section">
          <h2 className="section-title">A PEAK AT THE LOVE FROM MY CLIENTS</h2>
          <div className="testimonials-carousel">
            <div className="testimonials-track">
              <div className="testimonial-card">
                <img src={assets.testimonial_1} alt="Testimonial 1" />
              </div>
              <div className="testimonial-card">
                <img src={assets.testimonial_2} alt="Testimonial 2" />
              </div>
              <div className="testimonial-card">
                <img src={assets.testimonial_3} alt="Testimonial 3" />
              </div>
              {/* Duplicate for seamless loop */}
              <div className="testimonial-card">
                <img src={assets.testimonial_1} alt="Testimonial 1" />
              </div>
              <div className="testimonial-card">
                <img src={assets.testimonial_2} alt="Testimonial 2" />
              </div>
              <div className="testimonial-card">
                <img src={assets.testimonial_3} alt="Testimonial 3" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <h2 className="hcta-title">
            Build Your Vision With Me
          </h2>
          <button className="hbtn-cta" onClick={() => navigate('/contact')}>
            Work with me!
          </button>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default Home;