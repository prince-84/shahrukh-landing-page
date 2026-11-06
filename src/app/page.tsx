import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import { HomePageSchema } from "@/components/seo/HomePageSchema";
import { TabbedGallery } from "@/components/gallery/TabbedGallery";
import { AmenitiesSlider } from "@/components/amenities/AmenitiesSlider";
import { MediaImageGallery } from "@/components/gallery/MediaImageGallery";
import { VideoSeparator } from "@/components/video/VideoSeparator";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { InquireForm } from "@/components/forms/InquireForm";
import { TestimonialsSection } from "@/components/testimonials/TestimonialsSection";

export const metadata: Metadata = {
  title: {
    absolute: "Shahrukhz Residences by Danube in Dubai Maritime City",
  },
  description:
    "Shahrukhz Residences by Danube in Dubai Maritime City. Discover apartment prices, floor plans, the 30/70 payment plan and expected handover.",
  alternates: {
    canonical: `${siteConfig.url}/`,
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-video-preview": -1,
    "max-image-preview": "large",
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_AE",
    url: `${siteConfig.url}/`,
    title: "Shahrukhz Residences by Danube in Dubai Maritime City",
    description:
      "Shahrukhz Residences by Danube in Dubai Maritime City. Discover apartment prices, floor plans, the 30/70 payment plan and expected handover.",
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Shahrukhz Residences by Danube Waterfront Luxury Apartment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shahrukhz Residences by Danube in Dubai Maritime City",
    description:
      "Shahrukhz Residences by Danube in Dubai Maritime City. Discover apartment prices, floor plans, the 30/70 payment plan and expected handover.",
    site: "@DanubeProperties",
    creator: "@DanubeProperties",
    images: [
      {
        url: `${siteConfig.url}/images/logo.jpg`,
        alt: "Shahrukhz Residences by Danube Waterfront Luxury Apartment",
      },
    ],
  },
  other: {
    "twitter:url": `${siteConfig.url}/`,
  },
};

