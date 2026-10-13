import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | shahrukhz-residence.com",
  description:
    "Read our Privacy Policy to understand how we collect, use, and protect your personal information when you explore properties on our website.",
  alternates: {
    canonical: `${siteConfig.url}/privacy-policy`,
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
    url: `${siteConfig.url}/privacy-policy`,
    title: "Privacy Policy | shahrukhz-residence.com",
    description:
      "Read our Privacy Policy to understand how we collect, use, and protect your personal information when you explore properties on our website.",
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Shahrukhz Residences Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | shahrukhz-residence.com",
    description:
      "Read our Privacy Policy to understand how we collect, use, and protect your personal information when you explore properties on our website.",
    site: "@DanubeProperties",
    creator: "@DanubeProperties",
    images: [
      {
        url: `${siteConfig.url}/images/logo.jpg`,
        alt: "Shahrukhz Residences Privacy Policy",
      },
    ],
  },
  other: {
    "twitter:url": `${siteConfig.url}/privacy-policy`,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="subpage-container light-theme-page">
      <Navbar />

      {/* TOP INTRO SECTION */}
      <section className="price-intro-section" aria-label="Privacy Policy Overview">
        <div className="container">
          <div className="subpage-breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span>Privacy Policy</span>
          </div>

          <h1 className="price-intro-title">Privacy Policy</h1>

          <div className="price-intro-text-block">
            <p className="price-intro-paragraph">
              Read our Privacy Policy to understand how we collect, use, and protect your personal information when you explore properties on shahrukhz-residence.com.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN LEGAL CONTENT */}
      <main className="subpage-body" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="subpage-card">
            {/* Section 1 */}
            <div className="legal-section-block">
              <h2 className="legal-heading-2">1. Information Collection</h2>
              <p className="legal-text">
                We collect information when you interact with shahrukhz-residence.com or contact us regarding properties, projects, communities, and real estate opportunities.
              </p>
              <p className="legal-text">
                You may provide information when you:
              </p>
              <ul className="legal-list">
                <li>Submit an enquiry through our website.</li>
                <li>Request information about properties, projects, or real estate services.</li>
                <li>Contact us through phone, email, WhatsApp, social media, or other digital channels.</li>
                <li>Subscribe to property updates, newsletters, or other communications.</li>
              </ul>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#1e293b", margin: "16px 0 8px" }}>
                What We Collect
              </h3>
              <ul className="legal-list">
                <li><strong>Contact Details:</strong> Name, email address, phone number, and other contact details you choose to provide.</li>
                <li><strong>Property Preferences:</strong> Your property requirements, preferred locations, property type, budget, and other information related to your property search.</li>
                <li><strong>Transaction Information:</strong> Information required to assist with property enquiries, purchases, or related real estate services where applicable.</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="legal-section-block">
              <h2 className="legal-heading-2">2. How We Use Information</h2>
              <p className="legal-text">
                We use the information we collect for the following purposes:
              </p>
              <ul className="legal-list">
                <li><strong>Service Delivery:</strong> To understand your requirements and provide relevant property information and real estate assistance.</li>
                <li><strong>Communication:</strong> To contact you regarding property enquiries, available projects, property updates, and other information you have requested.</li>
                <li><strong>Property Enquiries:</strong> To help facilitate communication regarding properties, developers, projects, viewings, and related services.</li>
                <li><strong>Improvement:</strong> To improve our website, services, content, and overall user experience.</li>
                <li><strong>Compliance:</strong> To meet applicable legal, regulatory, and administrative requirements.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="legal-section-block">
              <h2 className="legal-heading-2">3. Information Sharing &amp; Disclosure</h2>
              <p className="legal-text">
                We respect your privacy and take reasonable steps to protect your personal information.
              </p>
              <ul className="legal-list">
                <li><strong>Service Providers:</strong> Information may be shared with trusted service providers where necessary to operate our website, manage enquiries, provide communication services, or deliver related services.</li>
                <li><strong>Property Developers and Partners:</strong> Where appropriate and necessary to respond to your enquiry, relevant information may be shared with property developers, agents, or service partners involved in the property or project you have requested information about.</li>
                <li><strong>Legal Authorities:</strong> Information may be disclosed to government authorities, regulatory bodies, law enforcement agencies, or other parties when required by applicable law.</li>
                <li><strong>No Sale of Personal Information:</strong> We do not sell, rent, or trade your personal information to third parties for marketing purposes.</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="legal-section-block">
              <h2 className="legal-heading-2">4. Data Security &amp; Integrity</h2>
              <ul className="legal-list">
                <li><strong>Protection:</strong> We use reasonable technical and organizational measures to help protect your personal information from unauthorized access, use, alteration, or disclosure.</li>
                <li><strong>Prevention:</strong> We take appropriate steps to monitor and maintain our systems to reduce the risk of data loss, unauthorized access, and security breaches.</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="legal-section-block">
              <h2 className="legal-heading-2">5. Your Rights &amp; Choices</h2>
              <p className="legal-text">
                Depending on applicable laws, you may have the right to request:
              </p>
              <ul className="legal-list">
                <li><strong>Access &amp; Update:</strong> Access, review, update, or correct the personal information we hold about you.</li>
                <li><strong>Opt-Out:</strong> Stop receiving marketing, promotional, or property-related communications from us at any time.</li>
                <li><strong>Delete Data:</strong> Request deletion of your personal information, subject to applicable legal, regulatory, and record-keeping requirements.</li>
              </ul>
            </div>

            {/* Section 6 */}
            <div className="legal-section-block">
              <h2 className="legal-heading-2">6. Cookies, Tracking &amp; Third-Party Links</h2>
              <ul className="legal-list">
                <li><strong>Cookies:</strong> We may use cookies and similar tracking technologies to improve website functionality, understand website usage, and enhance your browsing experience.</li>
                <li><strong>External Links:</strong> Our website may contain links to third-party websites, including property developers, real estate companies, and other service providers. We do not control or take responsibility for their content, security, or privacy practices. We recommend reviewing their privacy policies before providing personal information.</li>
              </ul>
            </div>

            {/* Section 7 */}
            <div className="legal-section-block">
              <h2 className="legal-heading-2">7. Children&apos;s Privacy</h2>
              <p className="legal-text">
                Our website and services are intended for individuals who are 18 years of age or older. We do not knowingly collect personal information from children. If you believe that a minor has provided personal information through our website, please contact us so we can take appropriate steps to remove the information.
              </p>
            </div>

            {/* Section 8 */}
            <div className="legal-section-block">
              <h2 className="legal-heading-2">8. Policy Updates</h2>
              <p className="legal-text">
                We may update this Privacy Policy from time to time to reflect changes in our services, website, or applicable requirements. Any updates will be published on this page, and material changes may be communicated through appropriate channels where required.
              </p>
            </div>

            {/* Section 9 */}
            <div className="legal-section-block">
              <h2 className="legal-heading-2">9. Contact Us</h2>
              <p className="legal-text">
                If you have questions, concerns, or requests regarding this Privacy Policy or how your personal information is handled, please contact us through the contact details provided on shahrukhz-residence.com.
              </p>
            </div>

            {/* CTA Box */}
            <div className="subpage-cta-box">
              <h3 className="subpage-cta-title">Need Assistance With Your Data?</h3>
              <p className="subpage-cta-desc">
                Contact our customer support team for inquiries regarding personal data preferences and property requests.
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
