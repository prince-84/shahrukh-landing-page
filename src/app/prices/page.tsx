import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";

export const metadata: Metadata = {
  title: {
    absolute: "Shahrukhz Residences Prices 2026 | Apartment Price List",
  },
  description:
    "Shahrukhz Residences prices from AED 1.65M. Compare studio, 1, 2 and 3-bedroom apartments, sea views, and payment plans in Dubai.",
  alternates: {
    canonical: `${siteConfig.url}/prices`,
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
    url: `${siteConfig.url}/prices`,
    title: "Shahrukhz Residences Prices 2026 | Apartment Price List",
    description:
      "Shahrukhz Residences prices from AED 1.65M. Compare studio, 1, 2 and 3-bedroom apartments, sea views, and payment plans in Dubai.",
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Shahrukhz Residences Prices in Dubai Maritime City",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shahrukhz Residences Prices 2026 | Apartment Price List",
    description:
      "Shahrukhz Residences prices from AED 1.65M. Compare studio, 1, 2 and 3-bedroom apartments, sea views, and payment plans in Dubai.",
    site: "@DanubeProperties",
    creator: "@DanubeProperties",
    images: [
      {
        url: `${siteConfig.url}/images/logo.jpg`,
        alt: "Shahrukhz Residences Prices in Dubai Maritime City",
      },
    ],
  },
  other: {
    "twitter:url": `${siteConfig.url}/prices`,
  },
};

const priceData = [
  {
    category: "STUDIOS",
    eoi: "EOI AED 50,000",
    units: [
      { type: "Studio", view: "Skyline Sea View", startingPrice: "AED 1.65M", avgPrice: "AED 1.85M" },
      { type: "Flex Studio", view: "Skyline Sea View", startingPrice: "AED 1.85M", avgPrice: "AED 2M" },
      { type: "Flex Studio", view: "Panoramic Sea View", startingPrice: "AED 2M", avgPrice: "AED 2.1M" },
    ],
  },
  {
    category: "1 BEDROOM",
    eoi: "EOI AED 50,000",
    units: [
      { type: "1 BHK", view: "Skyline Sea View", startingPrice: "AED 2.3M", avgPrice: "AED 2.5M" },
      { type: "1 BHK", view: "Panoramic Sea View", startingPrice: "AED 2.6M", avgPrice: "AED 2.8M" },
      { type: "Flex 1 BHK", view: "Panoramic or Skyline Sea View", startingPrice: "AED 2.95M", avgPrice: "AED 3.1M" },
      { type: "Flex Plus 1 BHK", view: "Panoramic Sea View", startingPrice: "AED 3.4M", avgPrice: "AED 3.6M" },
      { type: "King's 1 BHK", view: "Panoramic Sea View", startingPrice: "AED 3.4M", avgPrice: "AED 3.6M" },
    ],
  },
  {
    category: "2 BEDROOM",
    eoi: "EOI AED 100,000",
    units: [
      { type: "2 BHK Premium", view: "Panoramic Sea View", startingPrice: "AED 4.25M", avgPrice: "AED 4.7M" },
      { type: "King's 2 BHK", view: "Panoramic Sea View", startingPrice: "AED 4.95M", avgPrice: "AED 5.4M" },
    ],
  },
  {
    category: "3 BEDROOM",
    eoi: "EOI AED 100,000",
    units: [
      { type: "3 BHK", view: "Panoramic Sea View", startingPrice: "AED 6.5M", avgPrice: "AED 6.7M" },
    ],
  },
  {
    category: "PENTHOUSES",
    eoi: "EOI AED 100,000",
    units: [
      { type: "Penthouse", view: "Designed by Gauri Khan", startingPrice: "On request", avgPrice: "—" },
    ],
  },
];

