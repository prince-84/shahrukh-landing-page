import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Disclaimer | Legal Notice & Website Terms",
  description:
    "Read our disclaimer, legal notice, and website terms to understand the conditions of use, legal responsibilities, and limitations of information on our website.",
  alternates: {
    canonical: `${siteConfig.url}/disclaimer`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteConfig.url}/disclaimer`,
    title: "Disclaimer | Legal Notice & Website Terms",
    description:
      "Read our disclaimer, legal notice, and website terms to understand the conditions of use, legal responsibilities, and limitations of information on our website.",
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/hero-img.webp",
        width: 1200,
        height: 630,
        alt: "Shahrukhz Residences Legal Disclaimer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Disclaimer | Legal Notice & Website Terms",
    description:
      "Read our disclaimer, legal notice, and website terms to understand the conditions of use, legal responsibilities, and limitations of information on our website.",
    site: "@DanubeProperties",
    creator: "@DanubeProperties",
    images: ["/images/hero-img.webp"],
  },
};

export default function DisclaimerPage() {
  return (
    <div className="subpage-container light-theme-page">
      <Navbar />

      {/* TOP INTRO SECTION */}
      <section className="price-intro-section" aria-label="Disclaimer Overview">
        <div className="container">
          <div className="subpage-breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span>Disclaimer</span>
          </div>

          <h1 className="price-intro-title">Disclaimer</h1>

          <div className="price-intro-text-block">
            <p className="price-intro-paragraph">
              The information provided on this website is for general guidance and informational purposes only. While shahrukhz-residence.com strives to ensure accuracy, all content is subject to change without notice.
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
              <h2 className="legal-heading-2">Property Information</h2>
              <p className="legal-text">
                All property listings, descriptions, prices, availability, images, layouts, floor plans, specifications, and related details displayed on this website are indicative only and may be modified by developers or relevant authorities at any time.
              </p>
              <p className="legal-text">
                Property information should not be relied upon as a definitive representation of any project or unit.
              </p>
            </div>

            {/* Section 2 */}
            <div className="legal-section-block">
              <h2 className="legal-heading-2">Off-Plan Properties</h2>
              <p className="legal-text">
                For off-plan developments, all visuals, renderings, brochures, and conceptual materials are for illustrative purposes only. Final designs, specifications, and completion timelines may vary.
              </p>
              <p className="legal-text">
                shahrukhz-residence.com does not guarantee project completion dates, specifications, or final outcomes.
              </p>
            </div>

            {/* Section 3 */}
            <div className="legal-section-block">
              <h2 className="legal-heading-2">No Financial or Investment Advice</h2>
              <p className="legal-text">
                Nothing on this website constitutes legal, financial, or investment advice. Any property-related decision should be made after independent due diligence and consultation with qualified professionals.
              </p>
            </div>

            {/* Section 4 */}
            <div className="legal-section-block">
              <h2 className="legal-heading-2">No Guarantee of Returns</h2>
              <p className="legal-text">
                shahrukhz-residence.com makes no representations or guarantees regarding capital appreciation, rental income, yields, or future property value. Past performance or market trends do not guarantee future results.
              </p>
            </div>

            {/* Section 5 */}
            <div className="legal-section-block">
              <h2 className="legal-heading-2">Third-Party Information</h2>
              <p className="legal-text">
                Some content on this website may be based on information provided by developers, partners, or third parties. shahrukhz-residence.com does not accept responsibility for inaccuracies, omissions, or changes originating from third-party sources.
              </p>
            </div>

            {/* Section 6 */}
            <div className="legal-section-block">
              <h2 className="legal-heading-2">Limitation of Liability</h2>
              <p className="legal-text">
                To the fullest extent permitted by law, shahrukhz-residence.com shall not be liable for any loss, damage, or claim arising from reliance on information contained on this website or from the use of its services.
              </p>
            </div>

            {/* Section 7 */}
            <div className="legal-section-block">
              <h2 className="legal-heading-2">External Links</h2>
              <p className="legal-text">
                This website may contain links to external websites for convenience or informational purposes. shahrukhz-residence.com does not endorse and is not responsible for the content, accuracy, or policies of third-party websites.
              </p>
            </div>

            {/* Section 8 */}
            <div className="legal-section-block">
              <h2 className="legal-heading-2">Updates to This Disclaimer</h2>
              <p className="legal-text">
                shahrukhz-residence.com reserves the right to amend or update this Disclaimer at any time without prior notice. Continued use of the website constitutes acceptance of the revised terms.
              </p>
            </div>

            {/* CTA Box */}
            <div className="subpage-cta-box">
              <h3 className="subpage-cta-title">Have Questions Regarding Project Terms?</h3>
              <p className="subpage-cta-desc">
                Contact our customer support team for official documentation, verified developer details, and project agreements.
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
