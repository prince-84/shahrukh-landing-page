import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { PaymentPlanCalculator } from "@/components/payment-plan/PaymentPlanCalculator";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";

export const metadata: Metadata = {
  title: {
    absolute: "Shahrukhz Residences Payment Plan 2026 | 30/70 Installments",
  },
  description:
    "Shahrukhz Residences 30/70 payment plan, booking payment, construction instalments and expected handover in Dubai Maritime City.",
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
    title: "Shahrukhz Residences Payment Plan 2026 | 30/70 Installments",
    description:
      "Shahrukhz Residences 30/70 payment plan, booking payment, construction instalments and expected handover in Dubai Maritime City.",
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
    title: "Shahrukhz Residences Payment Plan 2026 | 30/70 Installments",
    description:
      "Shahrukhz Residences 30/70 payment plan, booking payment, construction instalments and expected handover in Dubai Maritime City.",
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
    question: "1. What Are the Installment Dates for Shahrukhz Residences?",
    answer:
      "The Shahrukhz Residences payment schedule includes a 10% down payment within 21 days of booking, followed by another 10% after two months. Buyers then pay 5% after 10 months and another 5% after 18 months, with the remaining 70% due at handover.",
  },
  {
    question: "2. How Much Do I Need to Pay Before Handover at Shahrukhz Residences?",
    answer:
      "Buyers are required to pay 30% of the property price before handover through four scheduled installments. The remaining 70% is payable at the scheduled handover in December 2029, according to the advertised payment structure and applicable sale agreement.",
  },
  {
    question: "3. Is the 70% Handover Payment Mandatory for Shahrukhz Residences?",
    answer:
      "Yes, the advertised 30/70 payment structure requires buyers to pay the remaining 70% at handover. Purchasers should prepare their finances in advance and review the Sale and Purchase Agreement to understand the final payment deadline and handover requirements.",
  },
  {
    question: "4. Can I Use a Mortgage to Pay the Final 70% at Handover?",
    answer:
      "Buyers may explore mortgage financing for the final payment, subject to bank approval, eligibility requirements, property valuation, and the lender's terms. It is advisable to discuss financing options with a UAE bank well before the expected handover date.",
  },
  {
    question: "5. Are Dubai Land Department Fees Included in the Shahrukhz Residences Payment Plan?",
    answer:
      "No, Dubai Land Department registration fees and other applicable charges are separate from the advertised property payment schedule. Buyers should include these additional expenses in their purchasing budget and request a complete cost breakdown before booking.",
  },
  {
    question: "6. What Happens If I Miss an Installment Payment at Shahrukhz Residences?",
    answer:
      "Missing a scheduled installment may result in contractual consequences depending on the Sale and Purchase Agreement. Buyers should contact the developer immediately if they anticipate a payment delay and review the applicable grace periods, late-payment provisions, and other contractual conditions.",
  },
  {
    question: "7. Can I Pay My Shahrukhz Residences Installments Earlier Than Scheduled?",
    answer:
      "Buyers interested in making early payments should contact Danube Properties to confirm whether advance installments are permitted. Any early payment arrangement should be documented and acknowledged by the developer to ensure that the outstanding balance is correctly updated.",
  },
  {
    question: "8. Is the 30/70 Payment Plan Available for All Apartment Types?",
    answer:
      "Shahrukhz Residences offers different residential configurations, including studios, one-bedroom, two-bedroom, and three-bedroom apartments. The advertised payment structure is 30/70, but actual installment amounts depend on the selected apartment price and the terms stated in the purchase agreement.",
  },
  {
    question: "9. When Should Buyers Prepare for the Final Payment at Shahrukhz Residences?",
    answer:
      "Buyers should begin planning for the final 70% payment well before the expected December 2029 handover. Early financial preparation, mortgage discussions, and reviewing the developer's payment notices can help avoid last-minute financial difficulties.",
  },
  {
    question: "10. What Documents Should I Check Before Paying for Shahrukhz Residences?",
    answer:
      "Before making a payment, buyers should review the Sale and Purchase Agreement, official payment schedule, booking confirmation, property details, and applicable fee breakdown. Confirming all payment terms with Danube Properties or an authorized representative helps ensure a more transparent purchasing process.",
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
              The <Link href="/">Shahrukhz Residences by Danube</Link> payment plan is advertised with a 30/70 payment structure. Buyers can explore the proposed payment arrangement and review the applicable terms before choosing an apartment in Dubai Maritime City.
            </p>
            <p className="price-intro-paragraph">
              The booking amount, instalment schedule and remaining balance should be confirmed against the latest official developer payment plan and sale agreement. Contact the sales team for current payment details and available units.
            </p>
            <p className="price-intro-paragraph">
              Compare available apartment options and starting prices on our <Link href="/prices">Shahrukhz Residences Prices</Link> page before making your purchase decision.
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
              FAQs About Shahrukhz Residences Payment Plan
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