const faqs = [
  {
    question: "1. What Is the Price of a Studio Apartment in Shahrukhz Residences?",
    answer:
      "Studio apartments at Shahrukhz Residences start from AED 1.65 million for skyline sea-view units. Flex studios start from AED 1.85 million, while panoramic sea-view options start from AED 2 million. Prices depend on the selected unit and availability.",
  },
  {
    question: "2. How Much Does a 1-Bedroom Apartment Cost in Shahrukhz Residences?",
    answer:
      "One-bedroom apartments at Shahrukhz Residences start from AED 2.3 million. Buyers can also explore panoramic sea-view and flexible apartment configurations, with prices reaching AED 3.4 million for selected layouts. Contact the sales team for current availability.",
  },
  {
    question: "3. What Is the Price of a 2-Bedroom Apartment in Shahrukhz Residences?",
    answer:
      "Two-bedroom apartments at Shahrukhz Residences start from AED 4.25 million for premium panoramic sea-view residences. King's two-bedroom apartments start from AED 4.95 million. Final prices depend on the apartment layout, floor, and availability.",
  },
  {
    question: "4. How Much Does a 3-Bedroom Apartment Cost at Shahrukhz Residences?",
    answer:
      "Three-bedroom apartments at Shahrukhz Residences start from AED 6.5 million. These spacious residences are designed for families seeking premium interiors, panoramic sea views, and a luxury waterfront lifestyle in Dubai Maritime City.",
  },
  {
    question: "5. Are Sea View Apartments More Expensive at Shahrukhz Residences?",
    answer:
      "Yes, apartment prices can vary depending on the selected view and configuration. Shahrukhz Residences offers skyline and panoramic sea-view options. Panoramic sea-view apartments may have higher starting prices depending on their layout and positioning.",
  },
  {
    question: "6. What Is the Average Price of Apartments in Shahrukhz Residences?",
    answer:
      "The average prices published by the developer vary by apartment type. Studio apartments have an average price of approximately AED 1.85 million, while one-bedroom units average AED 2.5 million for standard skyline-view configurations. Request the latest price list for a detailed comparison.",
  },
  {
    question: "7. Are There Any Hidden Charges When Buying Shahrukhz Residences Apartments?",
    answer:
      "In addition to the apartment price, buyers should consider Dubai Land Department registration fees, administrative charges, and applicable service charges. The exact costs depend on the transaction and applicable regulations. Always request a complete cost breakdown before booking.",
  },
  {
    question: "8. Can I Buy a Shahrukhz Residences Apartment with a Flexible Payment Plan?",
    answer:
      "Yes, Shahrukhz Residences advertises a 30/70 payment plan. Buyers pay 30% through scheduled installments, with the remaining 70% due at handover. This structure allows purchasers to plan their investment according to the developer's payment schedule.",
  },
  {
    question: "9. What Is the Price Difference Between Skyline and Panoramic Sea View Apartments?",
    answer:
      "The price difference depends on the apartment category and configuration. For example, standard one-bedroom skyline-view apartments start from AED 2.3 million, while panoramic sea-view options start from AED 2.6 million. Buyers should compare individual units to identify the most suitable option.",
  },
  {
    question: "10. How Can I Get the Best Available Price for Shahrukhz Residences?",
    answer:
      "To explore the best available options, compare apartment sizes, floor levels, views, and current unit prices. Contact the authorized sales team to receive the latest inventory, available offers, payment details, and a personalized quotation before making a booking.",
  },
];

