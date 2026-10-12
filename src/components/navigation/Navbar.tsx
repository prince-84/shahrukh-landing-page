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

          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}?text=Hello,%20I%20am%20interested%20in%20Shahrukhz%20Residences%20by%20Danube`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
            aria-label="Contact Danube Properties on WhatsApp"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.073-1.115-.062-.257-.083-.591-.194-1.025-.383-1.848-.804-3.048-2.671-3.14-2.793-.093-.124-.754-.997-.754-1.905 0-.907.477-1.353.646-1.539.17-.186.371-.233.495-.233.123 0 .248.002.355.008.113.006.264-.043.413.315.155.372.529 1.294.575 1.387.047.094.078.204.016.327-.063.124-.094.202-.187.311-.093.109-.196.244-.28.328-.094.093-.191.196-.083.382.109.186.483.797 1.037 1.29 1.139.713 1.343.805 1.533.899.191.093.303.078.416-.047.112-.124.483-.559.612-.751.13-.193.259-.161.436-.093.177.069 1.123.53 1.317.627.194.097.324.145.371.226.046.082.046.474-.098.879z"/>
            </svg>
            WHATSAPP
          </a>

          <span className="lang-selector">EN</span>
        </div>
      </div>
    </header>
  );
}
export default Navbar;
