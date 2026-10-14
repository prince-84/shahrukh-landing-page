"use client";

import React, { useState, useEffect } from "react";
import { WriteReviewModal } from "./WriteReviewModal";

interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  buyerType: string;
  verified: boolean;
  title: string;
  comment: string;
}

const initialReviews: Review[] = [
  {
    id: "rev-1",
    name: "Tariq Al-Hashemi",
    location: "Abu Dhabi, UAE",
    rating: 5,
    date: "2026-10-10",
    buyerType: "Investor",
    verified: true,
    title: "Prime waterfront location & unbeatable Danube payment plan",
    comment: "Booked a 2-bedroom unit with panoramic ocean view. Dubai Maritime City is developing rapidly, and having a direct waterfront address with Danube's 30/70 structure makes the ROI projection very attractive before the 2029 handover."
  },
  {
    id: "rev-2",
    name: "Marcus & Sophie Vance",
    location: "London, United Kingdom",
    rating: 5,
    date: "2026-10-06",
    buyerType: "End-User",
    verified: true,
    title: "Exceptional interiors designed by Gauri Khan",
    comment: "We visited the experience centre during our trip to Dubai. The attention to detail, fully furnished handover package, and over 40 resort amenities including the Infinity 33 sky pool convinced us immediately. Truly a landmark residence."
  },
  {
    id: "rev-3",
    name: "Rajesh Singhania",
    location: "Mumbai, India",
    rating: 5,
    date: "2026-09-28",
    buyerType: "Investor",
    verified: true,
    title: "Seamless booking and premium Maritime City growth",
    comment: "Danube has consistently delivered quality. The strategic connectivity to Port Rashid boat station and Downtown within 10-15 minutes ensures strong future capital appreciation and high rental yields."
  },
  {
    id: "rev-4",
    name: "Ksenia Petrova",
    location: "Dubai Marina, UAE",
    rating: 5,
    date: "2026-09-22",
    buyerType: "Homebuyer",
    verified: true,
    title: "The longevity lounge and private beach lagoon are unmatched",
    comment: "Finding a coastal home with cryotherapy, red light spa, and a dedicated podium beach lagoon in Dubai is rare. The floor plans maximize open sea vistas from every balcony."
  }
];

export function TestimonialsSection() {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [filter, setFilter] = useState<string>("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    fetch("/api/testimonials")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.success && Array.isArray(data.reviews) && data.reviews.length > 0) {
          setReviews(data.reviews);
        }
      })
      .catch(() => {});
  }, []);

  const handleReviewSubmitted = (newReview: Review) => {
    setReviews((prev) => [newReview, ...prev]);
  };

  const filteredReviews = reviews.filter((r) => {
    if (filter === "investor") return r.buyerType.toLowerCase().includes("investor");
    if (filter === "homebuyer") return r.buyerType.toLowerCase().includes("homebuyer") || r.buyerType.toLowerCase().includes("end-user");
    if (filter === "5star") return r.rating === 5;
    return true;
  });

  const displayedReviews = filteredReviews.slice(0, visibleCount);

  return (
    <section className="testimonials-section" id="testimonials" aria-labelledby="testimonials-heading">
      <div className="container">
        {/* Section Header */}
        <div className="testimonials-header-row">
          <div className="testimonials-header-left">
            <span className="testimonials-eyebrow">— CLIENT PERSPECTIVES &amp; REPUTATION</span>
            <h2 id="testimonials-heading" className="testimonials-main-title">
              WHAT BUYERS &amp; INVESTORS SAY
            </h2>
          </div>

          <div className="testimonials-header-right">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="btn-write-review-cta"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>
              WRITE A REVIEW
            </button>
          </div>
        </div>

        {/* Rating Scoreboard Banner */}
        <div className="testimonials-scoreboard">
          <div className="score-summary-col">
            <div className="score-big-num">4.9</div>
            <div className="score-stars-box">
              <div className="score-stars-row" aria-label="Rating 4.9 out of 5 stars">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i} className="star-gold">{star}</span>
                ))}
              </div>
              <span className="score-count-text">Based on {reviews.length}+ Verified Inquiries &amp; Buyers</span>
            </div>
          </div>

          <div className="score-features-row">
            <div className="score-feature-badge">
              <span className="feature-icon">💎</span>
              <span className="feature-text">Interiors by Gauri Khan</span>
            </div>
            <div className="score-feature-badge">
              <span className="feature-icon">🌊</span>
              <span className="feature-text">Dubai Maritime City Waterfront</span>
            </div>
            <div className="score-feature-badge">
              <span className="feature-icon">📈</span>
              <span className="feature-text">30/70 Danube Payment Plan</span>
            </div>
            <div className="score-feature-badge">
              <span className="feature-icon">🏊‍♂️</span>
              <span className="feature-text">40+ Resort Amenities</span>
            </div>
          </div>
        </div>

        {/* Filter Pills Bar */}
        <div className="testimonials-filter-bar" role="tablist" aria-label="Filter testimonials">
          <button
            type="button"
            className={`filter-pill-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All Reviews ({reviews.length})
          </button>
          <button
            type="button"
            className={`filter-pill-btn ${filter === "investor" ? "active" : ""}`}
            onClick={() => setFilter("investor")}
          >
            Investors
          </button>
          <button
            type="button"
            className={`filter-pill-btn ${filter === "homebuyer" ? "active" : ""}`}
            onClick={() => setFilter("homebuyer")}
          >
            Homebuyers &amp; Residents
          </button>
          <button
            type="button"
            className={`filter-pill-btn ${filter === "5star" ? "active" : ""}`}
            onClick={() => setFilter("5star")}
          >
            5-Star Reviews
          </button>
        </div>

        {/* Reviews Cards Grid */}
        <div className="testimonials-cards-grid">
          {displayedReviews.map((item) => (
            <article key={item.id} className="testimonial-card">
              <div className="card-top-row">
                <div className="card-rating-stars" aria-label={`${item.rating} stars`}>
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <span key={i} className="star-gold">★</span>
                  ))}
                </div>
                {item.verified && (
                  <span className="card-verified-tag">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Verified {item.buyerType}
                  </span>
                )}
              </div>

              <h3 className="testimonial-card-title">{item.title}</h3>
              <p className="testimonial-card-comment">"{item.comment}"</p>

              <div className="card-author-footer">
                <div className="card-author-info">
                  <div className="card-author-avatar">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <strong className="card-author-name">{item.name}</strong>
                    <span className="card-author-location">{item.location}</span>
                  </div>
                </div>
                <time className="card-date">{item.date}</time>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button if many reviews */}
        {filteredReviews.length > visibleCount && (
          <div className="testimonials-footer-actions">
            <button
              type="button"
              className="btn-load-more-reviews"
              onClick={() => setVisibleCount((prev) => prev + 6)}
            >
              SHOW MORE REVIEWS ({filteredReviews.length - visibleCount} REMAINING)
            </button>
          </div>
        )}
      </div>

      {/* Review Modal Form */}
      <WriteReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onReviewSubmitted={handleReviewSubmitted}
      />
    </section>
  );
}

export default TestimonialsSection;
