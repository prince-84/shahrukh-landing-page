import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="danube-footer" role="contentinfo">
      <div className="container">
        {/* Brand Logo & Project Tagline */}
        <div className="footer-brand-center">
          <a href="/" className="footer-logo-link" aria-label="Shahrukhz Residences by Danube Homepage">
            <Image
              src="/images/SHARUK KHAN LOGO-03.svg"
              alt="Shahrukhz Residences by Danube"
              width={320}
              height={95}
              className="footer-brand-logo-img"
            />
          </a>
          <p className="footer-tagline">
            Shahrukhz Residences by Danube • Dubai Maritime City
          </p>
        </div>

        {/* Disclaimer Text Block */}
        <div className="footer-disclaimer-box" role="region" aria-label="Disclaimer">
          <p className="footer-disclaimer-text">
            <strong>Disclaimer:</strong> The information provided on this website is for general informational purposes only and does not constitute an offer, contract, warranty, or financial/investment advice. All plans, specifications, prices, amenities, dimensions, and architectural renderings are tentative, conceptual, and subject to change by the developer without prior notice as per regulatory approvals. Project developed by Danube Properties LLC and registered with the Dubai Real Estate Regulatory Agency (RERA). Escrow accounts established in accordance with UAE real estate regulations. Prices and availability are subject to change.
          </p>
        </div>

        {/* Legal & Policy Navigation Links */}
        <nav className="footer-legal-nav" aria-label="Legal and Information Links">
          <a href="/prices" className="footer-legal-link">
            Price
          </a>
          <span className="footer-nav-separator" aria-hidden="true">|</span>
          <a href="/payment-plan" className="footer-legal-link">
            Payment Plan
          </a>
          <span className="footer-nav-separator" aria-hidden="true">|</span>
          <a href="/privacy-policy" className="footer-legal-link">
            Privacy Policy
          </a>
          <span className="footer-nav-separator" aria-hidden="true">|</span>
          <a href="/terms-and-conditions" className="footer-legal-link">
            Terms and Condition
          </a>
          <span className="footer-nav-separator" aria-hidden="true">|</span>
          <a href="/disclaimer" className="footer-legal-link">
            Disclaimer
          </a>
        </nav>
      </div>
    </footer>
  );
}
export default Footer;
