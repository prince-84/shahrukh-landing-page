import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";

export const metadata: Metadata = {
  title: "Shahrukhz Residences Prices in Dubai | Danube Properties",
  description:
    "Explore Shahrukhz Residences prices starting from AED 1.65 million in Dubai Maritime City. Check apartment types and investment opportunities.",
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
    title: "Shahrukhz Residences Prices in Dubai | Danube Properties",
    description:
      "Explore Shahrukhz Residences prices starting from AED 1.65 million in Dubai Maritime City. Check apartment types and investment opportunities.",
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
    title: "Shahrukhz Residences Prices in Dubai | Danube Properties",
    description:
      "Explore Shahrukhz Residences prices starting from AED 1.65 million in Dubai Maritime City. Check apartment types and investment opportunities.",
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
      { type: "Studio", view: "Skyline Sea View", startingPrice: "AED 1.7M", avgPrice: "AED 1.85M" },
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
    question: "1. What is the starting price of Shahrukhz Residences by Danube?",
    answer:
      "The advertised starting price of Shahrukhz Residences is AED 1.65 million. Actual prices depend on the selected unit, size, configuration, and current availability.",
  },
  {
    question: "2. How much do apartments at Shahrukhz Residences cost?",
    answer:
      "Apartment prices vary according to the property type, floor area, layout, and unit availability. Contact the sales team for an updated price list covering the available residences.",
  },
  {
    question: "3. Are studio apartments available at Shahrukhz Residences, and what do they cost?",
    answer:
      "Studio apartments are among the property types offered at Shahrukhz Residences. Their current prices depend on unit availability and specifications. Request an updated quotation to compare available studios.",
  },
  {
    question: "4. What factors affect property prices at Shahrukhz Residences?",
    answer:
      "Prices can vary based on apartment size, floor level, views, layout, unit availability, and the applicable purchase terms. Buyers should compare the full unit specifications before making a decision.",
  },
  {
    question: "5. Are penthouses at Shahrukhz Residences priced differently from apartments?",
    answer:
      "Yes. Penthouses may have different prices because of their size, layout, positioning, and exclusive features. Contact the sales team for current penthouse availability and individual quotations.",
  },
  {
    question: "6. Are there additional costs when purchasing a property at Shahrukhz Residences?",
    answer:
      "Buyers should budget for applicable Dubai Land Department registration fees, administrative charges, service charges, and any other costs associated with the purchase. Confirm the applicable amounts with the developer or a qualified property professional.",
  },
  {
    question: "7. How can I get the latest Shahrukhz Residences price list?",
    answer:
      "Contact Danube Properties or an authorized property agent to request the latest price list, available unit details, and a personalized quotation. Confirm all prices and applicable charges before booking.",
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

          <h1 className="price-intro-title">Shahrukhz Residences prices</h1>

          <div className="price-intro-text-block">
            <p className="price-intro-paragraph">
              Shahrukhz Residences prices start from AED 1.65 million, offering buyers an opportunity to invest in a premium residential development in Dubai Maritime City. Developed by Danube Properties, the project features studios, 1, 2, and 3-bedroom apartments, along with exclusive penthouses. With modern interiors, waterfront surroundings, and a range of lifestyle amenities, Shahrukhz Residences caters to both homebuyers and property investors looking for off-plan properties in Dubai.
            </p>
            <p className="price-intro-paragraph">
              The Shahrukhz Residences prices and payment options make the project worth considering for buyers seeking a property in a coastal Dubai location. The development offers a 30/70 payment plan and is expected to be completed in Q4 2029. Its location provides access to major business districts, leisure destinations, and popular attractions across Dubai. Buyers should confirm the latest prices, available units, and payment terms with Danube Properties before making an investment decision.
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
