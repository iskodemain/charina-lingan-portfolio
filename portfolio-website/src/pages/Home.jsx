import React, { useContext, useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Home.css';
import { assets } from '../assets/assets';
import { ProfileContext } from '../context/ProfileContext';
import { IoIosArrowDropdown, IoMdClose } from "react-icons/io";
import { MdOutlineKeyboardArrowLeft, MdKeyboardArrowRight  } from "react-icons/md";

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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  // Detail modal state
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedDetailItem, setSelectedDetailItem] = useState(null);
  const [currentDetailIndex, setCurrentDetailIndex] = useState(0);
  
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
    { img: assets.personality_2, category: 'PERSONALITY', name: 'CG Artist', description: 'Video Editor' },
    { img: assets.personality_3, category: 'PERSONALITY', name: 'Professional Singer', description: 'Social Media Manager | Graphic Designer | Video Editor' }
  ];

  // Portfolio galleries - easily expandable for other portfolios
  const portfolioGalleries = {
    'Digital Marketing Agency': [
      { src: assets.dma_1, alt: 'DMA 1' },
      { src: assets.dma_2, alt: 'DMA 2' },
      { src: assets.dma_3, alt: 'DMA 3' },
      { src: assets.dma_4, alt: 'DMA 4' },
      { src: assets.dma_5, alt: 'DMA 5' },
      { src: assets.dma_6, alt: 'DMA 6' },
      { src: assets.dma_7, alt: 'DMA 7' },
      { src: assets.dma_8, alt: 'DMA 8' },
      { src: assets.dma_9, alt: 'DMA 9' }
    ],
    // Add more portfolios here in the future:
    // 'AI-enabled Social Agency': [
    //   { src: assets.ase_1, alt: 'ASE 1' },
    //   { src: assets.ase_2, alt: 'ASE 2' },
    //   ...
    // ],
  };

  // Detailed content for each portfolio item (images and videos)
  const portfolioDetails = {
    'Digital Marketing Agency': {
      'DMA 1': [
        { type: 'video', src: assets.one_dma_1, alt: 'ONE DMA 1' }
      ],
      'DMA 2': [
        { type: 'image', src: assets.one_dma_2, alt: 'ONE DMA 2' },
        { type: 'image', src: assets.two_dma_2, alt: 'TWO DMA 2' },
        { type: 'image', src: assets.three_dma_2, alt: 'THREE DMA 2' },
        { type: 'image', src: assets.four_dma_2, alt: 'FOUR DMA 2' },
        { type: 'image', src: assets.five_dma_2, alt: 'FIVE DMA 2' },
        { type: 'image', src: assets.six_dma_2, alt: 'SIX DMA 2' },
        { type: 'image', src: assets.seven_dma_2, alt: 'SEVEN DMA 2' },
        { type: 'image', src: assets.eight_dma_2, alt: 'EIGHT DMA 2' }
      ],
      'DMA 3': [
        { type: 'video', src: assets.one_dma_3, alt: 'ONE DMA 3' }
      ],
      'DMA 4': [
        { type: 'video', src: assets.one_dma_4, alt: 'ONE DMA 4' }
      ],
      'DMA 5': [
        { type: 'image', src: assets.one_dma_5, alt: 'ONE DMA 5' },
        { type: 'image', src: assets.two_dma_5, alt: 'TWO DMA 5' },
        { type: 'image', src: assets.three_dma_5, alt: 'THREE DMA 5' },
        { type: 'image', src: assets.four_dma_5, alt: 'FOUR DMA 5' },
        { type: 'image', src: assets.five_dma_5, alt: 'FIVE DMA 5' },
        { type: 'image', src: assets.six_dma_5, alt: 'SIX DMA 5' }
      ],
      'DMA 6': [
        { type: 'video', src: assets.one_dma_6, alt: 'ONE DMA 6' }
      ],
      'DMA 7': [
        { type: 'video', src: assets.one_dma_7, alt: 'ONE DMA 7' }
      ],
      'DMA 8': [
        { type: 'image', src: assets.one_dma_8, alt: 'ONE DMA 8' },
        { type: 'image', src: assets.two_dma_8, alt: 'TWO DMA 8' },
        { type: 'image', src: assets.three_dma_8, alt: 'THREE DMA 8' },
        { type: 'image', src: assets.four_dma_8, alt: 'FOUR DMA 8' },
        { type: 'image', src: assets.five_dma_8, alt: 'FIVE DMA 8' },
        { type: 'image', src: assets.six_dma_8, alt: 'SIX DMA 8' },
        { type: 'image', src: assets.seven_dma_8, alt: 'SEVEN DMA 8' }
      ],
      'DMA 9': [
        { type: 'video', src: assets.one_dma_9, alt: 'ONE DMA 9' }
      ]
    },
    // Add more portfolios here in the future:
    // 'AI-enabled Social Agency': {
    //   'ASE 1': [
    //     { type: 'video', src: assets.one_ase_1, alt: 'ONE ASE 1' }
    //   ],
    //   ...
    // },
  };

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

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen || selectedImageIndex !== null || isDetailModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen, selectedImageIndex, isDetailModalOpen]);

  // Filter portfolio items
  const filteredItems = selectedFilter === 'ALL' ? portfolioItems : portfolioItems.filter(item => item.category === selectedFilter);

  const filterOptions = [
    'ALL',
    'PROFESSIONAL SERVICES',
    'HOSPITALITY & RENTALS',
    'FAMILY & CARE',
    'FOOD & BEVERAGES',
    'PERSONALITY'
  ];

  const handlePortfolioClick = (name) => {
    if (portfolioGalleries[name]) {
      setSelectedPortfolio(name);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPortfolio(null);
  };

  const handleImageClick = (alt) => {
    if (selectedPortfolio && portfolioDetails[selectedPortfolio] && portfolioDetails[selectedPortfolio][alt]) {
      setSelectedDetailItem(alt);
      setCurrentDetailIndex(0);
      setIsDetailModalOpen(true);
    }
  };

  const handleCloseFullImage = () => {
    setSelectedImageIndex(null);
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    if (selectedPortfolio && portfolioGalleries[selectedPortfolio]) {
      const gallery = portfolioGalleries[selectedPortfolio];
      setSelectedImageIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
    }
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    if (selectedPortfolio && portfolioGalleries[selectedPortfolio]) {
      const gallery = portfolioGalleries[selectedPortfolio];
      setSelectedImageIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
    }
  };

  const handleCloseDetailModal = () => {
    setIsDetailModalOpen(false);
    setSelectedDetailItem(null);
    setCurrentDetailIndex(0);
  };

  const handlePrevDetail = (e) => {
    e.stopPropagation();
    if (selectedPortfolio && selectedDetailItem && portfolioDetails[selectedPortfolio][selectedDetailItem]) {
      const details = portfolioDetails[selectedPortfolio][selectedDetailItem];
      setCurrentDetailIndex((prev) => (prev === 0 ? details.length - 1 : prev - 1));
    }
  };

  const handleNextDetail = (e) => {
    e.stopPropagation();
    if (selectedPortfolio && selectedDetailItem && portfolioDetails[selectedPortfolio][selectedDetailItem]) {
      const details = portfolioDetails[selectedPortfolio][selectedDetailItem];
      setCurrentDetailIndex((prev) => (prev === details.length - 1 ? 0 : prev + 1));
    }
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <div className="loading-logo">
            <img src={assets.logo} alt="Logo" draggable={false}/>
          </div>
          <div className="loading-bar">
            <div className="loading-progress"></div>
          </div>
          <p className="loading-text">This Site Is Best Viewed on Desktop...</p>
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
                Helping <br/>
                brands show <br/>their <span className="hm-highlight">vision...</span>
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
                <img src={assets.profile} alt="Profile" draggable={false}/>
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
              <img src={visionImages[currentVisionIndex]} alt="Vision" draggable={false}/>
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
              <img src={assets.brand_1} alt="Brand 1" draggable={false}/>
              <img src={assets.brand_2} alt="Brand 2" draggable={false}/>
              <img src={assets.brand_3} alt="Brand 3" draggable={false}/>
              <img src={assets.brand_4} alt="Brand 4" draggable={false}/>
              <img src={assets.brand_5} alt="Brand 5" draggable={false}/>
              {/* Duplicate for seamless loop */}
              <img src={assets.brand_1} alt="Brand 1" draggable={false}/>
              <img src={assets.brand_2} alt="Brand 2" draggable={false}/>
              <img src={assets.brand_3} alt="Brand 3" draggable={false}/>
              <img src={assets.brand_4} alt="Brand 4" draggable={false}/>
              <img src={assets.brand_5} alt="Brand 5" draggable={false}/>
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
              <div key={index} className="portfolio-card" onClick={() => handlePortfolioClick(item.name)}>
                <div className="portfolio-image-wrapper">
                  <img src={item.img} alt={item.name} draggable={false} />
                  <div className="portfolio-overlay">
                    <img src={assets.logo} alt="Logo" className="overlay-logo" draggable={false}/>
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
                <img src={assets.testimonial_1} alt="Testimonial 1" draggable={false}/>
              </div>
              <div className="testimonial-card">
                <img src={assets.testimonial_2} alt="Testimonial 2" draggable={false}/>
              </div>
              <div className="testimonial-card">
                <img src={assets.testimonial_3} alt="Testimonial 3" draggable={false}/>
              </div>
              {/* Duplicate for seamless loop */}
              <div className="testimonial-card">
                <img src={assets.testimonial_1} alt="Testimonial 1" draggable={false}/>
              </div>
              <div className="testimonial-card">
                <img src={assets.testimonial_2} alt="Testimonial 2" draggable={false}/>
              </div>
              <div className="testimonial-card">
                <img src={assets.testimonial_3} alt="Testimonial 3" draggable={false}/>
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

      {/* Portfolio Modal */}
      {isModalOpen && selectedPortfolio && portfolioGalleries[selectedPortfolio] && (
        <div className="portfolio-modal-overlay" onClick={handleCloseModal}>
          <div className="portfolio-modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="portfolio-modal-close" onClick={handleCloseModal}>
              <IoMdClose />
            </button>
            <div className="portfolio-modal-content">
              <div className="portfolio-modal-grid">
                {portfolioGalleries[selectedPortfolio].map((image, index) => (
                  <div 
                    key={index} 
                    className="portfolio-modal-item"
                    onClick={() => handleImageClick(image.alt)}
                  >
                    <img src={image.src} alt={image.alt} draggable={false} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Detail Modal (Videos/Images) */}
      {isDetailModalOpen && selectedPortfolio && selectedDetailItem && portfolioDetails[selectedPortfolio][selectedDetailItem] && (
        <div className="detail-modal-overlay" onClick={handleCloseDetailModal}>
          <div className="detail-modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="detail-modal-close" onClick={handleCloseDetailModal}>
              <IoMdClose />
            </button>
            
            <div className="detail-modal-content">
              {portfolioDetails[selectedPortfolio][selectedDetailItem][currentDetailIndex].type === 'video' ? (
                <video 
                  src={portfolioDetails[selectedPortfolio][selectedDetailItem][currentDetailIndex].src}
                  controls
                  autoPlay
                  className="detail-modal-video"
                  controlsList="nodownload"
                  key={currentDetailIndex}
                />
              ) : (
                <img 
                  src={portfolioDetails[selectedPortfolio][selectedDetailItem][currentDetailIndex].src}
                  alt={portfolioDetails[selectedPortfolio][selectedDetailItem][currentDetailIndex].alt}
                  draggable={false}
                  className="detail-modal-image"
                />
              )}
            </div>

            {/* Navigation - only show if multiple items */}
            {portfolioDetails[selectedPortfolio][selectedDetailItem].length > 1 && (
              <>
                <button className="detail-modal-nav detail-modal-prev" onClick={handlePrevDetail}>
                  <MdOutlineKeyboardArrowLeft />
                </button>
                <button className="detail-modal-nav detail-modal-next" onClick={handleNextDetail}>
                  <MdKeyboardArrowRight />
                </button>
                <div className="detail-modal-counter">
                  {currentDetailIndex + 1} / {portfolioDetails[selectedPortfolio][selectedDetailItem].length}
                </div>
              </>
            )}
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Home;