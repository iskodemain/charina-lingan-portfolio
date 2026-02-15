import React, { useContext, useState, useEffect } from 'react';
import '../styles/CaseOne.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { assets } from '../assets/assets';
import { ProfileContext } from '../context/ProfileContext';
import { IoMdClose } from "react-icons/io";
import { MdOutlineKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const CaseOne = () => {
  const { navigate } = useContext(ProfileContext);

  // Modal states for Reels Portfolio
  const [isReelsModalOpen, setIsReelsModalOpen] = useState(false);
  const [selectedReelsPortfolio, setSelectedReelsPortfolio] = useState(null);
  const [currentReelsIndex, setCurrentReelsIndex] = useState(0);

  // Modal states for Stories Portfolio
  const [isStoriesModalOpen, setIsStoriesModalOpen] = useState(false);
  const [selectedStoriesPortfolio, setSelectedStoriesPortfolio] = useState(null);
  const [currentStoriesIndex, setCurrentStoriesIndex] = useState(0);

  // Reels Portfolio Items
  const reelsItems = [
    { img: assets.reels_1_case_1, name: 'Reel 1' },
    { img: assets.reels_2_case_1, name: 'Reel 2' },
    { img: assets.reels_3_case_1, name: 'Reel 3' },
    { img: assets.reels_4_case_1, name: 'Reel 4' },
    { img: assets.reels_5_case_1, name: 'Reel 5' },
    { img: assets.reels_6_case_1, name: 'Reel 6' },
  ];

  // Stories Portfolio Items
  const storiesItems = [
    { img: assets.story_1_case_1, name: 'Story 1' },
    { img: assets.story_2_case_1, name: 'Story 2' },
    { img: assets.story_3_case_1, name: 'Story 3' },
    { img: assets.story_4_case_1, name: 'Story 4' },
    { img: assets.story_5_case_1, name: 'Story 5' },
    { img: assets.story_6_case_1, name: 'Story 6' },
  ];

  // Galleries
  const reelsGalleries = {
    'Reel 1': [
      { src: assets.reel_1, alt: 'Reel 1-1', type: 'video' },
    ],
    'Reel 2': [
      { src: assets.reel_2, alt: 'Reel 2-1', type: 'video' },
    ],
    'Reel 3': [
      { src: assets.reel_3, alt: 'Reel 3-1', type: 'video' },
    ],
    'Reel 4': [
      { src: assets.reel_4, alt: 'Reel 4-1', type: 'video' },
    ],
    'Reel 5': [
      { src: assets.reel_5, alt: 'Reel 5-1', type: 'video' },
    ],
    'Reel 6': [
      { src: assets.reel_6, alt: 'Reel 6-1', type: 'video' },
    ],
  };

  const storiesGalleries = {
    'Story 1': [
      { src: assets.story_1_case_1, alt: 'Story 1-1', type: 'image' },
    ],
    'Story 2': [
      { src: assets.story_2_case_1, alt: 'Story 2-1', type: 'image' },
    ],
    'Story 3': [
      { src: assets.story_3_case_1, alt: 'Story 3-1', type: 'image' },
    ],
    'Story 4': [
      { src: assets.story_4_case_1, alt: 'Story 4-1', type: 'image' },
    ],
    'Story 5': [
      { src: assets.story_5_case_1, alt: 'Story 5-1', type: 'image' },
    ],
    'Story 6': [
      { src: assets.story_6_case_1, alt: 'Story 6-1', type: 'image' },
    ],
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isReelsModalOpen || isStoriesModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isReelsModalOpen, isStoriesModalOpen]);

  // Reels handlers
  const handleReelsClick = (name) => {
    if (reelsGalleries[name]) {
      setSelectedReelsPortfolio(name);
      setCurrentReelsIndex(0);
      setIsReelsModalOpen(true);
    }
  };

  const handleCloseReelsModal = () => {
    setIsReelsModalOpen(false);
    setSelectedReelsPortfolio(null);
    setCurrentReelsIndex(0);
  };

  const handleReelsPrev = (e) => {
    e.stopPropagation();
    if (selectedReelsPortfolio && reelsGalleries[selectedReelsPortfolio]) {
      const items = reelsGalleries[selectedReelsPortfolio];
      setCurrentReelsIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    }
  };

  const handleReelsNext = (e) => {
    e.stopPropagation();
    if (selectedReelsPortfolio && reelsGalleries[selectedReelsPortfolio]) {
      const items = reelsGalleries[selectedReelsPortfolio];
      setCurrentReelsIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    }
  };

  // Stories handlers
  const handleStoriesClick = (name) => {
    if (storiesGalleries[name]) {
      setSelectedStoriesPortfolio(name);
      setCurrentStoriesIndex(0);
      setIsStoriesModalOpen(true);
    }
  };

  const handleCloseStoriesModal = () => {
    setIsStoriesModalOpen(false);
    setSelectedStoriesPortfolio(null);
    setCurrentStoriesIndex(0);
  };

  const handleStoriesPrev = (e) => {
    e.stopPropagation();
    if (selectedStoriesPortfolio && storiesGalleries[selectedStoriesPortfolio]) {
      const items = storiesGalleries[selectedStoriesPortfolio];
      setCurrentStoriesIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    }
  };

  const handleStoriesNext = (e) => {
    e.stopPropagation();
    if (selectedStoriesPortfolio && storiesGalleries[selectedStoriesPortfolio]) {
      const items = storiesGalleries[selectedStoriesPortfolio];
      setCurrentStoriesIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <>
      <Navbar />
      <div className="case-one-page">
        
        {/* COVER SECTION */}
        <section className="case-cover-section">
          <div className="case-cover-image-container">
            <img src={assets.cover_case_1} alt="Gerphil Cover" draggable={false} />
            <div className="case-cover-text-overlay">
              <p className="case-cover-label">Visual Stage</p>
              <h1 className="case-cover-title">GERPHIL-GERALDINE FLORES</h1>
              <p className="case-cover-subtitle">Managing the digital stage for a professional icon.</p>
              <div className="case-cover-tags">
                <span className="case-cover-tag">Branding Strategy</span>
                <span className="case-cover-tag">Feed Management</span>
                <span className="case-cover-tag">Posting and Scheduling</span>
              </div>
            </div>
          </div>
        </section>

        {/* DESCRIPTION SECTION */}
        <section className="case-description-section">
          <p className="case-description-text">
            Gerphil wanted to transform her Instagram into a more aesthetic and well-curated feed. The goal was simple: to move away from random postings and transition into a look that is visually pleasing, organized, and consistent.
          </p>
        </section>

        {/* FEED SECTION */}
        <section className="case-comparison-section">
          <div className="case-comparison-container">
            <div className="case-comparison-card case-old">
              <div className="case-comparison-image case-old">
                <img src={assets.old_feed_case_1} alt="Old Feed" draggable={false} />
              </div>
            </div>
            <div className="case-comparison-card case-new">
              <div className="case-comparison-image case-highlight">
                <img src={assets.new_feed_case_1} alt="New Feed" draggable={false} />
              </div>
            </div>
          </div>
        </section>

        {/* LOGO SECTION */}
        <section className="case-logo-section">
          <img src={assets.logo} alt="Logo" className="case-logo" draggable={false} />
        </section>

        {/* POST SECTION */}
        <section className="case-comparison-section">
          <div className="case-comparison-container">
            <div className="case-comparison-card case-old">
              <div className="case-comparison-image case-old">
                <img src={assets.old_post_case_1} alt="Old Posts" draggable={false} />
              </div>
            </div>
            <div className="case-comparison-card case-new">
              <div className="case-comparison-image case-highlight">
                <img src={assets.new_post_case_1} alt="New Posts" draggable={false} />
              </div>
            </div>
          </div>
        </section>

        {/* LOGO SECTION */}
        <section className="case-logo-section">
          <img src={assets.logo} alt="Logo" className="case-logo" draggable={false} />
        </section>

        {/* REELS SECTION */}
        <section className="case-comparison-section">
          <div className="case-comparison-container">
            <div className="case-comparison-card case-old">
              <div className="case-comparison-image case-old">
                <img src={assets.old_reel_case_1} alt="Old Reels" draggable={false} />
              </div>
            </div>
            <div className="case-comparison-card case-new">
              <div className="case-comparison-image case-highlight">
                <img src={assets.new_reel_case_1} alt="New Reels" draggable={false} />
              </div>
            </div>
          </div>
        </section>

        {/* PARTNERSHIP SECTION */}
        <section className="case-partnership-section">
          <h2 className="case-section-title">THE PARTNERSHIP</h2>
          <p className="case-partnership-text">
            What began as a 3-month contract from March to May naturally evolved into a 9-month collaboration lasting until December. Our partnership was defined by a seamless and straightforward workflow where creative alignment came easily, often resulting in little to no revisions because our styles matched so well. This high level of trust allowed our working relationship to expand beyond the public feed, where I became a reliable resource for her personal creative needs and video edits, ensuring her visual standards remained high in every aspect.
          </p>
        </section>

        {/* REELS PORTFOLIO SECTION */}
        <section className="case-portfolio-section case-reels-portfolio">
          <div className="case-portfolio-container">
            <div className="case-portfolio-main-container">
              <h2 className="case-portfolio-title">REELS</h2>
              <div className="case-portfolio-grid">
                {reelsItems.map((item, index) => (
                  <div key={index} className="case-portfolio-card" onClick={() => handleReelsClick(item.name)}>
                    <div className="case-portfolio-image-wrapper">
                      <img src={item.img} alt={item.name} draggable={false} />
                      <div className="case-portfolio-overlay">
                        <img src={assets.logo} alt="Logo" className="case-portfolio-overlay-logo" draggable={false} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* LOGO SECTION */}
        <section className="case-logo-section">
          <img src={assets.logo} alt="Logo" className="case-logo" draggable={false} />
        </section>

        {/* STORIES PORTFOLIO SECTION */}
        <section className="case-portfolio-section case-stories-portfolio">
          <div className="case-portfolio-container">
            <div className="case-portfolio-main-container">
              <h2 className="case-portfolio-title">STORIES</h2>
              <div className="case-portfolio-grid">
                {storiesItems.map((item, index) => (
                  <div key={index} className="case-portfolio-card" onClick={() => handleStoriesClick(item.name)}>
                    <div className="case-portfolio-image-wrapper">
                      <img src={item.img} alt={item.name} draggable={false} />
                      <div className="case-portfolio-overlay">
                        <img src={assets.logo} alt="Logo" className="case-portfolio-overlay-logo" draggable={false} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* THE RESULT SECTION */}
        <section className="case-result-section">
          <div className="case-result-container">
            <div className="case-result-image-wrapper">
              <img src={assets.the_result_case_1} alt="The Result" draggable={false} />
            </div>
            <div className="case-result-content">
              <h2 className="case-section-title">THE RESULT</h2>
              <p className="case-result-text">
                By matching Gerphil's personal vibe with her audience's expectations, I was able to build a digital presence that felt both authentic and professional. The fact that a <span className="case-result-highlight">short-term project turned into nearly a year of consistent work</span> proves that the visual strategy not only satisfied the artist's high standards but also effectively captured her essence for the public to see.
              </p>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="case-cta-section">
          <h2 className="case-cta-title">Build Your Vision With Us</h2>
          <button className="case-cta-button" onClick={() => navigate('/contact')}>
            Work with me!
          </button>
        </section>

      </div>

      {/* REELS MODAL - Direct Display with Navigation */}
      {isReelsModalOpen && selectedReelsPortfolio && reelsGalleries[selectedReelsPortfolio] && (
        <div className="case-detail-modal-overlay" onClick={handleCloseReelsModal}>
          <div className="case-detail-modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="case-detail-modal-close" onClick={handleCloseReelsModal}>
              <IoMdClose />
            </button>
            
            <div className="case-detail-modal-content">
              {reelsGalleries[selectedReelsPortfolio][currentReelsIndex].type === 'video' ? (
                <video 
                  src={reelsGalleries[selectedReelsPortfolio][currentReelsIndex].src}
                  controls
                  autoPlay
                  className="case-detail-modal-video"
                  controlsList="nodownload"
                  key={currentReelsIndex}
                />
              ) : (
                <img 
                  src={reelsGalleries[selectedReelsPortfolio][currentReelsIndex].src}
                  alt={reelsGalleries[selectedReelsPortfolio][currentReelsIndex].alt}
                  draggable={false}
                  className="case-detail-modal-image"
                />
              )}
            </div>

            {/* Navigation - only show if multiple items */}
            {reelsGalleries[selectedReelsPortfolio].length > 1 && (
              <>
                <button className="case-detail-modal-nav case-detail-modal-prev" onClick={handleReelsPrev}>
                  <MdOutlineKeyboardArrowLeft />
                </button>
                <button className="case-detail-modal-nav case-detail-modal-next" onClick={handleReelsNext}>
                  <MdKeyboardArrowRight />
                </button>
                <div className="case-detail-modal-counter">
                  {currentReelsIndex + 1} / {reelsGalleries[selectedReelsPortfolio].length}
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* STORIES MODAL - Direct Display with Navigation */}
      {isStoriesModalOpen && selectedStoriesPortfolio && storiesGalleries[selectedStoriesPortfolio] && (
        <div className="case-detail-modal-overlay" onClick={handleCloseStoriesModal}>
          <div className="case-detail-modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="case-detail-modal-close" onClick={handleCloseStoriesModal}>
              <IoMdClose />
            </button>
            
            <div className="case-detail-modal-content">
              {storiesGalleries[selectedStoriesPortfolio][currentStoriesIndex].type === 'video' ? (
                <video 
                  src={storiesGalleries[selectedStoriesPortfolio][currentStoriesIndex].src}
                  controls
                  autoPlay
                  className="case-detail-modal-video"
                  controlsList="nodownload"
                  key={currentStoriesIndex}
                />
              ) : (
                <img 
                  src={storiesGalleries[selectedStoriesPortfolio][currentStoriesIndex].src}
                  alt={storiesGalleries[selectedStoriesPortfolio][currentStoriesIndex].alt}
                  draggable={false}
                  className="case-detail-modal-image"
                />
              )}
            </div>

            {/* Navigation - only show if multiple items */}
            {storiesGalleries[selectedStoriesPortfolio].length > 1 && (
              <>
                <button className="case-detail-modal-nav case-detail-modal-prev" onClick={handleStoriesPrev}>
                  <MdOutlineKeyboardArrowLeft />
                </button>
                <button className="case-detail-modal-nav case-detail-modal-next" onClick={handleStoriesNext}>
                  <MdKeyboardArrowRight />
                </button>
                <div className="case-detail-modal-counter">
                  {currentStoriesIndex + 1} / {storiesGalleries[selectedStoriesPortfolio].length}
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

export default CaseOne;