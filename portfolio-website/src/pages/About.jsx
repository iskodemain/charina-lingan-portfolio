import React, { useContext, useEffect, useState } from 'react'
import '../styles/About.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { assets } from '../assets/assets'
import { ProfileContext } from '../context/ProfileContext'

const About = () => {
  const { navigate } = useContext(ProfileContext);
  return (
    <>
      <Navbar />
      <div className="about-page-container">
        {/* Hero Section - Quote and Description */}
        <section className="about-hero-section">
          <div className="about-hero-content">
            <div className="about-quote-container">
              <h1 className="about-quote">
                <span className="quote-mark">"</span>
                You have to <span className="highlight-text">believe</span>for it to happen<span className="quote-mark">"</span>
              </h1>
            </div>
            
            <div className="about-description-container">
              <p className="about-intro">
                I'm Charina, a <strong>Visual Content Producer</strong> who loves turning big ideas into visuals that actually work. For the past 4 years, I've been helping brands show their vision through Brand Identity, Video Storytelling, and Creative Direction.
              </p>
              
              <p className="about-purpose">
                I don't just make things look pretty; I make sure every graphic and video has a purpose. Beyond the visuals, I'm here to help you stay consistent by handling your entire content system—from the first plan down to the final post. This way, you can focus on running your business while I keep your creative engine running smoothly.
              </p>
              
              <p className="about-goal">
                My goal is simple: to make sure <strong>your brand doesn't just show up, but truly stands out in the digital space.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Cover Image Section */}
        <section className="about-cover-section">
          <img src={assets.about_cover} alt="About Cover" className="about-cover-image" draggable={false}/>
        </section>

        {/* Brands Section - DO NOT MODIFY */}
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

        {/* CTA Section - Ready to Build Together */}
        <section className="about-cta-section">
          <div className="cta-content">
            <h2 className="cta-title">READY TO BUILD TOGETHER?</h2>
            <div className="cta-buttons">
              <button 
                className="cta-button primary-cta"
                onClick={() => navigate('/contact')}
              >
                Work with me!
              </button>
              <button 
                className="cta-button secondary-cta"
                onClick={() => navigate('/services')}
              >
                Services
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default About