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
  const touchStartX = React.useRef<number | null>(null);
  const touchStartY = React.useRef<number | null>(null);

  const activeItem = galleryItems[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  const handleSelectTab = (index: number) => {
    setActiveIndex(index);
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      handleNext();
    } else if (e.key === "ArrowLeft") {
      handlePrev();
    }
  };

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    const diffY = touchStartY.current - e.changedTouches[0].clientY;

    // Only trigger horizontal swipe if movement is primarily horizontal and > 40px
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
      if (diffX > 0) {
        handleNext(); // swipe left -> next
      } else {
        handlePrev(); // swipe right -> prev
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
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
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`gallery-panel-${item.id}`}
                  id={`gallery-tab-${item.id}`}
                  tabIndex={0}
                  className={`gallery-tab-btn ${isActive ? "active" : ""}`}
                  onClick={() => handleSelectTab(index)}
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
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          {/* Main Visual with Smooth Fade Transitions & Touch Swipe */}
          <div
            className="gallery-image-viewport"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
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
                    priority={index === 0 || index === activeIndex}
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
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="gallery-nav-arrow arrow-left"
              aria-label="Previous Perspective"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
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
                  type="button"
                  className={`gallery-thumb-item ${isActive ? "active-thumb" : ""}`}
                  onClick={() => handleSelectTab(index)}
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
