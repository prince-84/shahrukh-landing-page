import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { PaymentPlanCalculator } from "@/components/payment-plan/PaymentPlanCalculator";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";

export const metadata: Metadata = {
  title: "Shahrukhz Residences by Danube Payment Plan",
  description:
    "Shahrukhz Residences by Danube payment plan, featuring a 30/70 payment structure, flexible payment terms, and Q4 2029 completion.",
  alternates: {
    canonical: `${siteConfig.url}/payment-plan`,
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
    url: `${siteConfig.url}/payment-plan`,
    title: "Shahrukhz Residences by Danube Payment Plan",
    description:
      "Shahrukhz Residences by Danube payment plan, featuring a 30/70 payment structure, flexible payment terms, and Q4 2029 completion.",
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Shahrukhz Residences 30/70 Payment Plan Dubai Maritime City",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shahrukhz Residences by Danube Payment Plan",
    description:
      "Shahrukhz Residences by Danube payment plan, featuring a 30/70 payment structure, flexible payment terms, and Q4 2029 completion.",
    site: "@DanubeProperties",
    creator: "@DanubeProperties",
    images: [
      {
        url: `${siteConfig.url}/images/logo.jpg`,
        alt: "Shahrukhz Residences 30/70 Payment Plan Dubai Maritime City",
      },
    ],
  },
  other: {
    "twitter:url": `${siteConfig.url}/payment-plan`,
  },
};

const faqs = [
  {
    question: "1. What is the payment plan for Shahrukhz Residences?",
    answer:
      "Shahrukhz Residences is advertised with a 30/70 payment plan. Buyers should obtain the latest official payment schedule to understand when each instalment becomes due.",
  },
  {
    question: "2. How does the 30/70 payment plan work at Shahrukhz Residences?",
    answer:
      "Under a 30/70 structure, 30% of the purchase price is allocated to the initial payment portion and the remaining 70% to the subsequent payment portion. The exact instalment dates and conditions are determined by the developer's official payment schedule.",
  },
  {
    question: "3. How much is the initial 30% payment for a Shahrukhz Residences property?",
    answer:
      "The initial 30% allocation depends on the agreed purchase price. For example, on a property priced at AED 1,650,000, 30% would equal AED 495,000. This calculation does not establish the actual booking amount or instalment dates, which must be confirmed with the developer.",
  },
  {
    question: "4. When is the remaining 70% payable under the Shahrukhz Residences payment plan?",
    answer:
      "The timing of the remaining 70% depends on the official payment schedule and purchase agreement. Buyers should confirm whether instalments are linked to construction milestones, handover, or other specified dates before committing.",
  },
  {
    question: "5. Can I reserve a unit at Shahrukhz Residences with a booking payment?",
    answer:
      "The booking amount and reservation requirements depend on the developer's current sales terms. Contact the sales team to confirm the required deposit, reservation documents, payment deadlines, and conditions for securing a unit.",
  },
  {
    question: "6. Are there any additional charges beyond the Shahrukhz Residences payment plan?",
    answer:
      "Yes, buyers may need to budget for applicable registration fees, administrative charges, service charges, and other purchase-related costs. These expenses may be separate from the advertised payment plan, so request a complete breakdown before signing the agreement.",
  },
  {
    question: "7. How can I obtain the official Shahrukhz Residences payment schedule?",
    answer:
      "Contact Danube Properties or an authorized property agent to request the current instalment schedule, booking requirements, payment milestones, and applicable terms. Review the official documents carefully before making a payment.",
  },
];

export default function PaymentPlanPage() {
  return (
    <div className="subpage-container light-theme-page">
      {/* FAQ Schema for Google Search Rich Results */}
      <FaqJsonLd faqs={faqs} />
      <Navbar />

      {/* TOP INTRO SECTION */}
      <section className="price-intro-section" aria-label="Payment Plan Overview">
        <div className="container">
          <div className="subpage-breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span>Payment Plan</span>
          </div>

          <h1 className="price-intro-title">Shahrukhz Residences Payment Plan</h1>

          <div className="price-intro-text-block">
            <p className="price-intro-paragraph">
              Shahrukhz Residences by Danube offers a flexible 30/70 payment plan for buyers looking to invest in Dubai Maritime City. This payment structure allows buyers to pay 30% during the initial payment stages and the remaining 70% according to the developer&apos;s payment schedule. With starting prices from AED 1.65 million, the development offers studios, 1, 2, and 3-bedroom apartments, along with exclusive penthouses designed for modern living.
            </p>
            <p className="price-intro-paragraph">
              The Shahrukhz Residences payment plan provides an option for buyers who want to plan their property investment over the project&apos;s development period. Developed by Danube Properties, the project features waterfront surroundings, modern interiors, and a wide range of lifestyle amenities. The expected completion date is Q4 2029. Buyers should confirm the latest instalment schedule, booking requirements, and payment terms with the developer before making a purchase decision.
            </p>
          </div>
        </div>
      </section>

      {/* 30/70 PAYMENT PLAN SECTION (EXACT MATCH TO SCREENSHOT) */}
      <PaymentPlanCalculator />

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
