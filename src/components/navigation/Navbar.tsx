import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export function Navbar() {
  return (
    <header className="danube-navbar" role="banner">
      <div className="navbar-container">
        <a href="/" className="danube-logo-link" aria-label="Shahrukhz Residences by Danube Homepage">
          <Image
            src="/images/SHARUK KHAN LOGO-03.svg"
            alt="Shahrukhz Residences by Danube"
            width={220}
            height={64}
            className="navbar-brand-logo-img"
            priority
          />
        </a>

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

        <div className="navbar-actions">
          <a href="/#inquire" className="btn-contact">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            CONTACT US
          </a>
        </div>
      </div>
    </header>
  );
}
export default Navbar;
