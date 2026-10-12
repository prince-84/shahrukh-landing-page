"use client";

import React, { useState } from "react";
import Image from "next/image";

interface GalleryItem {
  id: string;
  tabLabel: string;
  badge: string;
  imageSrc: string;
  alt: string;
  title: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "exterior",
    tabLabel: "EXTERIOR",
    badge: "EXTERIOR",
    imageSrc: "/images/image1.webp",
    alt: "Shahrukhz Residences by Danube Iconic Tower Exterior View from Arabian Gulf",
    title: "Iconic Waterfront Architecture",
    description: "Towering luxury set against the Dubai skyline, surrounded by turquoise maritime waters and private yacht berths.",
  },
  {
    id: "entrance",
    tabLabel: "ENTRANCE",
    badge: "ENTRANCE",
    imageSrc: "/images/image2.webp",
    alt: "Shahrukhz Residences by Danube Grand Port-Cochère and Entrance Plaza",
    title: "Grand Port-Cochère & Lobby Entrance",
    description: "A majestic double-height arrival plaza lined with lush flora, valet parking, and bespoke architectural detailing.",
  },
  {
    id: "sky-pool",
    tabLabel: "SKY POOL",
    badge: "SKY POOL",
    imageSrc: "/images/image3.webp",
    alt: "Shahrukhz Residences by Danube Cantilever Sky Infinity Pool with City Skyline Vistas",
    title: "Cantilever Sky Infinity Pool",
    description: "An awe-inspiring cantilever pool suspended high above the coast, offering heated infinity edges and private lounges.",
  },
  {
    id: "balcony-view",
    tabLabel: "BALCONY VIEW",
    badge: "BALCONY VIEW",
    imageSrc: "/images/image4.webp",
    alt: "Shahrukhz Residences Private Balcony with Panoramic Ocean and Skyline Views",
    title: "Panoramic Ocean Balcony Vistas",
    description: "Expansive private terraces featuring glass balustrades that seamlessly merge with the endless Arabian Sea.",
  },
];

export function TabbedGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = galleryItems[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  return (
    <section className="gallery-section" id="gallery" aria-label="Shahrukhz Residences Property Gallery">
      <div className="gallery-container">
        {/* Section Header */}
        <div className="gallery-header">
          <div className="gallery-eyebrow">VISUAL SHOWCASE</div>
          <h2 className="gallery-title">EXPERIENCE SHAHRUKHZ RESIDENCES</h2>
          <p className="gallery-subtitle">
            Explore the architectural brilliance, grand entryways, and sky-high resort amenities of Danube&apos;s latest masterpiece.
          </p>

          {/* Interactive Modern Tabs */}
          <div className="gallery-tabs-nav" role="tablist" aria-label="Property Visual Perspectives">
            {galleryItems.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={item.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`gallery-panel-${item.id}`}
                  id={`gallery-tab-${item.id}`}
                  tabIndex={isActive ? 0 : -1}
                  className={`gallery-tab-btn ${isActive ? "active" : ""}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <span className="tab-dot" aria-hidden="true" />
                  {item.tabLabel}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Viewport */}
        <div
          className="gallery-stage"
          id={`gallery-panel-${activeItem.id}`}
          role="tabpanel"
          aria-labelledby={`gallery-tab-${activeItem.id}`}
        >
          {/* Main Visual with Smooth Fade Transitions */}
          <div className="gallery-image-viewport">
            {galleryItems.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={item.id}
                  className={`gallery-slide ${isActive ? "active-slide" : "inactive-slide"}`}
                  aria-hidden={!isActive}
                >
                  <Image
                    src={item.imageSrc}
                    alt={item.alt}
                    width={1920}
                    height={1080}
                    priority={index === 0}
                    sizes="(max-width: 1200px) 100vw, 1200px"
                    className="gallery-img"
                  />

                  {/* Corner Badge matching user screenshot */}
                  <div className="gallery-corner-badge" aria-label={`View category: ${item.badge}`}>
                    {item.badge}
                  </div>

                  {/* Caption info bar */}
                  <div className="gallery-caption-overlay">
                    <div className="gallery-caption-content">
                      <h3 className="gallery-caption-title">{item.title}</h3>
                      <p className="gallery-caption-desc">{item.description}</p>
                    </div>
                    <div className="gallery-counter">
                      {String(index + 1).padStart(2, "0")} / {String(galleryItems.length).padStart(2, "0")}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="gallery-nav-arrow arrow-left"
              aria-label="Previous Perspective"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="gallery-nav-arrow arrow-right"
              aria-label="Next Perspective"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          {/* Interactive Thumbnails Bar Below */}
          <div className="gallery-thumbs-row" role="region" aria-label="Quick Select Thumbnails">
            {galleryItems.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={`thumb-${item.id}`}
                  className={`gallery-thumb-item ${isActive ? "active-thumb" : ""}`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Switch to ${item.tabLabel}`}
                >
                  <div className="thumb-img-wrap">
                    <Image
                      src={item.imageSrc}
                      alt={`Thumbnail of ${item.tabLabel}`}
                      width={280}
                      height={158}
                      sizes="(max-width: 768px) 25vw, 160px"
                      className="thumb-img"
                    />
                  </div>
                  <span className="thumb-title">{item.tabLabel}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
