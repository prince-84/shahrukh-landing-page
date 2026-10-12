"use client";

import React, { useEffect } from "react";

interface AmenityModalItem {
  id: string;
  name: string;
  icon: React.ReactNode;
}

interface AmenitiesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const allAmenities: AmenityModalItem[] = [
  {
    id: "aqua-lounge",
    name: "Aqua Lounge",
    icon: (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 34c4 1.5 8 1.5 12 0s8-1.5 12 0 8 1.5 12 0" />
        <path d="M10 26l8-10 14 6 6-4" />
        <path d="M12 28h12" />
        <path d="M34 22v6" />
        <circle cx="36" cy="12" r="3" />
      </svg>
    ),
  },
  {
    id: "aquatic-gym",
    name: "Aquatic Gym",
    icon: (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 12h32M14 12v18M34 12v18" />
        <path d="M20 22h8M24 16v14" />
        <path d="M6 38c6 1.8 12 1.8 18 0s12-1.8 18 0" />
      </svg>
    ),
  },
  {
    id: "badminton-court",
    name: "Badminton Court",
    icon: (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="18" cy="18" rx="8" ry="10" transform="rotate(-30 18 18)" />
        <path d="M12 28l-6 12M15 13l6 10M11 17l10 6" />
        <circle cx="36" cy="20" r="3" />
        <path d="M36 23l4 8-6-2" />
      </svg>
    ),
  },
  {
    id: "basketball",
    name: "Basketball",
    icon: (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="10" width="32" height="18" rx="2" />
        <rect x="18" y="14" width="12" height="10" />
        <path d="M16 28h16l-3 10h-10z" />
        <path d="M21 28l1 10M27 28l-1 10" />
      </svg>
    ),
  },
  {
    id: "bbq-area",
    name: "BBQ Area",
    icon: (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 20h20a10 10 0 01-20 0z" />
        <path d="M14 20a10 10 0 0120 0" strokeDasharray="3 3" />
        <path d="M16 26l-6 16M32 26l6 16M24 26v16" />
        <path d="M20 12c0-3 4-3 4-6M28 14c0-3 3-3 3-5" />
      </svg>
    ),
  },
  {
    id: "business-center",
    name: "Business Center",
    icon: (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="10" y="14" width="28" height="18" rx="2" />
        <path d="M6 36h36M24 32v4M18 20h12" />
        <circle cx="24" cy="10" r="2" />
      </svg>
    ),
  },
  {
    id: "cabana-seating",
    name: "Cabana Seating",
    icon: (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 20L24 10l16 10" />
        <path d="M12 20v18M36 20v18" />
        <path d="M12 22c4 4 4 10 0 14M36 22c-4 4-4 10 0 14" />
        <rect x="18" y="28" width="12" height="8" rx="1" />
      </svg>
    ),
  },
  {
    id: "cigar-lounge",
    name: "Cigar Lounge",
    icon: (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="12" y="24" width="22" height="7" rx="2" transform="rotate(-35 12 24)" />
        <path d="M31 10c2-3 5-3 5-6M36 14c2-3 5-3 5-6" />
        <path d="M15 28l-4 3" />
      </svg>
    ),
  },
  {
    id: "club-house",
    name: "Club House",
    icon: (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 24L24 12l14 12" />
        <path d="M14 22v16h20V22" />
        <path d="M21 38v-8h6v8" />
        <path d="M21 15v-5h6v5" />
      </svg>
    ),
  },
  {
    id: "cricket",
    name: "Cricket",
    icon: (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="16" y="8" width="6" height="24" rx="2" transform="rotate(-35 16 8)" />
        <path d="M26 26l6 8" />
        <circle cx="14" cy="34" r="4" />
      </svg>
    ),
  },
  {
    id: "cricket-court",
    name: "Cricket Court",
    icon: (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 16v22M24 16v22M32 16v22" />
        <path d="M14 16h20" />
        <circle cx="10" cy="34" r="3" />
      </svg>
    ),
  },
  {
    id: "cyro-therapy",
    name: "Cyro Therapy",
    icon: (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="14" r="4" />
        <path d="M16 24h16v14a4 4 0 01-4 4h-8a4 4 0 01-4-4V24z" />
        <path d="M12 28h4M32 28h4M24 8v2" />
        <path d="M20 30v6M28 30v6" />
      </svg>
    ),
  },
  {
    id: "drone-docking-station",
    name: "Drone Docking Station",
    icon: (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="4" />
        <path d="M20 20L12 12M28 20l8-8M20 28l-8 8M28 28l8 8" />
        <circle cx="12" cy="12" r="3" />
        <circle cx="36" cy="12" r="3" />
        <circle cx="12" cy="36" r="3" />
        <circle cx="36" cy="36" r="3" />
      </svg>
    ),
  },
  {
    id: "golf-simulator",
    name: "Golf Simulator",
    icon: (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 12l12 6-12 6V36" />
        <ellipse cx="28" cy="36" rx="10" ry="4" />
        <circle cx="33" cy="36" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "health-club",
    name: "Health Club",
    icon: (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 28c4-1 8 1 12 3l10-4c2 1 4 4 2 6l-12 6-12-5z" />
        <path d="M26 12c-3-3-8 0-5 5l5 5 5-5c3-5-2-8-5-5z" />
      </svg>
    ),
  },
  {
    id: "ice-bath",
    name: "Ice Bath",
    icon: (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 22h32v8a6 6 0 01-6 6H14a6 6 0 01-6-6v-8z" />
        <path d="M12 14v8M10 14h6" />
        <path d="M14 36l-2 4M34 36l2 4" />
        <circle cx="24" cy="20" r="1.5" />
        <circle cx="30" cy="18" r="1.5" />
      </svg>
    ),
  },
  {
    id: "indoor-games",
    name: "Indoor Games",
    icon: (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="10" y="16" width="28" height="18" rx="6" />
        <path d="M16 25h6M19 22v6" />
        <circle cx="29" cy="23" r="1.5" fill="currentColor" />
        <circle cx="33" cy="27" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "indoor-gym",
    name: "Indoor Gym",
    icon: (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 12h32M14 12v26M34 12v26" />
        <rect x="20" y="20" width="8" height="4" rx="1" />
        <path d="M24 12v8M24 24v14" />
      </svg>
    ),
  },
  {
    id: "infinity-pool",
    name: "Infinity Pool",
    icon: (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 30c5 2 10 2 15 0s10-2 15 0 5 1 6 0" />
        <path d="M6 36c5 2 10 2 15 0s10-2 15 0 5 1 6 0" />
        <path d="M28 12v14M34 12v14M28 16h6" />
      </svg>
    ),
  },
  {
    id: "kids-day-care",
    name: "Kids Day Care",
    icon: (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="20" cy="14" r="3" />
        <path d="M17 22h6l-2 14h-2z" />
        <circle cx="30" cy="20" r="2.5" />
        <path d="M28 26h4l-1 10h-2z" />
        <path d="M22 24l6 4" />
      </svg>
    ),
  },
  {
    id: "kids-play-area",
    name: "Kids Play Area",
    icon: (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 16l8-6 8 6v18H12z" />
        <path d="M28 22l8 8v6" />
        <path d="M8 36h32" />
      </svg>
    ),
  },
  {
    id: "kids-pool",
    name: "Kids Pool",
    icon: (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="16" r="3.5" />
        <path d="M20 22l4 4 4-4" />
        <path d="M6 32c6 2 12 2 18 0s12-2 18 0" />
        <path d="M6 38c6 2 12 2 18 0s12-2 18 0" />
      </svg>
    ),
  },
  {
    id: "kids-splash-pool",
    name: "Kids Splash Pool",
    icon: (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 10v20M14 20a10 10 0 0120 0z" />
        <circle cx="16" cy="12" r="1.5" />
        <circle cx="32" cy="12" r="1.5" />
        <circle cx="24" cy="6" r="1.5" />
        <path d="M8 36c8 2 16 2 24 0s8-1 8 0" />
      </svg>
    ),
  },
  {
    id: "kids-wall-climbing",
    name: "Kids wall climbing",
    icon: (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="28" cy="12" r="3" />
        <path d="M26 18l-4 6 6 4-2 8M22 24l-6-2M28 28l6 2" />
        <circle cx="12" cy="16" r="1.5" fill="currentColor" />
        <circle cx="36" cy="20" r="1.5" fill="currentColor" />
        <circle cx="14" cy="34" r="1.5" fill="currentColor" />
        <circle cx="34" cy="38" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "mini-basketball",
    name: "Mini Basketball",
    icon: (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="14" y="8" width="20" height="28" rx="2" />
        <rect x="18" y="12" width="12" height="8" />
        <path d="M19 20h10l-2 6h-6z" />
        <circle cx="24" cy="30" r="3" />
      </svg>
    ),
  },
  {
    id: "padel-tennis",
    name: "Padel Tennis",
    icon: (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="20" cy="18" rx="8" ry="10" transform="rotate(-30 20 18)" />
        <circle cx="18" cy="16" r="1" fill="currentColor" />
        <circle cx="22" cy="16" r="1" fill="currentColor" />
        <circle cx="20" cy="20" r="1" fill="currentColor" />
        <path d="M14 26l-6 12" />
        <circle cx="34" cy="32" r="3" />
      </svg>
    ),
  },
  {
    id: "party-hall",
    name: "Party Hall",
    icon: (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 12c8 4 24 4 32 0" />
        <path d="M14 13l2 5M24 14l2 5M34 13l2 5" />
        <path d="M18 24l4 8-3 6M30 24l-4 8 3 6" />
        <path d="M18 28h12" />
        <circle cx="20" cy="20" r="1" />
        <circle cx="28" cy="20" r="1" />
      </svg>
    ),
  },
  {
    id: "pool",
    name: "Pool",
    icon: (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="32" cy="18" r="3" />
        <path d="M16 26l6-4 6 4-4 4" />
        <path d="M6 34c6 2 12 2 18 0s12-2 18 0" />
        <path d="M6 40c6 2 12 2 18 0s12-2 18 0" />
      </svg>
    ),
  },
  {
    id: "prayer-hall",
    name: "Prayer Hall",
    icon: (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 10c-6 4-8 8-8 14v12h16V24c0-6-2-10-8-14z" />
        <path d="M24 8v4" />
        <path d="M21 36v-6c0-2 1-3 3-3s3 1 3 3v6" />
        <path d="M12 28v8M36 28v8" />
      </svg>
    ),
  },
  {
    id: "running-track",
    name: "Running Track",
    icon: (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="28" cy="12" r="3" />
        <path d="M22 18l4 4-2 6 6 4M24 22l-6-2M24 28l-4 6" />
        <path d="M8 38c8-2 24-2 32 0" />
      </svg>
    ),
  },
  {
    id: "serenity-pool",
    name: "Serenity Pool",
    icon: (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="34" cy="14" r="3" />
        <path d="M18 14l-6 12M12 20h12" />
        <path d="M6 34c6 2 12 2 18 0s12-2 18 0" />
        <path d="M6 40c6 2 12 2 18 0s12-2 18 0" />
      </svg>
    ),
  },
  {
    id: "snooker",
    name: "Snooker",
    icon: (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="14" r="2.5" />
        <circle cx="20.5" cy="20" r="2.5" />
        <circle cx="27.5" cy="20" r="2.5" />
        <circle cx="17" cy="26" r="2.5" />
        <circle cx="24" cy="26" r="2.5" />
        <circle cx="31" cy="26" r="2.5" />
        <circle cx="13.5" cy="32" r="2.5" />
        <circle cx="20.5" cy="32" r="2.5" />
        <circle cx="27.5" cy="32" r="2.5" />
        <circle cx="34.5" cy="32" r="2.5" />
      </svg>
    ),
  },
  {
    id: "spa",
    name: "SPA",
    icon: (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="24" cy="34" rx="8" ry="3" />
        <ellipse cx="24" cy="28" rx="6" ry="2.5" />
        <ellipse cx="24" cy="23" rx="4" ry="2" />
        <rect x="12" y="24" width="4" height="10" rx="1" />
        <path d="M14 20c0-2 1-3 1-3s1 1 1 3c0 1-.5 1-1 1s-1 0-1-1z" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "tennis-court",
    name: "Tennis Court",
    icon: (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="20" cy="18" rx="8" ry="10" transform="rotate(-30 20 18)" />
        <path d="M14 26l-6 12M17 12l6 12M12 17l12 6" />
        <circle cx="34" cy="32" r="3" />
      </svg>
    ),
  },
  {
    id: "trampoline-area",
    name: "Trampoline Area",
    icon: (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="24" cy="30" rx="14" ry="4" />
        <path d="M14 32l-2 6M34 32l2 6M24 34v6" />
        <circle cx="24" cy="12" r="2.5" />
        <path d="M24 16v6l-4 3M24 22l4 3" />
      </svg>
    ),
  },
  {
    id: "water-sunken-seating",
    name: "Water Sunken Seating",
    icon: (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 28a8 8 0 0116 0h4v6H10v-6z" />
        <path d="M18 14l-4 10M14 18h8" />
        <path d="M6 38c6 1.5 12 1.5 18 0s12-1.5 18 0" />
      </svg>
    ),
  },
];

export function AmenitiesModal({ isOpen, onClose }: AmenitiesModalProps) {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="amenities-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="amenities-modal-title"
    >
      <div
        className="amenities-modal-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button at top right */}
        <button
          onClick={onClose}
          className="amenities-modal-close-btn"
          aria-label="Close Amenities Modal"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Hidden Title for Accessibility */}
        <h2 id="amenities-modal-title" className="sr-only">
          All 36+ Luxury Amenities - Shahrukhz Residences by Danube
        </h2>

        {/* Amenities 6-Column Grid */}
        <div className="amenities-modal-grid">
          {allAmenities.map((item) => (
            <div key={item.id} className="amenity-grid-cell">
              <div className="amenity-grid-icon" aria-hidden="true">
                {item.icon}
              </div>
              <span className="amenity-grid-name">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
