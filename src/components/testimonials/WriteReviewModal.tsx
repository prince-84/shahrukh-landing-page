"use client";

import React, { useState } from "react";

interface WriteReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onReviewSubmitted: (newReview: any) => void;
}

export function WriteReviewModal({ isOpen, onClose, onReviewSubmitted }: WriteReviewModalProps) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [buyerType, setBuyerType] = useState("Investor");
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) {
      setErrorMsg("Please enter your name and review comments.");
      return;
    }

    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          location: location.trim() || "Dubai, UAE",
          rating,
          buyerType,
          title: title.trim() || "Verified Review",
          comment: comment.trim(),
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to submit review");
      }

      setIsSuccess(true);
      if (data.review) {
        onReviewSubmitted(data.review);
      }
      setTimeout(() => {
        setIsSuccess(false);
        setName("");
        setLocation("");
        setTitle("");
        setComment("");
        setRating(5);
        onClose();
      }, 1800);
    } catch (err: any) {
      setErrorMsg(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="review-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="review-modal-title">
      <div className="review-modal-card" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          onClick={onClose}
          className="review-modal-close-btn"
          aria-label="Close review dialog"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {isSuccess ? (
          <div className="review-modal-success">
            <div className="review-success-icon" aria-hidden="true">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 className="review-success-title">THANK YOU FOR YOUR FEEDBACK!</h3>
            <p className="review-success-desc">
              Your review for Shahrukhz Residences by Danube has been published successfully.
            </p>
          </div>
        ) : (
          <>
            <div className="review-modal-header">
              <span className="review-modal-eyebrow">— SHARE YOUR EXPERIENCE</span>
              <h3 id="review-modal-title" className="review-modal-title">
                WRITE A REVIEW
              </h3>
              <p className="review-modal-subtitle">
                Share your impressions on Shahrukhz Residences by Danube, Dubai Maritime City.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="review-modal-form">
              {/* Star Rating Selector */}
              <div className="review-form-group">
                <label className="review-form-label">YOUR RATING*</label>
                <div className="star-rating-picker" role="radiogroup" aria-label="Select star rating">
                  {[1, 2, 3, 4, 5].map((star) => {
                    const isFilled = (hoverRating || rating) >= star;
                    return (
                      <button
                        type="button"
                        key={star}
                        className="star-pick-btn"
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        onClick={() => setRating(star)}
                        aria-label={`${star} star`}
                      >
                        <svg
                          width="26"
                          height="26"
                          viewBox="0 0 24 24"
                          fill={isFilled ? "#bfa483" : "none"}
                          stroke={isFilled ? "#bfa483" : "#cbd5e1"}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      </button>
                    );
                  })}
                  <span className="star-rating-label-value">{rating} / 5 Stars</span>
                </div>
              </div>

              {/* Name & Location Row */}
              <div className="review-form-row">
                <div className="review-form-group">
                  <label htmlFor="rev-name" className="review-form-label">YOUR NAME*</label>
                  <input
                    id="rev-name"
                    type="text"
                    required
                    placeholder="e.g. Tariq Al-Mansoori"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="review-input"
                  />
                </div>

                <div className="review-form-group">
                  <label htmlFor="rev-location" className="review-form-label">LOCATION / CITY</label>
                  <input
                    id="rev-location"
                    type="text"
                    placeholder="e.g. Dubai, UAE"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="review-input"
                  />
                </div>
              </div>

              {/* Buyer Type & Title Row */}
              <div className="review-form-row">
                <div className="review-form-group">
                  <label htmlFor="rev-type" className="review-form-label">YOU ARE A...</label>
                  <select
                    id="rev-type"
                    value={buyerType}
                    onChange={(e) => setBuyerType(e.target.value)}
                    className="review-select"
                  >
                    <option value="Investor">Investor</option>
                    <option value="Homebuyer">Homebuyer</option>
                    <option value="End-User">End-User / Resident</option>
                  </select>
                </div>

                <div className="review-form-group">
                  <label htmlFor="rev-title" className="review-form-label">REVIEW TITLE</label>
                  <input
                    id="rev-title"
                    type="text"
                    placeholder="e.g. Waterfront living & amazing 30/70 plan"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="review-input"
                  />
                </div>
              </div>

              {/* Comments */}
              <div className="review-form-group">
                <label htmlFor="rev-comment" className="review-form-label">YOUR REVIEW COMMENTS*</label>
                <textarea
                  id="rev-comment"
                  required
                  rows={4}
                  placeholder="Share details about the location, amenities, interiors by Gauri Khan, or payment terms..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="review-textarea"
                />
              </div>

              {errorMsg && <p className="review-error-text">{errorMsg}</p>}

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-submit-review"
              >
                {isSubmitting ? "SUBMITTING..." : "POST REVIEW"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default WriteReviewModal;
