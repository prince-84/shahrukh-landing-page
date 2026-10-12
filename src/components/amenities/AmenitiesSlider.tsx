"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { AmenitiesModal } from "./AmenitiesModal";

interface AmenitySlide {
  id: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  alt: string;
}

const amenitySlides: AmenitySlide[] = [
  {
    id: "infinity-33",
    title: "INFINITY 33",
    subtitle: "A relaxing beachside space where you can unwind, refresh, and enjoy peaceful coastal living.",
    imageSrc: "/images/infinity_pool-2.webp",
    alt: "Shahrukhz Residences Infinity 33 Sky Pool and Relaxing Beachside Lounge",
  },
  {
    id: "kings-club-deck",
    title: "KING'S CLUB DECK",
    subtitle: "A private rooftop club with beautiful sea views. Enjoy the sunset, spend time with friends, and relax in style above the city.",
    imageSrc: "/images/shahrukhz-residences-by-danube-kings-club-deck.webp",
    alt: "Shahrukhz Residences King's Club Deck Rooftop Observatory and Lounge",
  },
  {
    id: "indoor-gym",
    title: "INDOOR GYM",
    subtitle: "Stay fit and active in a modern gym while enjoying beautiful views of the open sea.",
    imageSrc: "/images/shahrukhz-residences-by-danube-indoor-gym.webp",
    alt: "Shahrukhz Residences Luxury Indoor Gym Overlooking Skyline and Sea",
  },
  {
    id: "longevity-lounge",
    title: "LONGEVITY LOUNGE",
    subtitle: "Enjoy a modern wellness space with treatments such as cryotherapy, oxygen therapy, red light therapy, compression boots, lymphatic body rollers, and smart wellness assessments. These facilities are designed to help you relax, recover, and feel refreshed.",
    imageSrc: "/images/shahrukhz-residences-by-danube-longevity-lounge.webp",
    alt: "Shahrukhz Residences Longevity Wellness Lounge and Hydrotherapy Spa",
  },
  {
    id: "beach-lagoon",
    title: "BEACH LAGOON",
    subtitle: "Relax by a beautiful lagoon with clear waters and enjoy a peaceful beachside atmosphere that makes every day feel like a tropical holiday.",
    imageSrc: "/images/shahrukhz-residences-by-danube-beach-lagoon.webp",
    alt: "Shahrukhz Residences Private Podium Beach Lagoon and Tropical Waters",
  },
  {
    id: "sports-hub",
    title: "SPORTS HUB",
    subtitle: "A lively sports area designed to keep you active, boost your energy, and help you enjoy your favourite activities.",
    imageSrc: "/images/shahrukhz-residences-by-danube-sports-hub.webp",
    alt: "Shahrukhz Residences Multi-Sport Arena and Padel Tennis Courts",
  },
];

export function AmenitiesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % amenitySlides.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + amenitySlides.length) % amenitySlides.length);
  }, []);

  // Optional subtle autoplay with pause on hover
  useEffect(() => {
    if (isPaused || isModalOpen) return;
    const interval = setInterval(handleNext, 6000);
    return () => clearInterval(interval);
  }, [isPaused, isModalOpen, handleNext]);

  return (
    <section
      className="amenities-banner-section"
      id="amenities-showcase"
      aria-labelledby="amenities-banner-title"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container">
        <h2 id="amenities-banner-title" className="amenities-main-title">
          AMENITIES
        </h2>
      </div>

      <div className="amenities-slider-container" role="region" aria-label="Amenities Panoramic Showcase">
        {/* Main Panoramic Slide Viewport */}
        <div className="amenities-panoramic-wrapper">
          {amenitySlides.map((slide, index) => {
            const isActive = index === currentIndex;
            return (
              <div
                key={slide.id}
                className={`amenity-slide-item ${isActive ? "active-slide" : "inactive-slide"}`}
                aria-hidden={!isActive}
              >
                <Image
                  src={slide.imageSrc}
                  alt={slide.alt}
                  width={1920}
                  height={1080}
                  priority={index === 0}
                  className="amenities-panoramic-img"
                  sizes="100vw"
                />

                {/* Corner Title Badge */}
                <div className="amenity-badge-tag">
                  {slide.title}
                </div>

                {/* Bottom Caption Overlay */}
                <div className="amenity-caption-bar">
                  <div className="amenity-caption-text">
                    <h3 className="amenity-caption-heading">{slide.title}</h3>
                    <p className="amenity-caption-sub">{slide.subtitle}</p>
                  </div>
                  <div className="amenity-slide-number">
                    {String(index + 1).padStart(2, "0")} / {String(amenitySlides.length).padStart(2, "0")}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="amenity-nav-btn btn-prev"
            aria-label="Previous Amenity"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="amenity-nav-btn btn-next"
            aria-label="Next Amenity"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Minimal Slide Dots & View All Amenities Button */}
        <div className="amenities-cta-container">
          <div className="amenity-minimal-dots" role="tablist" aria-label="Amenities Slides">
            {amenitySlides.map((slide, index) => (
              <button
                key={`dot-${slide.id}`}
                role="tab"
                aria-selected={index === currentIndex}
                className={`amenity-minimal-dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}: ${slide.title}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="btn-view-all-amenities"
            aria-haspopup="dialog"
            aria-expanded={isModalOpen}
          >
            VIEW ALL AMENITIES
          </button>
        </div>
      </div>

      {/* 36+ All Amenities Full Screen / Popup Modal */}
      <AmenitiesModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
