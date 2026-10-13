import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions | shahrukhz-residence.com",
  description:
    "Read our Terms & Conditions to understand the rules, responsibilities, and terms of using our website and accessing property information.",
  alternates: {
    canonical: `${siteConfig.url}/terms-and-conditions`,
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
    url: `${siteConfig.url}/terms-and-conditions`,
    title: "Terms & Conditions | shahrukhz-residence.com",
    description:
      "Read our Terms & Conditions to understand the rules, responsibilities, and terms of using our website and accessing property information.",
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Shahrukhz Residences Terms & Conditions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | shahrukhz-residence.com",
    description:
      "Read our Terms & Conditions to understand the rules, responsibilities, and terms of using our website and accessing property information.",
    site: "@DanubeProperties",
    creator: "@DanubeProperties",
    images: [
      {
        url: `${siteConfig.url}/images/logo.jpg`,
        alt: "Shahrukhz Residences Terms & Conditions",
      },
    ],
  },
  other: {
    "twitter:url": `${siteConfig.url}/terms-and-conditions`,
  },
};

const termsSections = [
  {
    title: "1. Agreement to Terms",
    content:
      "By accessing or using shahrukhz-residence.com, you agree to these Terms & Conditions. If you do not agree with any part of these terms, please stop using the website.",
  },
  {
    title: "2. Website Use",
    content:
      "This website provides general information about real estate, properties, projects, communities, and related services. You must use this website lawfully and responsibly. Unauthorized, fraudulent, harmful, or abusive use of the website is strictly prohibited.",
  },
  {
    title: "3. Property Information",
    content:
      "Property listings, prices, layouts, specifications, payment plans, availability, locations, and handover dates are provided for general reference only. Property information may change without notice and does not constitute a binding offer, agreement, or contract. Users should verify all property details with the relevant developer, seller, or authorized representative before making any commitment.",
  },
  {
    title: "4. No Professional Advice",
    content:
      "The information provided on shahrukhz-residence.com does not constitute legal, financial, tax, investment, or immigration advice. You should conduct your own research and consult qualified professionals before making any property or investment decision.",
  },
  {
    title: "5. No Guarantee of Returns",
    content:
      "We do not guarantee future property values, rental income, capital appreciation, or investment returns. Past performance of a property, project, community, or developer does not guarantee future results.",
  },
  {
    title: "6. User Responsibilities",
    content:
      "You are responsible for providing accurate and complete information when submitting enquiries through this website. You must not provide false information, impersonate another person, or misuse the website or its services.",
  },
  {
    title: "7. Intellectual Property",
    content:
      "All text, logos, graphics, images, videos, designs, and other content available on shahrukhz-residence.com are owned by the website owner or its respective licensors, unless otherwise stated. You may not copy, reproduce, distribute, modify, or use website content for commercial purposes without prior written permission.",
  },
  {
    title: "8. Third-Party Links",
    content:
      "This website may contain links to third-party websites, including property developers, real estate companies, service providers, and other websites. These links are provided for convenience only. We do not control, endorse, or take responsibility for the content, availability, security, or privacy practices of third-party websites.",
  },
  {
    title: "9. Limitation of Liability",
    content:
      "We take reasonable steps to provide accurate and up-to-date information, but we do not guarantee that all information on the website is complete, accurate, or current. We are not responsible for any losses or damages arising from reliance on information provided on this website. Users should independently verify property prices, availability, specifications, payment plans, project details, and other relevant information before making a decision.",
  },
  {
    title: "10. Governing Law",
    content:
      "These Terms & Conditions shall be governed by the applicable laws and regulations of the jurisdiction in which the website owner operates. Any disputes arising in connection with these terms shall be subject to the jurisdiction of the competent courts of the applicable jurisdiction.",
  },
];

export default function TermsAndConditionsPage() {
  return (
    <div className="subpage-container light-theme-page">
      <Navbar />

      {/* TOP INTRO SECTION */}
      <section className="price-intro-section" aria-label="Terms and Conditions Overview">
        <div className="container">
          <div className="subpage-breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span>Terms &amp; Conditions</span>
          </div>

          <h1 className="price-intro-title">Terms &amp; Conditions</h1>

          <div className="price-intro-text-block">
            <p className="price-intro-paragraph">
              Please review these Terms &amp; Conditions carefully before browsing shahrukhz-residence.com or submitting inquiries. Continued use of this website signifies your agreement to these terms.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN LEGAL CONTENT */}
      <main className="subpage-body" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="subpage-card">
            {termsSections.map((sec, idx) => (
              <div key={idx} className="legal-section-block">
                <h2 className="legal-heading-2">{sec.title}</h2>
                <p className="legal-text">{sec.content}</p>
              </div>
            ))}

            {/* CTA Box */}
            <div className="subpage-cta-box">
              <h3 className="subpage-cta-title">Have Questions About Our Terms?</h3>
              <p className="subpage-cta-desc">
                Contact our customer support team for verified project details, reservation documents, and legal inquiries.
              </p>
              <a href="/#inquire" className="btn-subpage-action">
                Inquire Now
              </a>
            </div>
          </div>
        </div>
      </main>


      <Footer />
    </div>
  );
}
