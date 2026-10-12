"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

interface MediaImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
}

const mediaImages: MediaImage[] = [
  {
    id: "media-1",
    src: "/images/media1.webp",
    alt: "Shahrukhz Residences - Master Bedroom Suite with Private Ocean Balcony",
    caption: "Master Bedroom Suite",
  },
  {
    id: "media-2",
    src: "/images/media2.webp",
    alt: "Shahrukhz Residences - Designer Living Room with Skyline Terrace",
    caption: "Designer Living Lounge",
  },
  {
    id: "media-3",
    src: "/images/media3.webp",
    alt: "Shahrukhz Residences - Panoramic Sea View Dining and Living Lounge",
    caption: "Panoramic Ocean Dining",
  },
  {
    id: "media-4",
    src: "/images/media4.webp",
    alt: "Shahrukhz Residences - Grand Entrance Port-Cochère Architecture",
    caption: "Grand Entrance Plaza",
  },
  {
    id: "media-5",
    src: "/images/media5.webp",
    alt: "Shahrukhz Residences - Italian Marble Spa Bathroom Suite",
    caption: "Spa Bathroom Retreat",
  },
];

export function MediaImageGallery() {
  const [activeIndex, setActiveIndex] = useState(1); // Default to slide 2 (index 1) to match the screenshot
  const [itemsPerView, setItemsPerView] = useState(3);
  const containerRef = useRef<HTMLDivElement>(null);

  // Responsive itemsPerView
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };
    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const maxIndex = mediaImages.length - 1;

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Calculate sliding offset
  // If activeIndex is in the middle of a 3-item view, offset by activeIndex - 1 (clamped) or circular
  const getOffsetPercent = () => {
    if (itemsPerView === 1) {
      return activeIndex * 100;
    }
    if (itemsPerView === 2) {
      const maxOffset = mediaImages.length - 2;
      const clamped = Math.min(Math.max(activeIndex, 0), maxOffset);
      return clamped * 50;
    }
    // For 3 items:
    // If activeIndex is 0 -> offset 0
    // If activeIndex is 1 -> offset 0 (shows 0, 1, 2 with 1 in middle)
    // If activeIndex is 2 -> offset 1 * (100/3) (shows 1, 2, 3 with 2 in middle)
    // If activeIndex is 3 -> offset 2 * (100/3) (shows 2, 3, 4 with 3 in middle)
    // If activeIndex is 4 -> offset 2 * (100/3)
    const targetOffset = Math.max(0, Math.min(activeIndex - 1, mediaImages.length - 3));
    return targetOffset * (100 / 3);
  };

  return (
    <section className="media-gallery-section" id="media-gallery" aria-labelledby="media-gallery-heading">
      <div className="container">
        {/* Header row matching user screenshot */}
        <div className="media-gallery-header-row">
          <div className="media-gallery-title-box">
            <span className="media-gallery-eyebrow">MEDIA</span>
            <h2 id="media-gallery-heading" className="media-gallery-title">
              IMAGE GALLERY
            </h2>
          </div>

          {/* Navigation Arrows at top right */}
          <div className="media-gallery-arrows" aria-label="Gallery Navigation">
            <button
              onClick={handlePrev}
              className="media-gallery-arrow-btn"
              aria-label="Previous gallery image"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="media-gallery-arrow-btn"
              aria-label="Next gallery image"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div className="media-gallery-viewport" ref={containerRef}>
          <div
            className="media-gallery-track"
            style={{
              transform: `translateX(-${getOffsetPercent()}%)`,
            }}
          >
            {mediaImages.map((item, index) => {
              const isCentered = index === activeIndex;
              return (
                <div
                  key={item.id}
                  className={`media-gallery-card ${isCentered ? "active-card" : ""}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="media-gallery-img-wrapper">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={800}
                      height={550}
                      className="media-gallery-img"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={index < 3}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Horizontal Dash Indicators matching screenshot */}
        <div className="media-gallery-pagination" role="tablist" aria-label="Gallery Pagination">
          {mediaImages.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={`dash-${item.id}`}
                role="tab"
                aria-selected={isActive}
                className={`media-gallery-dash ${isActive ? "active" : ""}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to slide ${index + 1}: ${item.caption}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
