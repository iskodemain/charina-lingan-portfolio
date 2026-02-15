import React, { useContext, useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Portfolio.css';
import { assets } from '../assets/assets';
import { ProfileContext } from '../context/ProfileContext';
import { IoIosArrowDropdown, IoMdClose } from "react-icons/io";
import { MdOutlineKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Portfolio = () => {
  const { navigate } = useContext(ProfileContext);

  // Filter dropdown state
  const [selectedFilter, setSelectedFilter] = useState('ALL');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);

  // Detail modal state
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedDetailItem, setSelectedDetailItem] = useState(null);
  const [currentDetailIndex, setCurrentDetailIndex] = useState(0);

  // Highlights data
  const highlights = [
    {
      img: assets.highlights_1,
      title: 'Managing the digital stage for a professional icon',
      subtitle: 'GERPHIL-GERALDINE FLORES',
      category: 'Social Media Management',
      case: 1
    },
    {
      img: assets.highlights_2,
      title: 'Reached 364K Content views in a month',
      subtitle: 'LITTLE SPROUTS EDUCATIONAL CENTER - ORTIGAS',
      category: 'Social Media Management',
      case: 2
    },
    {
      img: assets.highlights_3,
      title: 'How I designed the face of Howlers Festival',
      subtitle: 'HOWLERS FESTIVAL',
      category: 'Graphic Design',
      case: 3
    }
  ];

  // Portfolio items
  const portfolioItems = [
    { img: assets.ps_2, category: 'PROFESSIONAL SERVICES', name: 'AI-enabled Social Agency', description: 'Content Producer | Video Editor' },
    { img: assets.ps_1, category: 'PROFESSIONAL SERVICES', name: 'Digital Marketing Agency', description: 'Social Media Management | Visual Designer' },
    { img: assets.ps_3, category: 'PROFESSIONAL SERVICES', name: 'Social Media Agency', description: 'Content Producer | Visual Designer' },
    { img: assets.ps_4, category: 'PROFESSIONAL SERVICES', name: 'Commercial Cleaning Property', description: 'Content Producer | Video Editor' },
    { img: assets.ps_5, category: 'PROFESSIONAL SERVICES', name: 'Cleaning Services', description: 'Content Producer | Visual Designer' },
    { img: assets.hr_2, category: 'HOSPITALITY & RENTALS', name: 'Property Management', description: 'Content Producer | Visual Designer' },
    { img: assets.hr_1, category: 'HOSPITALITY & RENTALS', name: 'Vacation Rentals', description: 'Graphic Designer' },
    { img: assets.fc_1, category: 'FAMILY & CARE', name: 'Natural Dog Treats', description: 'Graphic Designer' },
    { img: assets.fbs_1, category: 'FOOD & BEVERAGES', name: "Churro Café", description: 'Content Producer | Video Editor' },
    { img: assets.fbs_2, category: 'FOOD & BEVERAGES', name: 'Mexican Coffeehouse', description: 'Content Producer | Video Editor' },
    { img: assets.personality_2, category: 'PERSONALITY', name: 'CG Artist', description: 'Video Editor' },
    { img: assets.personality_1, category: 'PERSONALITY', name: 'Media Kit Template', description: 'Graphic Designer' },
    { img: assets.ps_6, category: 'PROFESSIONAL SERVICES', name: 'Digital Mentorship Platform', description: 'Graphic Designer' },
  ];

  // Portfolio galleries
  const portfolioGalleries = {
    'Digital Marketing Agency': [
      { src: assets.dma_1, alt: 'DMA 1', type: 'image' },
      { src: assets.dma_2, alt: 'DMA 2', type: 'image' },
      { src: assets.dma_3, alt: 'DMA 3', type: 'image' },
      { src: assets.dma_4, alt: 'DMA 4', type: 'image' },
      { src: assets.dma_5, alt: 'DMA 5', type: 'image' },
      { src: assets.dma_6, alt: 'DMA 6', type: 'image' },
      { src: assets.dma_7, alt: 'DMA 7', type: 'image' },
      { src: assets.dma_8, alt: 'DMA 8', type: 'image' },
      { src: assets.dma_9, alt: 'DMA 9', type: 'image' }
    ],
    'AI-enabled Social Agency': [
      { src: assets.asa_1, alt: 'ASA 1', type: 'image' },
      { src: assets.asa_2, alt: 'ASA 2', type: 'image' },
      { src: assets.asa_3, alt: 'ASA 3', type: 'image' },
      { src: assets.asa_4, alt: 'ASA 4', type: 'image' },
      { src: assets.asa_5, alt: 'ASA 5', type: 'image' },
      { src: assets.asa_6, alt: 'ASA 6', type: 'image' },
      { src: assets.asa_7, alt: 'ASA 7', type: 'image' },
      { src: assets.asa_8, alt: 'ASA 8', type: 'image' },
      { src: assets.asa_9, alt: 'ASA 9', type: 'image' }
    ],
    'Social Media Agency': [
      { src: assets.sma_1, alt: 'SMA 1', type: 'image' },
      { src: assets.sma_2, alt: 'SMA 2', type: 'image' },
      { src: assets.sma_3, alt: 'SMA 3', type: 'image' },
      { src: assets.sma_4, alt: 'SMA 4', type: 'image' },
      { src: assets.sma_5, alt: 'SMA 5', type: 'image' },
      { src: assets.sma_6, alt: 'SMA 6', type: 'image' },
      { src: assets.sma_7, alt: 'SMA 7', type: 'image' },
      { src: assets.sma_8, alt: 'SMA 8', type: 'image' },
      { src: assets.sma_9, alt: 'SMA 9', type: 'image' }
    ],
    'Commercial Cleaning Property': [
      { src: assets.ccp_1, alt: 'CCP 1', type: 'image' },
      { src: assets.ccp_2, alt: 'CCP 2', type: 'image' },
      { src: assets.ccp_3, alt: 'CCP 3', type: 'image' },
      { src: assets.ccp_4, alt: 'CCP 4', type: 'image' },
      { src: assets.ccp_5, alt: 'CCP 5', type: 'image' },
      { src: assets.ccp_6, alt: 'CCP 6', type: 'image' },
      { src: assets.ccp_7, alt: 'CCP 7', type: 'image' },
      { src: assets.ccp_8, alt: 'CCP 8', type: 'image' },
      { src: assets.ccp_9, alt: 'CCP 9', type: 'image' }
    ],
    'Cleaning Services': [
      { src: assets.cs_1, alt: 'CS 1', type: 'image' },
      { src: assets.cs_2, alt: 'CS 2', type: 'image' },
      { src: assets.cs_3, alt: 'CS 3', type: 'image' },
      { src: assets.cs_4, alt: 'CS 4', type: 'image' },
      { src: assets.cs_5, alt: 'CS 5', type: 'image' },
      { src: assets.cs_6, alt: 'CS 6', type: 'image' },
      { src: assets.cs_7, alt: 'CS 7', type: 'image' },
      { src: assets.cs_8, alt: 'CS 8', type: 'image' },
      { src: assets.cs_9, alt: 'CS 9', type: 'image' }
    ],
    'Property Management': [
      { src: assets.pm_1, alt: 'PM 1', type: 'image' },
      { src: assets.pm_2, alt: 'PM 2', type: 'image' },
      { src: assets.pm_3, alt: 'PM 3', type: 'image' },
      { src: assets.pm_4, alt: 'PM 4', type: 'image' },
      { src: assets.pm_5, alt: 'PM 5', type: 'image' },
      { src: assets.pm_6, alt: 'PM 6', type: 'image' },
      { src: assets.pm_7, alt: 'PM 7', type: 'image' },
      { src: assets.pm_8, alt: 'PM 8', type: 'image' },
      { src: assets.pm_9, alt: 'PM 9', type: 'image' }
    ],
    'Vacation Rentals': [
      { src: assets.vr_1, alt: 'VR 1', type: 'video' },
    ],
    'Natural Dog Treats': [
      { src: assets.ndt_1, alt: 'NDT 1', type: 'image' },
      { src: assets.ndt_2, alt: 'NDT 2', type: 'image' },
      { src: assets.ndt_3, alt: 'NDT 3', type: 'image' },
      { src: assets.ndt_4, alt: 'NDT 4', type: 'image' },
      { src: assets.ndt_5, alt: 'NDT 5', type: 'image' },
      { src: assets.ndt_6, alt: 'NDT 6', type: 'image' },
      { src: assets.ndt_7, alt: 'NDT 7', type: 'image' },
      { src: assets.ndt_8, alt: 'NDT 8', type: 'image' },
      { src: assets.ndt_9, alt: 'NDT 9', type: 'image' }
    ],
    'Churro Café': [
      { src: assets.cc_1, alt: 'CC 1', type: 'image' },
      { src: assets.cc_2, alt: 'CC 2', type: 'image' },
      { src: assets.cc_3, alt: 'CC 3', type: 'image' }
    ],
    'Mexican Coffeehouse': [
      { src: assets.mc_1, alt: 'MC 1', type: 'image' },
      { src: assets.mc_2, alt: 'MC 2', type: 'image' },
      { src: assets.mc_3, alt: 'MC 3', type: 'image' },
      { src: assets.mc_4, alt: 'MC 4', type: 'image' },
      { src: assets.mc_5, alt: 'MC 5', type: 'image' },
      { src: assets.mc_6, alt: 'MC 6', type: 'image' }
    ],
    'CG Artist': [
      { src: assets.cga_1, alt: 'CGA 1', type: 'image' },
      { src: assets.cga_2, alt: 'CGA 2', type: 'image' },
      { src: assets.cga_3, alt: 'CGA 3', type: 'image' },
      { src: assets.cga_4, alt: 'CGA 4', type: 'image' },
      { src: assets.cga_5, alt: 'CGA 5', type: 'image' },
      { src: assets.cga_6, alt: 'CGA 6', type: 'image' },
      { src: assets.cga_7, alt: 'CGA 7', type: 'image' },
      { src: assets.cga_8, alt: 'CGA 8', type: 'image' },
      { src: assets.cga_9, alt: 'CGA 9', type: 'image' }
    ],
    'Media Kit Template': [
      { src: assets.mkt_1, alt: 'MKT 1', type: 'video' },
    ],
    'Digital Mentorship Platform': [
      { src: assets.dmp_1, alt: 'DMP 1', type: 'image' },
      { src: assets.dmp_2, alt: 'DMP 2', type: 'image' },
      { src: assets.dmp_3, alt: 'DMP 3', type: 'image' }
    ],
  };

  // Detailed content for each portfolio item (keeping your existing portfolioDetails object)
  const portfolioDetails = {
    // ... (keeping all your existing portfolioDetails data - no changes here)
    'Digital Marketing Agency': {
      'DMA 1': [{ type: 'video', src: assets.one_dma_1, alt: 'ONE DMA 1' }],
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
      'DMA 3': [{ type: 'video', src: assets.one_dma_3, alt: 'ONE DMA 3' }],
      'DMA 4': [{ type: 'video', src: assets.one_dma_4, alt: 'ONE DMA 4' }],
      'DMA 5': [
        { type: 'image', src: assets.one_dma_5, alt: 'ONE DMA 5' },
        { type: 'image', src: assets.two_dma_5, alt: 'TWO DMA 5' },
        { type: 'image', src: assets.three_dma_5, alt: 'THREE DMA 5' },
        { type: 'image', src: assets.four_dma_5, alt: 'FOUR DMA 5' },
        { type: 'image', src: assets.five_dma_5, alt: 'FIVE DMA 5' },
        { type: 'image', src: assets.six_dma_5, alt: 'SIX DMA 5' }
      ],
      'DMA 6': [{ type: 'video', src: assets.one_dma_6, alt: 'ONE DMA 6' }],
      'DMA 7': [{ type: 'video', src: assets.one_dma_7, alt: 'ONE DMA 7' }],
      'DMA 8': [
        { type: 'image', src: assets.one_dma_8, alt: 'ONE DMA 8' },
        { type: 'image', src: assets.two_dma_8, alt: 'TWO DMA 8' },
        { type: 'image', src: assets.three_dma_8, alt: 'THREE DMA 8' },
        { type: 'image', src: assets.four_dma_8, alt: 'FOUR DMA 8' },
        { type: 'image', src: assets.five_dma_8, alt: 'FIVE DMA 8' },
        { type: 'image', src: assets.six_dma_8, alt: 'SIX DMA 8' },
        { type: 'image', src: assets.seven_dma_8, alt: 'SEVEN DMA 8' }
      ],
      'DMA 9': [{ type: 'video', src: assets.one_dma_9, alt: 'ONE DMA 9' }]
    },
    // ... continue with all your other portfolioDetails
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen || isDetailModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen, isDetailModalOpen]);

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

  const handleCaseView = (caseNumber) => {
    if (caseNumber === 1) {
      navigate('/portfolio/case-one');
    }
    if (caseNumber === 2) {
      navigate('/portfolio/case-two');
    }
    if (caseNumber === 3) {
      navigate('/portfolio/case-three');
    }
  }

  return (
    <>
      <Navbar />
      <div className="pfpage-container">
        
        {/* Highlights Section */}
        <section className="pfpage-highlights-section">
          <h1 className="pfpage-highlights-title">HIGHLIGHTS</h1>
          <div className="pfpage-highlights-grid">
            {highlights.map((highlight, index) => (
              <div key={index} className="pfpage-highlight-card">
                <div className="pfpage-highlight-image-wrapper">
                  <img src={highlight.img} alt={highlight.title} draggable={false} />
                  <div className="pfpage-highlight-overlay">
                    <h3 className="pfpage-highlight-main-text">{highlight.title}</h3>
                    <p className="pfpage-highlight-sub-text">{highlight.subtitle}</p>
                    <button className="pfpage-highlight-view-btn" onClick={() => handleCaseView(highlight.case)}>View</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="pfpage-works-section">
          <h2 className="pfpage-works-title">MORE WORKS</h2>
          <div className="pfpage-filter-dropdown">
            <button 
              className="pfpage-dropdown-toggle" 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              {selectedFilter}
              <IoIosArrowDropdown className={`pfpage-dropdown-icon ${isDropdownOpen ? 'pfpage-open' : ''}`} />
            </button>
            {isDropdownOpen && (
              <div className="pfpage-dropdown-menu">
                {filterOptions.map((option) => (
                  <div
                    key={option}
                    className={`pfpage-dropdown-item ${selectedFilter === option ? 'pfpage-active' : ''}`}
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
          <div className="pfpage-works-grid">
            {filteredItems.map((item, index) => (
              <div key={index} className="pfpage-work-card" onClick={() => handlePortfolioClick(item.name)}>
                <div className="pfpage-work-image-wrapper">
                  <img src={item.img} alt={item.name} draggable={false} />
                  <div className="pfpage-work-overlay">
                    <img src={assets.logo} alt="Logo" className="pfpage-overlay-logo" draggable={false}/>
                  </div>
                </div>
                <div className='pfpage-work-info'>
                  <p className="pfpage-work-name">{item.name}</p>
                  <p className="pfpage-work-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio Modal */}
        {isModalOpen && selectedPortfolio && portfolioGalleries[selectedPortfolio] && (
          <div className="pfpage-work-modal-overlay" onClick={handleCloseModal}>
            <div className="pfpage-work-modal-container" onClick={(e) => e.stopPropagation()}>
              <button className="pfpage-work-modal-close" onClick={handleCloseModal}>
                <IoMdClose />
              </button>
              <div className="pfpage-work-modal-content">
                <div className="pfpage-work-modal-grid">
                  {portfolioGalleries[selectedPortfolio].map((image, index) => (
                    <div 
                      key={index} 
                      className={`pfpage-work-modal-item ${image.type === 'video' ? 'pfpage-work-modal-video-item' : 'pfpage-work-modal-image-item'}`}
                      onClick={() => handleImageClick(image.alt)}
                    >
                      {image.type === 'video' ? (
                        <video src={image.src} controls autoPlay controlsList="nodownload" className="pfpage-work-modal-video-preview"/>
                      ) : (
                        <img src={image.src} alt={image.alt} draggable={false} />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Detail Modal (Videos/Images) */}
        {isDetailModalOpen && selectedPortfolio && selectedDetailItem && portfolioDetails[selectedPortfolio][selectedDetailItem] && (
          <div className="pfpage-detail-modal-overlay" onClick={handleCloseDetailModal}>
            <div className="pfpage-detail-modal-container" onClick={(e) => e.stopPropagation()}>
              <button className="pfpage-detail-modal-close" onClick={handleCloseDetailModal}>
                <IoMdClose />
              </button>
              
              <div className="pfpage-detail-modal-content">
                {portfolioDetails[selectedPortfolio][selectedDetailItem][currentDetailIndex].type === 'video' ? (
                  <video 
                    src={portfolioDetails[selectedPortfolio][selectedDetailItem][currentDetailIndex].src}
                    controls
                    autoPlay
                    className="pfpage-detail-modal-video"
                    controlsList="nodownload"
                    key={currentDetailIndex}
                  />
                ) : (
                  <img 
                    src={portfolioDetails[selectedPortfolio][selectedDetailItem][currentDetailIndex].src}
                    alt={portfolioDetails[selectedPortfolio][selectedDetailItem][currentDetailIndex].alt}
                    draggable={false}
                    className="pfpage-detail-modal-image"
                  />
                )}
              </div>

              {/* Navigation - only show if multiple items */}
              {portfolioDetails[selectedPortfolio][selectedDetailItem].length > 1 && (
                <>
                  <button className="pfpage-detail-modal-nav pfpage-detail-modal-prev" onClick={handlePrevDetail}>
                    <MdOutlineKeyboardArrowLeft />
                  </button>
                  <button className="pfpage-detail-modal-nav pfpage-detail-modal-next" onClick={handleNextDetail}>
                    <MdKeyboardArrowRight />
                  </button>
                  <div className="pfpage-detail-modal-counter">
                    {currentDetailIndex + 1} / {portfolioDetails[selectedPortfolio][selectedDetailItem].length}
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;