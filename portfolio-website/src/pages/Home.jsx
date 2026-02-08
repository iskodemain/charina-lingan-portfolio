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
    { img: assets.ps_2, category: 'PROFESSIONAL SERVICES', name: 'AI-enabled Social Agency', description: 'Content Producer | Video Editor' },
    { img: assets.ps_1, category: 'PROFESSIONAL SERVICES', name: 'Digital Marketing Agency', description: 'Social Media Management | Visual Designer' },
    { img: assets.ps_3, category: 'PROFESSIONAL SERVICES', name: 'Social Media Agency', description: 'Content Producer | Visual Designer' },
    { img: assets.ps_4, category: 'PROFESSIONAL SERVICES', name: 'Commercial Cleaning Property', description: 'Content Producer | Video Editor' },
    { img: assets.ps_5, category: 'PROFESSIONAL SERVICES', name: 'Cleaning Services', description: 'Content Producer | Visual Designer' },
    { img: assets.hr_2, category: 'HOSPITALITY & RENTALS', name: 'Property Management', description: 'Content Producer | Visual Design' },
    { img: assets.hr_1, category: 'HOSPITALITY & RENTALS', name: 'Vacation Rentals', description: 'Graphic Designer' },
    { img: assets.fc_1, category: 'FAMILY & CARE', name: 'Natural Dog Treats', description: 'Graphic Designer' },
    { img: assets.fbs_1, category: 'FOOD & BEVERAGES', name: "Churro Café", description: 'Content Producer | Video Editor' },
    { img: assets.fbs_2, category: 'FOOD & BEVERAGES', name: 'Mexican Coffeehouse', description: 'Content Producer | Video Editor' },
    { img: assets.personality_2, category: 'PERSONALITY', name: 'CG Artist', description: 'Video Editor' },
    { img: assets.personality_1, category: 'PERSONALITY', name: 'Media Kit Template', description: 'Graphic Design' },
    { img: assets.ps_6, category: 'PROFESSIONAL SERVICES', name: 'Digital Mentorship Platform', description: 'Graphic Design' },
  ];

  // Portfolio galleries - easily expandable for other portfolios
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

    'AI-enabled Social Agency': {
      'ASA 1': [
        { type: 'video', src: assets.one_asa_1, alt: 'ONE ASA 1' }
      ],
      'ASA 2': [
        { type: 'video', src: assets.one_asa_2, alt: 'ONE ASA 2' },
      ],
      'ASA 3': [
        { type: 'video', src: assets.one_asa_3, alt: 'ONE ASA 3' }
      ],
      'ASA 4': [
        { type: 'video', src: assets.one_asa_4, alt: 'ONE ASA 4' }
      ],
      'ASA 5': [
        { type: 'video', src: assets.one_asa_5, alt: 'ONE ASA 5' },
      ],
      'ASA 6': [
        { type: 'video', src: assets.one_asa_6, alt: 'ONE ASA 6' }
      ],
      'ASA 7': [
        { type: 'video', src: assets.one_asa_7, alt: 'ONE ASA 7' }
      ],
      'ASA 8': [
        { type: 'video', src: assets.one_asa_8, alt: 'ONE ASA 8' },
      ],
      'ASA 9': [
        { type: 'video', src: assets.one_asa_9, alt: 'ONE ASA 9' }
      ]
    },

    'Social Media Agency': {
      'SMA 1': [
        { type: 'image', src: assets.one_sma_1, alt: 'ONE SMA 1' }
      ],
      'SMA 2': [
        { type: 'video', src: assets.one_sma_2, alt: 'ONE SMA 2' },
      ],
      'SMA 3': [
        { type: 'image', src: assets.one_sma_3, alt: 'ONE SMA 3' },
        { type: 'image', src: assets.two_sma_3, alt: 'TWO SMA 3' },
        { type: 'image', src: assets.three_sma_3, alt: 'THREE SMA 3' },
        { type: 'image', src: assets.four_sma_3, alt: 'FOUR SMA 3' },
        { type: 'image', src: assets.five_sma_3, alt: 'FIVE SMA 3' }
      ],
      'SMA 4': [
        { type: 'image', src: assets.one_sma_4, alt: 'ONE SMA 4' }
      ],
      'SMA 5': [
        { type: 'video', src: assets.one_sma_5, alt: 'ONE SMA 5' },
      ],
      'SMA 6': [
        { type: 'image', src: assets.one_sma_6, alt: 'ONE SMA 6' }
      ],
      'SMA 7': [
        { type: 'image', src: assets.one_sma_7, alt: 'ONE SMA 7' }
      ],
      'SMA 8': [
        { type: 'image', src: assets.one_sma_8, alt: 'ONE SMA 8' },
        { type: 'image', src: assets.two_sma_8, alt: 'TWO SMA 8' },
        { type: 'image', src: assets.three_sma_8, alt: 'THREE SMA 8' }
      ],
      'SMA 9': [
        { type: 'image', src: assets.one_sma_9, alt: 'ONE SMA 9' }
      ]
    },

    'Commercial Cleaning Property': {
      'CCP 1': [
        { type: 'video', src: assets.one_ccp_1, alt: 'ONE CCP 1' }
      ],
      'CCP 2': [
        { type: 'video', src: assets.one_ccp_2, alt: 'ONE CCP 2' },
      ],
      'CCP 3': [
        { type: 'video', src: assets.one_ccp_3, alt: 'ONE CCP 3' }
      ],
      'CCP 4': [
        { type: 'video', src: assets.one_ccp_4, alt: 'ONE CCP 4' }
      ],
      'CCP 5': [
        { type: 'video', src: assets.one_ccp_5, alt: 'ONE CCP 5' },
      ],
      'CCP 6': [
        { type: 'video', src: assets.one_ccp_6, alt: 'ONE CCP 6' }
      ],
      'CCP 7': [
        { type: 'video', src: assets.one_ccp_7, alt: 'ONE CCP 7' }
      ],
      'CCP 8': [
        { type: 'video', src: assets.one_ccp_8, alt: 'ONE CCP 8' },
      ],
      'CCP 9': [
        { type: 'video', src: assets.one_ccp_9, alt: 'ONE CCP 9' }
      ]
    },

    'Cleaning Services': {
      'CS 1': [
        { type: 'image', src: assets.one_cs_1, alt: 'ONE CS 1' }
      ],
      'CS 2': [
        { type: 'image', src: assets.one_cs_2, alt: 'ONE CS 2' },
      ],
      'CS 3': [
        { type: 'image', src: assets.one_cs_3, alt: 'ONE CS 3' }
      ],
      'CS 4': [
        { type: 'image', src: assets.one_cs_4, alt: 'ONE CS 4' }
      ],
      'CS 5': [
        { type: 'image', src: assets.one_cs_5, alt: 'ONE CS 5' },
      ],
      'CS 6': [
        { type: 'image', src: assets.one_cs_6, alt: 'ONE CS 6' }
      ],
      'CS 7': [
        { type: 'video', src: assets.one_cs_7, alt: 'ONE CS 7' }
      ],
      'CS 8': [
        { type: 'video', src: assets.one_cs_8, alt: 'ONE CS 8' },
      ],
      'CS 9': [
        { type: 'image', src: assets.one_cs_9, alt: 'ONE CS 9' },
        { type: 'image', src: assets.two_cs_9, alt: 'TWO CS 9' }
      ]
    },

    'Property Management': {
      'PM 1': [
        { type: 'image', src: assets.one_pm_1, alt: 'ONE PM 1' },
        { type: 'image', src: assets.two_pm_1, alt: 'TWO PM 1' }
      ],
      'PM 2': [
        { type: 'video', src: assets.one_pm_2, alt: 'ONE PM 2' },
      ],
      'PM 3': [
        { type: 'image', src: assets.one_pm_3, alt: 'ONE PM 3' },
        { type: 'image', src: assets.two_pm_3, alt: 'TWO PM 3' },
        { type: 'image', src: assets.three_pm_3, alt: 'THREE PM 3' },
        { type: 'image', src: assets.four_pm_3, alt: 'FOUR PM 3' },
        { type: 'image', src: assets.five_pm_3, alt: 'FIVE PM 3' },
      ],
      'PM 4': [
        { type: 'image', src: assets.one_pm_4, alt: 'ONE PM 4' },
        { type: 'image', src: assets.two_pm_4, alt: 'TWO PM 4' },
        { type: 'image', src: assets.three_pm_4, alt: 'THREE PM 4' }
      ],
      'PM 5': [
        { type: 'video', src: assets.one_pm_5, alt: 'ONE PM 5' }
      ],
      'PM 6': [
        { type: 'video', src: assets.one_pm_6, alt: 'ONE PM 6' }
      ],
      'PM 7': [
        { type: 'image', src: assets.one_pm_7, alt: 'ONE PM 7' },
        { type: 'image', src: assets.two_pm_7, alt: 'TWO PM 7' }
      ],
      'PM 8': [
        { type: 'image', src: assets.one_pm_8, alt: 'ONE PM 8' },
        { type: 'image', src: assets.two_pm_8, alt: 'TWO PM 8' },
        { type: 'image', src: assets.three_pm_8, alt: 'THREE PM 8' },
        { type: 'image', src: assets.four_pm_8, alt: 'FOUR PM 8' },
        { type: 'image', src: assets.five_pm_8, alt: 'FIVE PM 8' }
      ],
      'PM 9': [
        { type: 'image', src: assets.one_pm_9, alt: 'ONE PM 9' }
      ]
    },

    'Natural Dog Treats': {
      'NDT 1': [
        { type: 'image', src: assets.one_ndt_1, alt: 'ONE NDT 1' }
      ],
      'NDT 2': [
        { type: 'image', src: assets.one_ndt_2, alt: 'ONE NDT 2' },
      ],
      'NDT 3': [
        { type: 'image', src: assets.one_ndt_3, alt: 'ONE NDT 3' },
        { type: 'image', src: assets.two_ndt_3, alt: 'TWO NDT 3' },
        { type: 'image', src: assets.three_ndt_3, alt: 'THREE NDT 3' },
        { type: 'image', src: assets.four_ndt_3, alt: 'FOUR NDT 3' },
        { type: 'image', src: assets.five_ndt_3, alt: 'FIVE NDT 3' },
        { type: 'image', src: assets.six_ndt_3, alt: 'SIX NDT 3' },
        { type: 'image', src: assets.seven_ndt_3, alt: 'SEVEN NDT 3' },
      ],
      'NDT 4': [
        { type: 'image', src: assets.one_ndt_4, alt: 'ONE NDT 4' }
      ],
      'NDT 5': [
        { type: 'image', src: assets.one_ndt_5, alt: 'ONE NDT 5' }
      ],
      'NDT 6': [
        { type: 'image', src: assets.one_ndt_6, alt: 'ONE NDT 6' }
      ],
      'NDT 7': [
        { type: 'image', src: assets.one_ndt_7, alt: 'ONE NDT 7' },
        { type: 'image', src: assets.two_ndt_7, alt: 'TWO NDT 7' },
        { type: 'image', src: assets.three_ndt_7, alt: 'THREE NDT 7' },
        { type: 'image', src: assets.four_ndt_7, alt: 'FOUR NDT 7' },
        { type: 'image', src: assets.five_ndt_7, alt: 'FIVE NDT 7' },
      ],
      'NDT 8': [
        { type: 'image', src: assets.one_ndt_8, alt: 'ONE NDT 8' },
        { type: 'image', src: assets.two_ndt_8, alt: 'TWO NDT 8' },
      ],
      'NDT 9': [
        { type: 'image', src: assets.one_ndt_9, alt: 'ONE NDT 9' }
      ]
    },

    'Churro Café': {
      'CC 1': [
        { type: 'video', src: assets.one_cc_1, alt: 'ONE CC 1' }
      ],
      'CC 2': [
        { type: 'video', src: assets.one_cc_2, alt: 'ONE CC 2' },
      ],
      'CC 3': [
        { type: 'video', src: assets.one_cc_3, alt: 'ONE CC 3' }
      ],
    },

    'Mexican Coffeehouse': {
      'MC 1': [
        { type: 'video', src: assets.one_mc_1, alt: 'ONE MC 1' }
      ],
      'MC 2': [
        { type: 'video', src: assets.one_mc_2, alt: 'ONE MC 2' },
      ],
      'MC 3': [
        { type: 'video', src: assets.one_mc_3, alt: 'ONE MC 3' }
      ],
      'MC 4': [
        { type: 'video', src: assets.one_mc_4, alt: 'ONE MC 4' }
      ],
      'MC 5': [
        { type: 'video', src: assets.one_mc_5, alt: 'ONE MC 5' },
      ],
      'MC 6': [
        { type: 'video', src: assets.one_mc_6, alt: 'ONE MC 6' }
      ]
    },

    'CG Artist': {
      'CGA 1': [
        { type: 'video', src: assets.one_cga_1, alt: 'ONE CGA 1' }
      ],
      'CGA 2': [
        { type: 'video', src: assets.one_cga_2, alt: 'ONE CGA 2' },
      ],
      'CGA 3': [
        { type: 'video', src: assets.one_cga_3, alt: 'ONE CGA 3' }
      ],
      'CGA 4': [
        { type: 'video', src: assets.one_cga_4, alt: 'ONE CGA 4' }
      ],
      'CGA 5': [
        { type: 'video', src: assets.one_cga_5, alt: 'ONE CGA 5' },
      ],
      'CGA 6': [
        { type: 'video', src: assets.one_cga_6, alt: 'ONE CGA 6' }
      ],
      'CGA 7': [
        { type: 'video', src: assets.one_cga_7, alt: 'ONE CGA 7' }
      ],
      'CGA 8': [
        { type: 'video', src: assets.one_cga_8, alt: 'ONE CGA 8' },
      ],
      'CGA 9': [
        { type: 'video', src: assets.one_cga_9, alt: 'ONE CGA 9' }
      ]
    },

    'Digital Mentorship Platform': {
      'DMP 1': [
        { type: 'image', src: assets.one_dmp_1, alt: 'ONE DMP 1' }
      ],
      'DMP 2': [
        { type: 'image', src: assets.one_dmp_2, alt: 'ONE DMP 2' },
      ],
      'DMP 3': [
        { type: 'image', src: assets.one_dmp_3, alt: 'ONE DMP 3' }
      ],
    },



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
              {/* First Set - Original 8 Cards */}
              <div className="testimonial-card">
                <img src={assets.testimonial_1} alt="Testimonial 1" draggable={false}/>
              </div>
              <div className="testimonial-card">
                <img src={assets.testimonial_2} alt="Testimonial 2" draggable={false}/>
              </div>
              <div className="testimonial-card">
                <img src={assets.testimonial_3} alt="Testimonial 3" draggable={false}/>
              </div>
              <div className="testimonial-card">
                <img src={assets.testimonial_4} alt="Testimonial 4" draggable={false}/>
              </div>
              <div className="testimonial-card">
                <img src={assets.testimonial_5} alt="Testimonial 5" draggable={false}/>
              </div>
              <div className="testimonial-card">
                <img src={assets.testimonial_6} alt="Testimonial 6" draggable={false}/>
              </div>
              <div className="testimonial-card">
                <img src={assets.testimonial_7} alt="Testimonial 7" draggable={false}/>
              </div>
              <div className="testimonial-card">
                <img src={assets.testimonial_8} alt="Testimonial 8" draggable={false}/>
              </div>

              {/* Second Set - Duplicate for Seamless Loop */}
              <div className="testimonial-card">
                <img src={assets.testimonial_1} alt="Testimonial 1" draggable={false}/>
              </div>
              <div className="testimonial-card">
                <img src={assets.testimonial_2} alt="Testimonial 2" draggable={false}/>
              </div>
              <div className="testimonial-card">
                <img src={assets.testimonial_3} alt="Testimonial 3" draggable={false}/>
              </div>
              <div className="testimonial-card">
                <img src={assets.testimonial_4} alt="Testimonial 4" draggable={false}/>
              </div>
              <div className="testimonial-card">
                <img src={assets.testimonial_5} alt="Testimonial 5" draggable={false}/>
              </div>
              <div className="testimonial-card">
                <img src={assets.testimonial_6} alt="Testimonial 6" draggable={false}/>
              </div>
              <div className="testimonial-card">
                <img src={assets.testimonial_7} alt="Testimonial 7" draggable={false}/>
              </div>
              <div className="testimonial-card">
                <img src={assets.testimonial_8} alt="Testimonial 8" draggable={false}/>
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
                    className={`portfolio-modal-item ${image.type === 'video' ? 'portfolio-modal-video-item' : 'portfolio-modal-image-item'}`}
                    onClick={() => handleImageClick(image.alt)}
                  >
                    {image.type === 'video' ? (
                      <video src={image.src} controls autoPlay controlsList="nodownload" className="portfolio-modal-video-preview"/>
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