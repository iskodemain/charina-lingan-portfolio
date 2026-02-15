import React, { useContext, useState, useEffect } from 'react';
import '../styles/CaseTwo.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { assets } from '../assets/assets';
import { ProfileContext } from '../context/ProfileContext';
import { IoMdClose } from "react-icons/io";
import { MdOutlineKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const CaseTwo = () => {
  const { navigate } = useContext(ProfileContext);

  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // SME Items
  const smeItems = [
    { img: assets.sme_1_case_2, name: 'SME 1' },
    { img: assets.sme_2_case_2, name: 'SME 2' },
    { img: assets.sme_3_case_2, name: 'SME 3' },
    { img: assets.sme_4_case_2, name: 'SME 4' },
    { img: assets.sme_5_case_2, name: 'SME 5' },
    { img: assets.sme_6_case_2, name: 'SME 6' },
    { img: assets.sme_7_case_2, name: 'SME 7' },
    { img: assets.sme_8_case_2, name: 'SME 8' },
    { img: assets.sme_9_case_2, name: 'SME 9' },
  ];

  // Content galleries
  const contentGalleries = {
    'content_overview': [
      { src: assets.co_case_2, alt: 'Content Overview', type: 'image' },
    ],
    'performance_results': [
      { src: assets.pr_case_2, alt: 'Performance Results', type: 'image' },
    ],
    'paid_ad_success': [
      { src: assets.paid_ad_vid, alt: 'Paid Ad Success', type: 'video' },
    ],
    'copywriting': [
      { src: assets.copywriting_case_2, alt: 'Copywriting', type: 'image' },
    ],
    'SME 1': [
      { src: assets.csl_1, alt: 'SME 1-1', type: 'video' },
    ],
    'SME 2': [
      { src: assets.csl_2, alt: 'SME 2-1', type: 'image' },
    ],
    'SME 3': [
      { src: assets.csl_3, alt: 'SME 3-1', type: 'video' },
    ],
    'SME 4': [
      { src: assets.csl_4_1, alt: 'SME 4-1', type: 'image' },
      { src: assets.csl_4_2, alt: 'SME 4-2', type: 'image' },
      { src: assets.csl_4_3, alt: 'SME 4-3', type: 'image' },
      { src: assets.csl_4_4, alt: 'SME 4-4', type: 'image' },
      { src: assets.csl_4_5, alt: 'SME 4-5', type: 'image' },
    ],
    'SME 5': [
      { src: assets.csl_5, alt: 'SME 5-1', type: 'video' },
    ],
    'SME 6': [
      { src: assets.csl_6_1, alt: 'SME 6-1', type: 'image' },
      { src: assets.csl_6_2, alt: 'SME 6-2', type: 'image' },
      { src: assets.csl_6_3, alt: 'SME 6-3', type: 'image' },
      { src: assets.csl_6_4, alt: 'SME 6-4', type: 'image' },
    ],
    'SME 7': [
      { src: assets.csl_7, alt: 'SME 7-1', type: 'video' },
    ],
    'SME 8': [
      { src: assets.csl_8_1, alt: 'SME 8-1', type: 'image' },
      { src: assets.csl_8_2, alt: 'SME 8-2', type: 'image' },
      { src: assets.csl_8_3, alt: 'SME 8-3', type: 'image' },
      { src: assets.csl_8_4, alt: 'SME 8-4', type: 'image' },
      { src: assets.csl_8_5, alt: 'SME 8-5', type: 'image' },
    ],
    'SME 9': [
      { src: assets.csl_9, alt: 'SME 9-1', type: 'video' },
    ],
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  // Modal handlers
  const handleContentClick = (contentName) => {
    if (contentGalleries[contentName]) {
      setSelectedContent(contentName);
      setCurrentIndex(0);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedContent(null);
    setCurrentIndex(0);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    if (selectedContent && contentGalleries[selectedContent]) {
      const items = contentGalleries[selectedContent];
      setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    }
  };

  const handleNext = (e) => {
    e.stopPropagation();
    if (selectedContent && contentGalleries[selectedContent]) {
      const items = contentGalleries[selectedContent];
      setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <>
      <Navbar />
      <div className="casetwo-page">
        
        {/* COVER SECTION */}
        <section className="casetwo-cover-section">
          <div className="casetwo-cover-image-container">
            <img src={assets.cover_case_2} alt="LSEC Cover" draggable={false} />
            <div className="casetwo-cover-text-overlay">
              <p className="casetwo-cover-label">Growth Milestone</p>
              <h1 className="casetwo-cover-title">LITTLE SPROUTS EDUCATIONAL CENTER - ORTIGAS</h1>
              <p className="casetwo-cover-subtitle">Reached 364K Content views in a month.</p>
              <div className="casetwo-cover-tags">
                <span className="casetwo-cover-tag">Social Media & Content Strategy</span>
                <span className="casetwo-cover-tag">Short-form Video</span>
                <span className="casetwo-cover-tag">Posting and Scheduling</span>
              </div>
            </div>
          </div>
        </section>

        {/* DESCRIPTION SECTION */}
        <section className="casetwo-description-section">
          <p className="casetwo-description-text">
            LSEC-Ortigas was in its early stages and needed a partner to bring their marketing goals to life. Using a structured 3-month strategy, I built their digital foundation from scratch—focusing on brand awareness for parents in the Ortigas/Pasig area. The objective was to create a mix of educational and lead-gen content that showcased their unique offerings, from play-based learning to SPED-inclusive programs, and prepared them for sustainable growth.
          </p>
        </section>

        {/* CONTENT OVERVIEW SECTION */}
        <section className="casetwo-single-section">
          <div className="casetwo-single-container">
            <div className="casetwo-single-card" onClick={() => handleContentClick('content_overview')}>
              <img src={assets.co_case_2} alt="Content Overview" draggable={false} />
            </div>
          </div>
        </section>

        {/* PERFORMANCE & RESULTS */}
        <section className="casetwo-single-section">
          <div className="casetwo-single-container">
            <div className="casetwo-single-card" onClick={() => handleContentClick('performance_results')}>
              <img src={assets.pr_case_2} alt="Performance Results" draggable={false} />
            </div>
          </div>
        </section>

        {/* LOGO SECTION */}
        <section className="casetwo-logo-section">
          <img src={assets.logo} alt="Logo" className="casetwo-logo" draggable={false} />
        </section>

        {/* THE PAID AD SUCCESS */}
        <section className="casetwo-dual-section">
          <div className="casetwo-dual-container">
            <div className="casetwo-dual-card casetwo-dual-left" onClick={() => handleContentClick('paid_ad_success')}>
              <img src={assets.tpas_case_2} alt="Paid Ad Success" draggable={false} />
            </div>
            <div className="casetwo-dual-card casetwo-dual-right">
              <img src={assets.tpasc_case_2} alt="Paid Ad Content" draggable={false} />
            </div>
          </div>
        </section>

        {/* PARTNERSHIP SECTION */}
        <section className="casetwo-partnership-section">
          <h2 className="casetwo-section-title">THE PARTNERSHIP</h2>
          <p className="casetwo-partnership-text">
            As an intern with Taaky, I handled LSEC-Ortigas as my first major account. This involved weekly progress with the agency and bi-weekly analytics meetings with the owner to ensure our content pillars aligned with enrollment targets. I managed a high-frequency schedule, translating their curriculum into parent-friendly posts. A standout moment was an introductory short-form video I created—designed to be straightforward and parent-focused—which the owner eventually chose to use as their primary paid advertisement due to its strong performance.
          </p>
        </section>

        {/* BANNER PHOTO */}
        <section className="casetwo-banner-section">
          <img src={assets.banner_case_2} alt="Banner" className="casetwo-banner-image" draggable={false} />
        </section>

        {/* LOGO SECTION */}
        <section className="casetwo-logo-section">
          <img src={assets.logo} alt="Logo" className="casetwo-logo" draggable={false} />
        </section>

        {/* SOCIAL MEDIA EXECUTION SECTION */}
        <section className="casetwo-portfolio-section">
          <div className="casetwo-portfolio-container">
            <div className="casetwo-portfolio-main-container">
              <h2 className="casetwo-portfolio-title">SOCIAL MEDIA EXECUTION</h2>
              <div className="casetwo-portfolio-grid">
                {smeItems.map((item, index) => (
                  <div key={index} className="casetwo-portfolio-card" onClick={() => handleContentClick(item.name)}>
                    <div className="casetwo-portfolio-image-wrapper">
                      <img src={item.img} alt={item.name} draggable={false} />
                      <div className="casetwo-portfolio-overlay">
                        <img src={assets.logo} alt="Logo" className="casetwo-portfolio-overlay-logo" draggable={false} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* LOGO SECTION */}
        <section className="casetwo-logo-section">
          <img src={assets.logo} alt="Logo" className="casetwo-logo" draggable={false} />
        </section>

        {/* COPYWRITING SECTION */}
        <section className="casetwo-single-section">
          <div className="casetwo-single-container">
            <div className="casetwo-single-card" onClick={() => handleContentClick('copywriting')}>
              <img src={assets.copywriting_case_2} alt="Copywriting" draggable={false} />
            </div>
          </div>
        </section>

        {/* THE RESULT SECTION */}
        <section className="casetwo-result-section">
          <div className="casetwo-result-container">
            <div className="casetwo-result-image-wrapper">
              <img src={assets.the_result_case_2} alt="The Result" draggable={false} />
            </div>
            <div className="casetwo-result-content">
              <h2 className="casetwo-section-title">THE RESULT</h2>
              <p className="casetwo-result-text">
                By using clear, engageable language and highlighting the actual school environment, the content spoke directly to what parents were looking for. <span className="casetwo-result-highlight">The featured ad achieved 156K views and 130 likes,</span> helping increase visibility and generating a noticeable surge in inquiries via DMs and comments. Based on the engagement, the strategy effectively translated the school's values into a digital format that parents found informative, trustworthy, and easy to digest during the school's initial growth phase.
              </p>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="casetwo-cta-section">
          <h2 className="casetwo-cta-title">Build Your Vision With Us</h2>
          <button className="casetwo-cta-button" onClick={() => navigate('/contact')}>
            Work with me!
          </button>
        </section>

      </div>

      {/* MODAL - Direct Display with Navigation */}
      {isModalOpen && selectedContent && contentGalleries[selectedContent] && (
        <div className="casetwo-modal-overlay" onClick={handleCloseModal}>
          <div className="casetwo-modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="casetwo-modal-close" onClick={handleCloseModal}>
              <IoMdClose />
            </button>
            
            <div className="casetwo-modal-content">
              {contentGalleries[selectedContent][currentIndex].type === 'video' ? (
                <video 
                  src={contentGalleries[selectedContent][currentIndex].src}
                  controls
                  autoPlay
                  className="casetwo-modal-video"
                  controlsList="nodownload"
                  key={currentIndex}
                />
              ) : (
                <img 
                  src={contentGalleries[selectedContent][currentIndex].src}
                  alt={contentGalleries[selectedContent][currentIndex].alt}
                  draggable={false}
                  className="casetwo-modal-image"
                />
              )}
            </div>

            {/* Navigation - only show if multiple items */}
            {contentGalleries[selectedContent].length > 1 && (
              <>
                <button className="casetwo-modal-nav casetwo-modal-prev" onClick={handlePrev}>
                  <MdOutlineKeyboardArrowLeft />
                </button>
                <button className="casetwo-modal-nav casetwo-modal-next" onClick={handleNext}>
                  <MdKeyboardArrowRight />
                </button>
                <div className="casetwo-modal-counter">
                  {currentIndex + 1} / {contentGalleries[selectedContent].length}
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

export default CaseTwo;