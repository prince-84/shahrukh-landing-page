"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile drawer on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="danube-navbar" role="banner">
      <div className="navbar-container">
        {/* Brand Logo */}
        <a href="/" className="danube-logo-link" aria-label="Shahrukhz Residences by Danube Homepage" onClick={closeMenu}>
          <Image
            src="/images/SHARUK KHAN LOGO-03.svg"
            alt="Shahrukhz Residences by Danube"
            width={220}
            height={64}
            className="navbar-brand-logo-img"
            priority
          />
        </a>

        {/* Desktop Navigation */}
        <nav role="navigation" aria-label="Primary Navigation">
          <ul className="danube-nav-menu">
            <li>
              <a href="/prices" className="danube-menu-item">
                PRICE
              </a>
            </li>
            <li>
              <a href="/payment-plan" className="danube-menu-item">
                PAYMENT PLAN
              </a>
            </li>
            <li>
              <a href="/#amenities" className="danube-menu-item">
                AMENITIES
              </a>
            </li>
            <li>
              <a href="/#media-gallery" className="danube-menu-item">
                GALLERY
              </a>
            </li>
          </ul>
        </nav>

        {/* Desktop / Tablet Header Actions */}
        <div className="navbar-actions">
          <a href="/#inquire" className="btn-contact" aria-label="Contact Danube Properties">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span className="btn-contact-text">CONTACT US</span>
          </a>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            className={`navbar-hamburger-btn ${isMobileMenuOpen ? "active" : ""}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
          >
            <span className="hamburger-bar bar-1" />
            <span className="hamburger-bar bar-2" />
            <span className="hamburger-bar bar-3" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer & Backdrop */}
      <div
        className={`mobile-menu-backdrop ${isMobileMenuOpen ? "open" : ""}`}
        onClick={closeMenu}
        aria-hidden={!isMobileMenuOpen}
      />

      <nav
        id="mobile-navigation-drawer"
        className={`danube-mobile-drawer ${isMobileMenuOpen ? "open" : ""}`}
        aria-label="Mobile Navigation"
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="mobile-drawer-header">
          <a href="/" className="mobile-drawer-logo" onClick={closeMenu}>
            <Image
              src="/images/SHARUK KHAN LOGO-03.svg"
              alt="Shahrukhz Residences"
              width={180}
              height={50}
              className="navbar-brand-logo-img"
            />
          </a>
          <button
            type="button"
            onClick={closeMenu}
            className="mobile-drawer-close-btn"
            aria-label="Close navigation"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <ul className="mobile-nav-links">
          <li>
            <a href="/prices" className="mobile-nav-item" onClick={closeMenu}>
              <span className="mobile-nav-label">PRICE &amp; INVENTORY</span>
              <span className="mobile-nav-arrow">&rarr;</span>
            </a>
          </li>
          <li>
            <a href="/payment-plan" className="mobile-nav-item" onClick={closeMenu}>
              <span className="mobile-nav-label">30/70 PAYMENT PLAN</span>
              <span className="mobile-nav-arrow">&rarr;</span>
            </a>
          </li>
          <li>
            <a href="/#amenities" className="mobile-nav-item" onClick={closeMenu}>
              <span className="mobile-nav-label">40+ RESORT AMENITIES</span>
              <span className="mobile-nav-arrow">&rarr;</span>
            </a>
          </li>
          <li>
            <a href="/#gallery" className="mobile-nav-item" onClick={closeMenu}>
              <span className="mobile-nav-label">VISUAL SHOWCASE</span>
              <span className="mobile-nav-arrow">&rarr;</span>
            </a>
          </li>
          <li>
            <a href="/#media-gallery" className="mobile-nav-item" onClick={closeMenu}>
              <span className="mobile-nav-label">MEDIA GALLERY</span>
              <span className="mobile-nav-arrow">&rarr;</span>
            </a>
          </li>
          <li>
            <a href="/#connectivity" className="mobile-nav-item" onClick={closeMenu}>
              <span className="mobile-nav-label">WHY MARITIME CITY</span>
              <span className="mobile-nav-arrow">&rarr;</span>
            </a>
          </li>
          <li>
            <a href="/#faq" className="mobile-nav-item" onClick={closeMenu}>
              <span className="mobile-nav-label">FAQS</span>
              <span className="mobile-nav-arrow">&rarr;</span>
            </a>
          </li>
        </ul>

        <div className="mobile-drawer-cta">
          <a href="/#inquire" className="mobile-drawer-btn-inquire" onClick={closeMenu}>
            REGISTER YOUR INTEREST
          </a>
          <a
            href="https://wa.me/971500000000?text=Hi%2C%20I%20am%20interested%20in%20Shahrukhz%20Residences%20by%20Danube"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-drawer-btn-whatsapp"
            onClick={closeMenu}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            CHAT ON WHATSAPP
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