const faqs = [
  {
    question: "1. What Is the Starting Price of Shahrukhz Residences by Danube?",
    answer:
      "The starting price of Shahrukhz Residences is advertised from AED 1.65 million. Prices may vary depending on the apartment type, floor level, size, and view. Contact the sales team to get the latest price list and available units.",
  },
  {
    question: "2. What Is the Payment Plan for Shahrukhz Residences?",
    answer:
      "Shahrukhz Residences offers a flexible 30/70 payment plan. Buyers pay 30% of the property price through scheduled installments, while the remaining 70% is payable at handover. Contact the sales team for the latest installment schedule and payment conditions.",
  },
  {
    question: "3. How Can I Book an Apartment in Shahrukhz Residences?",
    answer:
      "You can register your interest by submitting an inquiry through the project website. The sales team can share the property brochure, available floor plans, prices, and booking details. You can then select your preferred apartment and proceed according to the developer's booking requirements.",
  },
  {
    question: "4. How Much Is the EOI Amount for Shahrukhz Residences?",
    answer:
      "The advertised Expression of Interest (EOI) amount is AED 50,000 for studio and one-bedroom apartments. For two-bedroom apartments and larger units, the advertised EOI amount is AED 100,000. Confirm the latest EOI terms and refund conditions before making a payment.",
  },
  {
    question: "5. Does Shahrukhz Residences Offer Sea View Apartments?",
    answer:
      "Yes, the development promotes waterfront living and panoramic ocean views. However, the actual view depends on the apartment's location, floor, and orientation. Buyers should request unit-specific views and floor plans before selecting their preferred residence.",
  },
  {
    question: "6. Is Shahrukhz Residences a Good Property Investment in Dubai?",
    answer:
      "Shahrukhz Residences may appeal to property investors because of its Dubai Maritime City location, waterfront setting, furnished apartments, and lifestyle amenities. However, rental income and future property value are not guaranteed. Buyers should compare market prices, service charges, and expected rental demand before investing.",
  },
  {
    question: "7. Are Luxury Penthouses Available at Shahrukhz Residences?",
    answer:
      "Yes, Shahrukhz Residences includes exclusive penthouses alongside its studio, one-bedroom, two-bedroom, and three-bedroom apartments. These premium residences are designed for buyers seeking additional space and an elevated lifestyle. Contact the sales team for penthouse layouts, prices, and availability.",
  },
  {
    question: "8. What Makes Dubai Maritime City a Good Location for Property Buyers?",
    answer:
      "Dubai Maritime City offers a waterfront setting with access to important destinations across Dubai. Residents can reach Port Rashid, Dubai Cruise Terminal, Jumeirah Beach, Dubai World Trade Centre, and Downtown Dubai within a reasonable driving distance, depending on traffic conditions.",
  },
  {
    question: "9. Can International Buyers Purchase Property in Shahrukhz Residences?",
    answer:
      "International buyers interested in Dubai real estate can explore purchasing opportunities at Shahrukhz Residences. Buyers should confirm the applicable ownership rules, required identification documents, payment procedures, and transaction conditions with the developer or an authorized real estate professional.",
  },
  {
    question: "10. How Can I Get the Brochure and Latest Price List for Shahrukhz Residences?",
    answer:
      "You can request the official project brochure, apartment floor plans, latest prices, and availability by submitting your details through the Shahrukhz Residences website. The sales team can help you compare available units and understand the payment options before booking.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Website & Organization Schema (Homepage Only) */}
      <HomePageSchema />

      {/* FAQ Schema for Google Search Rich Results */}
      <FaqJsonLd faqs={faqs} />

      {/* DANUBE BRAND TOP NAVBAR */}
      <Navbar />

      {/* MAIN HERO SECTION (EXACT REPLICA WITH HERO-IMG.WEBP) */}
      <main id="main-content" role="main">
        <section className="hero-wrapper" aria-label="Shahrukhz Residences Showcase">
          {/* Accessible H2 for SEO engines */}
          <h2 className="sr-only">
            Shahrukhz Residences by Danube — Fully Furnished Waterfront Residences in Dubai Maritime City Starting From AED 1.65M
          </h2>

          <div className="hero-img-container">
            <Image
              src="/images/logo.jpg"
              alt="Shahrukhz Residences by Danube - Dubai Maritime City Fully Furnished Waterfront Residences Starting From AED 1.65M"
              width={1920}
              height={1080}
              priority
              className="hero-main-image"
              sizes="100vw"
            />
          </div>
        </section>

        {/* SHAHRUKHZ RESIDENCES BY DANUBE SHOWCASE SECTION (EXACT REPLICA) */}
        <section className="danube-showcase-section" id="showcase" aria-labelledby="showcase-title">
          <div className="showcase-container">
            <h2 id="showcase-title" className="showcase-main-title">
              SHAHRUKHZ RESIDENCES BY DANUBE
            </h2>

            <p className="showcase-italic-tagline">
              Luxury Waterfront Residences in Dubai Maritime City
            </p>

            <p className="showcase-description">
              Shahrukhz Residences by Danube offers furnished apartments and penthouses in Dubai Maritime City. Explore the latest{" "}
              <Link href="/prices">Shahrukhz Residences prices</Link> and discover the available{" "}
              <Link href="/payment-plan">Shahrukhz Residences payment plan</Link> to understand your property investment options.
            </p>

            <div>
              <a href="#inquire" className="btn-virtual-tour">
                VIRTUAL TOUR
              </a>
            </div>

            {/* 3x2 SPECIFICATIONS GRID */}
            <div className="specs-table-grid" role="region" aria-label="Property Specifications">
              {/* Item 1: STARTING PRICE */}
              <div className="spec-cell">
                <div className="spec-cell-icon" aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
                    <line x1="7" y1="7" x2="7.01" y2="7"/>
                  </svg>
                </div>
                <div className="spec-cell-info">
                  <span className="spec-cell-label">STARTING PRICE</span>
                  <span className="spec-cell-value">AED 1.65 Million</span>
                </div>
              </div>

              {/* Item 2: COMPLETION */}
              <div className="spec-cell">
                <div className="spec-cell-icon" aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                    <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"/>
                  </svg>
                </div>
                <div className="spec-cell-info">
                  <span className="spec-cell-label">COMPLETION</span>
                  <span className="spec-cell-value">Q4 2029</span>
                </div>
              </div>

              {/* Item 3: PAYMENT PLAN */}
              <div className="spec-cell">
                <div className="spec-cell-icon" aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                  </svg>
                </div>
                <div className="spec-cell-info">
                  <span className="spec-cell-label">PAYMENT PLAN</span>
                  <span className="spec-cell-value">30/70 Payment Plan</span>
                </div>
              </div>

              {/* Item 4: APARTMENTS */}
              <div className="spec-cell">
                <div className="spec-cell-icon" aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21h18"/>
                    <path d="M5 21V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v16"/>
                    <path d="M13 21V9a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12"/>
                    <line x1="8" y1="7" x2="9" y2="7"/>
                    <line x1="8" y1="11" x2="9" y2="11"/>
                    <line x1="8" y1="15" x2="9" y2="15"/>
                    <line x1="16" y1="11" x2="17" y2="11"/>
                    <line x1="16" y1="15" x2="17" y2="15"/>
                  </svg>
                </div>
                <div className="spec-cell-info">
                  <span className="spec-cell-label">APARTMENTS</span>
                  <span className="spec-cell-value">Prices Available on Request</span>
                </div>
              </div>

              {/* Item 5: BEDROOMS */}
              <div className="spec-cell">
                <div className="spec-cell-icon" aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 4v16"/>
                    <path d="M2 8h18a2 2 0 0 1 2 2v10"/>
                    <path d="M2 17h20"/>
                    <path d="M6 8v9"/>
                  </svg>
                </div>
                <div className="spec-cell-info">
                  <span className="spec-cell-label">BEDROOMS</span>
                  <span className="spec-cell-value">Studio, 1, 2, and 3-Bedroom Apartments, Penthouses</span>
                </div>
              </div>

              {/* Item 6: LOCATION */}
              <div className="spec-cell">
                <div className="spec-cell-icon" aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className="spec-cell-info">
                  <span className="spec-cell-label">LOCATION</span>
                  <span className="spec-cell-value">Dubai Maritime City, Dubai</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FULL WIDTH TEASER VIDEO SEPARATOR */}
        <VideoSeparator />

        {/* CONNECTIVITY / LOCATION SECTION */}
        <section className="maritime-connectivity-section" id="connectivity" aria-labelledby="maritime-title">
          <div className="container">
            <h2 id="maritime-title" className="maritime-title">
              Shahrukhz Residences Location in Dubai Maritime City
            </h2>

            <div className="connectivity-grid" role="region" aria-label="Maritime City Strategic Connectivity">
              {/* Item 1: 2 MINS PORT RASHID BOAT STATION */}
              <div className="connectivity-cell">
                <div className="connectivity-icon" aria-hidden="true">
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 19a3 3 0 0 0 3 0 3 3 0 0 1 3 0 3 3 0 0 0 3 0 3 3 0 0 1 3 0 3 3 0 0 0 3 0 3 3 0 0 1 3 0" />
                    <path d="M3 15l2.5-5.5h13L21 15" />
                    <path d="M7 9.5l2-4h6l2 4" />
                    <line x1="12" y1="5.5" x2="12" y2="2" />
                  </svg>
                </div>
                <div className="connectivity-text">
                  5 MINS PORT<br />
                  RASHID BOAT<br />
                  STATION
                </div>
              </div>

              {/* Item 2: 5 MINS DUBAI CRUISE TERMINAL 2 */}
              <div className="connectivity-cell">
                <div className="connectivity-icon" aria-hidden="true">
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 20a3 3 0 0 0 3 0 3 3 0 0 1 3 0 3 3 0 0 0 3 0 3 3 0 0 1 3 0 3 3 0 0 0 3 0 3 3 0 0 1 3 0" />
                    <path d="M4 16l1.8-6h12.4l1.8 6" />
                    <rect x="7" y="6" width="10" height="4" rx="1" />
                    <line x1="10" y1="6" x2="10" y2="3" />
                    <line x1="14" y1="6" x2="14" y2="3" />
                  </svg>
                </div>
                <div className="connectivity-text">
                  5 MINS DUBAI<br />
                  CRUISE<br />
                  TERMINAL 2
                </div>
              </div>

              {/* Item 3: 10 MINS DUBAI WORLD TRADE CENTRE */}
              <div className="connectivity-cell">
                <div className="connectivity-icon" aria-hidden="true">
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="7" y="3" width="10" height="18" rx="1" />
                    <rect x="3" y="8" width="4" height="13" rx="1" />
                    <rect x="17" y="8" width="4" height="13" rx="1" />
                    <line x1="9" y1="6.5" x2="11" y2="6.5" />
                    <line x1="13" y1="6.5" x2="15" y2="6.5" />
                    <line x1="9" y1="10.5" x2="11" y2="10.5" />
                    <line x1="13" y1="10.5" x2="15" y2="10.5" />
                    <line x1="9" y1="14.5" x2="11" y2="14.5" />
                    <line x1="13" y1="14.5" x2="15" y2="14.5" />
                  </svg>
                </div>
                <div className="connectivity-text">
                  10 MINS DUBAI<br />
                  WORLD TRADE<br />
                  CENTRE
                </div>
              </div>

              {/* Item 4: 10 MINS JUMEIRAH BEACH */}
              <div className="connectivity-cell">
                <div className="connectivity-icon" aria-hidden="true">
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 4v16" />
                    <path d="M4 12c0-4.42 3.58-8 8-8s8 3.58 8 8z" />
                    <path d="M8 12c0-2.21 1.79-4 4-4s4 1.79 4 4" />
                    <path d="M3 20h18" />
                  </svg>
                </div>
                <div className="connectivity-text">
                  10 MINS JUMEIRAH<br />
                  BEACH
                </div>
              </div>

              {/* Item 5: 10 MINS BURJ KHALIFA */}
              <div className="connectivity-cell">
                <div className="connectivity-icon" aria-hidden="true">
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="2" x2="12" y2="6" />
                    <path d="M11 6h2v3h-2z" />
                    <path d="M10 9h4v4h-4z" />
                    <path d="M9 13h6v4h-6z" />
                    <path d="M8 17h8v4H8z" />
                    <line x1="6" y1="21" x2="18" y2="21" />
                  </svg>
                </div>
                <div className="connectivity-text">
                  10 MINS BURJ<br />
                  KHALIFA
                </div>
              </div>

              {/* Item 6: 15 MINS DXB INTERNATIONAL AIRPORT */}
              <div className="connectivity-cell">
                <div className="connectivity-icon" aria-hidden="true">
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                  </svg>
                </div>
                <div className="connectivity-text">
                  15 MINS DXB<br />
                  INTERNATIONAL<br />
                  AIRPORT
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RESPONSIVE TABBED IMAGE GALLERY */}
        <TabbedGallery />

        {/* AMENITIES SHOWCASE PANORAMIC SLIDER WITH ALL 4 IMAGES & NAVIGATION */}
        <AmenitiesSlider />

        {/* MEDIA IMAGE GALLERY (EXACT REPLICA OF USER DESIGN) */}
        <MediaImageGallery />

        {/* FREQUENTLY ASKED QUESTIONS (EXACT MATCH TO USER SCREENSHOT) */}
        <section className="faq-section-modern" id="faq" aria-labelledby="faq-heading">
          <div className="container">
            <div className="faq-header-box">
              <span className="faq-eyebrow-text">MORE INFORMATION</span>
              <h2 id="faq-heading" className="faq-main-title">
                FREQUENTLY ASKED QUESTIONS
              </h2>
            </div>

            <div className="faq-list-modern">
              {faqs.map((faq, idx) => (
                <details key={idx} className="faq-card-modern">
                  <summary className="faq-summary-modern">
                    <span className="faq-question-text">{faq.question}</span>
                    <span className="faq-arrow-icon" aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="7" x2="17" y2="17" />
                        <polyline points="17 7 17 17 7 17" />
                      </svg>
                    </span>
                  </summary>
                  <div className="faq-body-modern">
                    <p className="faq-answer-text">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* LET'S CONNECT FORM SECTION (EXACT REPLICA OF USER DESIGN) */}
        <section className="connect-section" id="inquire" aria-labelledby="connect-heading">
          <div className="container">
            <div className="connect-grid">
              {/* Left Column: Heading & Description */}
              <div className="connect-left-col">
                <div className="connect-eyebrow">
                  <span className="connect-eyebrow-dash">—</span> EOI OPEN NOW
                </div>
                <h2 id="connect-heading" className="connect-title">
                  From AED 1.65M.<br />
                  <span className="connect-title-gold">EOI and priority allocation are open.</span>
                </h2>
                <p className="connect-desc">
                  Register to receive the unit-wise price list, the brochure and current availability — and to be called when your preferred type and view can be allocated.
                </p>
              </div>

              {/* Right Column: Form Card */}
              <div className="connect-form-card">
                <InquireForm />
              </div>
            </div>
          </div>
        </section>

        {/* SMART TESTIMONIALS & REVIEWS SECTION */}
        <TestimonialsSection />
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
