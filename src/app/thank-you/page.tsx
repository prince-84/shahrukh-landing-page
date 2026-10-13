import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Thank You | Shahrukhz Residences by Danube",
  description:
    "Thank you for inquiring about Shahrukhz Residences by Danube Properties at Dubai Maritime City. A property specialist will contact you shortly.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <div className="subpage-container light-theme-page">
      <Navbar />

      {/* TOP INTRO SECTION */}
      <section className="price-intro-section" aria-label="Inquiry Confirmation">
        <div className="container">
          <div className="subpage-breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Thank You</span>
          </div>

          <h1 className="price-intro-title">Thank You For Your Inquiry</h1>

          <div className="price-intro-text-block">
            <p className="price-intro-paragraph">
              Your details have been successfully submitted for Shahrukhz Residences by Danube at Dubai Maritime City.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONFIRMATION CONTENT */}
      <main className="subpage-body" style={{ backgroundColor: "#f8fafc", padding: "50px 0 80px" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          <div
            className="subpage-card"
            style={{
              textAlign: "center",
              padding: "48px 32px",
              borderRadius: "8px",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.06)",
              backgroundColor: "#ffffff",
              border: "1px solid #e2e8f0",
            }}
          >
            {/* Animated Checkmark Badge */}
            <div
              style={{
                width: "72px",
                height: "72px",
                borderRadius: "50%",
                backgroundColor: "#ecfdf5",
                color: "#10b981",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "24px",
                border: "2px solid #a7f3d0",
              }}
              aria-hidden="true"
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>

            <h2
              style={{
                fontSize: "1.75rem",
                fontWeight: 700,
                color: "#0f172a",
                marginBottom: "12px",
                letterSpacing: "0.5px",
                fontFamily: "var(--font-heading, inherit)",
              }}
            >
              INQUIRY RECEIVED SUCCESSFULLY
            </h2>

            <p
              style={{
                fontSize: "1.05rem",
                color: "#475569",
                lineHeight: "1.7",
                maxWidth: "620px",
                margin: "0 auto 36px",
              }}
            >
              Thank you for your interest in <strong>Shahrukhz Residences</strong>. Our dedicated Danube Properties luxury real estate specialist will contact you shortly with the official brochure, current availability, and custom 1% payment plan options.
            </p>

            {/* Next Steps 3-Col Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "20px",
                textAlign: "left",
                marginBottom: "40px",
                padding: "24px",
                backgroundColor: "#f8fafc",
                borderRadius: "6px",
                border: "1px solid #edf2f7",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#baa07e", letterSpacing: "1px" }}>
                  STEP 01
                </span>
                <strong style={{ fontSize: "0.95rem", color: "#0f172a" }}>Advisory Assignment</strong>
                <p style={{ fontSize: "0.84rem", color: "#64748b", margin: 0, lineHeight: 1.5 }}>
                  A certified Danube representative is assigned to review your investment requirements.
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#baa07e", letterSpacing: "1px" }}>
                  STEP 02
                </span>
                <strong style={{ fontSize: "0.95rem", color: "#0f172a" }}>Brochure &amp; Pricing</strong>
                <p style={{ fontSize: "0.84rem", color: "#64748b", margin: 0, lineHeight: 1.5 }}>
                  Exclusive floor plans, unit views, and financial breakdowns are dispatched to you.
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#baa07e", letterSpacing: "1px" }}>
                  STEP 03
                </span>
                <strong style={{ fontSize: "0.95rem", color: "#0f172a" }}>VIP Priority Access</strong>
                <p style={{ fontSize: "0.84rem", color: "#64748b", margin: 0, lineHeight: 1.5 }}>
                  Receive pre-launch allocation and priority selection for waterfront units.
                </p>
              </div>
            </div>

            {/* Quick Actions */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "14px",
                justifyContent: "center",
              }}
            >
              <Link
                href="/"
                className="btn-connect-submit"
                style={{
                  display: "inline-block",
                  textDecoration: "none",
                  padding: "14px 28px",
                  fontSize: "0.88rem",
                  letterSpacing: "0.5px",
                  backgroundColor: "#0f172a",
                  color: "#ffffff",
                  borderRadius: "2px",
                }}
              >
                RETURN TO HOMEPAGE
              </Link>
              <Link
                href="/prices"
                style={{
                  display: "inline-block",
                  textDecoration: "none",
                  padding: "14px 28px",
                  fontSize: "0.88rem",
                  letterSpacing: "0.5px",
                  backgroundColor: "#baa07e",
                  color: "#ffffff",
                  fontWeight: 600,
                  borderRadius: "2px",
                  transition: "background-color 0.2s",
                }}
              >
                EXPLORE PRICING
              </Link>
              <Link
                href="/payment-plan"
                style={{
                  display: "inline-block",
                  textDecoration: "none",
                  padding: "14px 28px",
                  fontSize: "0.88rem",
                  letterSpacing: "0.5px",
                  backgroundColor: "#f1f5f9",
                  color: "#1e293b",
                  fontWeight: 600,
                  border: "1px solid #cbd5e1",
                  borderRadius: "2px",
                }}
              >
                VIEW 1% PAYMENT PLAN
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