export default function PricesPage() {
  return (
    <div className="subpage-container light-theme-page">
      {/* FAQ Schema for Google Search Rich Results */}
      <FaqJsonLd faqs={faqs} />
      <Navbar />

      {/* TOP INTRO SECTION */}
      <section className="price-intro-section" aria-label="Prices Overview">
        <div className="container">
          <div className="subpage-breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span>Prices</span>
          </div>

          <h1 className="price-intro-title">Shahrukhz Residences Prices in Dubai</h1>

          <div className="price-intro-text-block">
            <p className="price-intro-paragraph">
              Shahrukhz Residences prices vary depending on apartment type, size, floor and availability. Located in Dubai Maritime City, this development by Danube Properties offers studios, 1, 2 and 3-bedroom apartments, along with exclusive penthouses.
            </p>
            <p className="price-intro-paragraph">
              Explore the available apartment options and starting prices to compare residences according to your requirements. Contact the sales team to confirm the latest prices, available units and applicable purchase terms before booking.
            </p>
            <p className="price-intro-paragraph">
              Explore the{" "}
              <Link href="/payment-plan">Shahrukhz Residences Payment Plan</Link> to understand the advertised installment structure and payment terms.
            </p>
          </div>
        </div>
      </section>

      {/* WATERFRONT STARTING PRICES & CONFIGURATION CHART */}
      <section className="price-chart-section" id="pricing-chart" aria-label="Waterfront Starting Prices">
        <div className="container">
          {/* Header Row exactly matching screenshot */}
          <div className="price-chart-header">
            <div className="price-chart-header-left">
              <span className="price-chart-eyebrow">— CONFIGURATION &amp; PRICING</span>
              <h2 className="price-chart-title">
                Every home comes <br />
                with <span className="price-chart-title-accent">a sea view</span>
              </h2>
            </div>
            <div className="price-chart-header-right">
              <p className="price-chart-header-desc">
                Starting prices by type, as issued by the developer. Tap a row to ask about that unit — an adviser replies with current availability.
              </p>
            </div>
          </div>

          {/* Table Container (Light Luxury Palette) */}
          <div className="price-chart-card">
            <div className="price-chart-table-wrap">
              <table className="price-chart-table">
                <thead>
                  <tr>
                    <th scope="col" style={{ width: "24%" }}>TYPE</th>
                    <th scope="col" style={{ width: "32%" }}>VIEW</th>
                    <th scope="col" style={{ width: "18%" }}>STARTING PRICE</th>
                    <th scope="col" style={{ width: "14%" }}>AVERAGE PRICE</th>
                    <th scope="col" style={{ width: "12%", textAlign: "right" }} aria-label="Action"></th>
                  </tr>
                </thead>
                <tbody>
                  {priceData.map((categoryGroup, catIdx) => (
                    <React.Fragment key={catIdx}>
                      {/* Category Header Row */}
                      <tr className="price-cat-header-row">
                        <td colSpan={2} className="price-cat-title">
                          {categoryGroup.category}
                        </td>
                        <td colSpan={3} className="price-cat-eoi">
                          {categoryGroup.eoi}
                        </td>
                      </tr>

                      {/* Unit Rows */}
                      {categoryGroup.units.map((unit, unitIdx) => (
                        <tr key={unitIdx} className="price-unit-row">
                          <td className="price-unit-type">
                            <strong>{unit.type}</strong>
                          </td>
                          <td className="price-unit-view">
                            {unit.view}
                          </td>
                          <td className="price-unit-starting">
                            {unit.startingPrice}
                          </td>
                          <td className="price-unit-avg">
                            {unit.avgPrice}
                          </td>
                          <td className="price-unit-action" style={{ textAlign: "right" }}>
                            <a
                              href="/#inquire"
                              className="btn-price-enquire"
                              aria-label={`Enquire about ${unit.type} ${unit.view}`}
                            >
                              Enquire →
                            </a>
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Footnote matching screenshot 2 */}
            <div className="price-chart-footnote">
              Prices in AED as issued by the developer (Developer presentation, 5 Oct 2026), subject to change and availability. &ldquo;Average price&rdquo; is the developer&apos;s stated average for the type. Unit sizes and floor plans are shared on request. Prices exclude Dubai Land Department fees and other charges.
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="faq-section-modern price-faq-section" id="faq" aria-labelledby="faq-heading">
        <div className="container">
          <div className="faq-header-box">
            <span className="faq-eyebrow-text">MORE INFORMATION</span>
            <h2 id="faq-heading" className="faq-main-title">
              FREQUENTLY ASKED QUESTIONS
            </h2>
          </div>

          <div className="faq-list-modern">
            {faqs.map((faq, idx) => (
              <details key={idx} className="faq-card-modern" open={idx === 0}>
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

      <Footer />
    </div>
  );
}
