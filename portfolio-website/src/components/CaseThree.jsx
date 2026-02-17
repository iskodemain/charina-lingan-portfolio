import React, { useContext, useState, useEffect } from 'react';
import '../styles/CaseThree.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { assets } from '../assets/assets';
import { ProfileContext } from '../context/ProfileContext';
import { IoMdClose } from "react-icons/io";
import { MdOutlineKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const CaseThree = () => {
  const { navigate } = useContext(ProfileContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const contentGalleries = {
    'created_brand_identity': [
        { src: assets.cbi_case_3, alt: 'Created Brand Identity', type: 'image' },
    ],
    'pbi_1': [
        { src: assets.pbi_1, alt: 'Previous Brand Identity 1', type: 'image' },
    ],
    'pbi_2': [
        { src: assets.pbi_2, alt: 'Previous Brand Identity 2', type: 'image' },
    ],
    'pbi_3': [
        { src: assets.pbi_3, alt: 'Previous Brand Identity 3', type: 'image' },
    ],
    // Individual tickets
    'gt': [
        { src: assets.gt, alt: 'General Ticket', type: 'image' },
    ],
    'st': [
        { src: assets.st, alt: 'Standard Ticket', type: 'image' },
    ],
    'vt': [
        { src: assets.vt, alt: 'VIP Ticket', type: 'image' },
    ],
    // Individual howlers
    'howlers_left': [
        { src: assets.howlers_left, alt: 'Howlers Left', type: 'image' },
    ],
    'howlers_right': [
        { src: assets.howlers_right, alt: 'Howlers Right', type: 'image' },
    ],
    };

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
      <div className="casethree-page">

        {/* COVER SECTION */}
        <section className="casethree-cover-section">
          <div className="casethree-cover-image-container">
            <img src={assets.cover_case_3} alt="Howlers Cover" draggable={false} />
            <div className="casethree-cover-text-overlay">
              <p className="casethree-cover-label">Brand Design</p>
              <h1 className="casethree-cover-title">HOWLERS FESTIVAL</h1>
              <p className="casethree-cover-subtitle">How I designed the face of Howlers Festival.</p>
              <div className="casethree-cover-tags">
                <span className="casethree-cover-tag">Brand Identity Design</span>
              </div>
            </div>
          </div>
        </section>

        {/* DESCRIPTION SECTION */}
        <section className="casethree-description-section">
          <p className="casethree-description-text">
            Howlers Festival was entering a new era and needed a consistent brand identity that went beyond a simple logotype. Using the theme "Find Your Tribe," the objective was to transition the festival into a more grounded and symbolic brand. I focused on building a visual foundation from scratch to create a "face" for the festival that felt raw, meaningful, and deeply connected to its community.
          </p>
        </section>

        {/* CREATED BRAND IDENTITY */}
        <section className="casethree-single-section">
          <div className="casethree-single-container">
            <div
              className="casethree-single-card"
              onClick={() => handleContentClick('created_brand_identity')}
            >
              <img src={assets.cbi_case_3} alt="Created Brand Identity" draggable={false} />
            </div>
          </div>
        </section>

        {/* PREVIOUS BRAND IDENTITY */}
        <section className="casethree-pbi-section">
          <div className="casethree-pbi-container">
            <p className="casethree-pbi-label">PREVIOUS BRAND IDENTITY</p>
            <div className="casethree-pbi-grid">
              <div
                className="casethree-pbi-card"
                onClick={() => handleContentClick('pbi_1')}
              >
                <img src={assets.pbi_1} alt="Previous Brand Identity 1" draggable={false} />
              </div>
              <div
                className="casethree-pbi-card"
                onClick={() => handleContentClick('pbi_2')}
              >
                <img src={assets.pbi_2} alt="Previous Brand Identity 2" draggable={false} />
              </div>
              <div
                className="casethree-pbi-card"
                onClick={() => handleContentClick('pbi_3')}
              >
                <img src={assets.pbi_3} alt="Previous Brand Identity 3" draggable={false} />
              </div>
            </div>
          </div>
        </section>

        {/* LOGO SECTION */}
        <section className="casethree-logo-section">
          <img src={assets.logo} alt="Logo" className="casethree-logo" draggable={false} />
        </section>

        {/* PARTNERSHIP SECTION */}
        <section className="casethree-partnership-section">
          <h2 className="casethree-section-title">THE PARTNERSHIP</h2>
          <p className="casethree-partnership-text">
            As the lead creative in collaboration with the Howlers team and a marketing agency, I was responsible for finalising the brand's new visual and verbal identity. This involved hands on strategy meetings to ensure the "Tribal" concept aligned with the event's high-energy requirements. I managed the design of the Wolf Mascot and the selection of the typography, ensuring that every asset—from social media to physical merchandise—carried the same rugged and welcoming spirit.
          </p>
        </section>

        {/* FIND YOUR TRIBE SECTION */}
        <section className="casethree-fyt-section">
          <img src={assets.fyt_case_3} alt="Find Your Tribe" draggable={false} className="casethree-fyt-image" />
        </section>

        {/* BRAND SECTION */}
        <section className="casethree-brand-section">
          <img src={assets.fytbb_case_3} alt="Brand Colors" draggable={false} className="casethree-brand-image" />
        </section>

        {/* CHAT SECTION */}
        <section className="casethree-chat-section">
          <img src={assets.chat_case_3} alt="Chat" draggable={false} className="casethree-chat-image" />
        </section>

        {/* THREE TICKET SECTION */}
        <section className="casethree-ticket-section">
            <div className="casethree-ticket-grid">
                <div
                className="casethree-ticket-card"
                onClick={() => handleContentClick('gt')}
                >
                <img src={assets.gt} alt="General Ticket" draggable={false} />
                </div>
                <div
                className="casethree-ticket-card"
                onClick={() => handleContentClick('st')}
                >
                <img src={assets.st} alt="Standard Ticket" draggable={false} />

                </div>
                <div
                className="casethree-ticket-card"
                onClick={() => handleContentClick('vt')}
                >
                <img src={assets.vt} alt="VIP Ticket" draggable={false} />

                </div>
            </div>
        </section>

        {/* HOWLERS SECTION */}
        <section className="casethree-howlers-section">
            <div className="casethree-howlers-grid">
                <div
                className="casethree-howlers-card"
                onClick={() => handleContentClick('howlers_left')}
                >
                <img src={assets.howlers_left} alt="Howlers Left" draggable={false} />
                </div>
                <div
                className="casethree-howlers-card"
                onClick={() => handleContentClick('howlers_right')}
                >
                <img src={assets.howlers_right} alt="Howlers Right" draggable={false} />
                </div>
            </div>
        </section>

        {/* THE RESULT SECTION */}
        <section className="casethree-result-section">
          <div className="casethree-result-container">
            <div className="casethree-result-image-wrapper">
              <img src={assets.the_result_case_3} alt="The Result" draggable={false} />
            </div>
            <div className="casethree-result-content">
              <h2 className="casethree-section-title">THE RESULT</h2>
              <p className="casethree-result-text">
                By introducing the Wolf Mascot and a strong and aligned color palette, the brand gained a recognizable <span className="casethree-result-highlight">"face" that represents unity and family.</span> I also restructured the community engagement tone to reflect Filipino hospitality, shifting from inconsistent replies to the more inclusive "Ka-Howlers" and "Howl Fam." The result was a cohesive, premium identity that successfully transformed the festival's digital presence into a "homecoming" for its tribe.
              </p>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="casethree-cta-section">
          <h2 className="casethree-cta-title">Build Your Vision With Us</h2>
          <button className="casethree-cta-button" onClick={() => navigate('/contact')}>
            Work with me!
          </button>
        </section>

      </div>

      {/* MODAL */}
      {isModalOpen && selectedContent && contentGalleries[selectedContent] && (
        <div className="casethree-modal-overlay" onClick={handleCloseModal}>
          <div className="casethree-modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="casethree-modal-close" onClick={handleCloseModal}>
              <IoMdClose />
            </button>
            <div className="casethree-modal-content">
              {contentGalleries[selectedContent][currentIndex].type === 'video' ? (
                <video
                  src={contentGalleries[selectedContent][currentIndex].src}
                  controls
                  autoPlay
                  className="casethree-modal-video"
                  controlsList="nodownload"
                  key={currentIndex}
                />
              ) : (
                <img
                  src={contentGalleries[selectedContent][currentIndex].src}
                  alt={contentGalleries[selectedContent][currentIndex].alt}
                  draggable={false}
                  className="casethree-modal-image"
                />
              )}
            </div>
            {contentGalleries[selectedContent].length > 1 && (
              <>
                <button className="casethree-modal-nav casethree-modal-prev" onClick={handlePrev}>
                  <MdOutlineKeyboardArrowLeft />
                </button>
                <button className="casethree-modal-nav casethree-modal-next" onClick={handleNext}>
                  <MdKeyboardArrowRight />
                </button>
                <div className="casethree-modal-counter">
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

export default CaseThree;