"use client";

import React, { useState, useEffect, useRef } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

interface LeadPayload {
  name: string;
  phone: string;
  email: string;
  source: string;
  sub_source: string;
  utm_campaign: string;
  campaign_url: string;
  project: string;
  developer: string;
  community: string;
  property_type: string;
  key_requirement: string;
  activity_description: string;
}

export function InquireForm() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("ae");
  const userHasEditedPhoneRef = useRef(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [tracking, setTracking] = useState({
    source: "",
    sub_source: "",
    utm_campaign: "",
    campaign_url: "",
  });

  // 1. Auto-detect user country location
  useEffect(() => {
    const applyDetectedCountry = (iso: string) => {
      if (!userHasEditedPhoneRef.current && iso) {
        setCountry(iso);
        setPhone("");
      }
    };

    // Fast heuristic via client timezone (instant on client mount)
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone.toLowerCase();
      let detectedIso = "";
      if (tz.includes("karachi") || tz.includes("pakistan") || tz.includes("islamabad") || tz.includes("lahore")) detectedIso = "pk";
      else if (tz.includes("kolkata") || tz.includes("calcutta") || tz.includes("india")) detectedIso = "in";
      else if (tz.includes("dubai") || tz.includes("muscat") || tz.includes("gulf") || tz.includes("uae") || tz.includes("abu_dhabi")) detectedIso = "ae";
      else if (tz.includes("riyadh")) detectedIso = "sa";
      else if (tz.includes("dhaka")) detectedIso = "bd";
      else if (tz.includes("london")) detectedIso = "gb";
      else if (tz.includes("qatar")) detectedIso = "qa";
      else if (tz.includes("kuwait")) detectedIso = "kw";
      else if (tz.includes("bahrain")) detectedIso = "bh";
      else if (tz.includes("new_york") || tz.includes("chicago") || tz.includes("los_angeles") || tz.includes("denver")) detectedIso = "us";
      else if (tz.includes("toronto") || tz.includes("vancouver")) detectedIso = "ca";
      else if (tz.includes("moscow")) detectedIso = "ru";

      if (detectedIso) {
        applyDetectedCountry(detectedIso);
      }
    } catch {}

    // High-accuracy Geo IP detection
    const controller = new AbortController();
    fetch("https://api.country.is/", { signal: controller.signal })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.country && typeof data.country === "string") {
          applyDetectedCountry(data.country.toLowerCase());
        }
      })
      .catch(() => {
        fetch("https://ipwho.is/", { signal: controller.signal })
          .then((r) => r.json())
          .then((d) => {
            if (d && d.country_code && typeof d.country_code === "string") {
              applyDetectedCountry(d.country_code.toLowerCase());
            }
          })
          .catch(() => {});
      });

    return () => controller.abort();
  }, []);

  // 2. Capture URL tracking & campaign parameters
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const utmSource = params.get("utm_source") || params.get("source") || "";
      const utmMedium = params.get("utm_medium") || params.get("sub_source") || "";
      const utmCampaign = params.get("utm_campaign") || params.get("campaign") || "";

      let source = utmSource;
      if (!source) {
        if (document.referrer) {
          try {
            source = new URL(document.referrer).hostname;
          } catch {
            source = "Referral";
          }
        } else {
          source = "Website";
        }
      }

      const subSource = utmMedium || "shahrukhz-residence";

      setTracking({
        source,
        sub_source: subSource,
        utm_campaign: utmCampaign,
        campaign_url: window.location.href,
      });
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    const payload: LeadPayload = {
      name: formData.name.trim(),
      phone: phone.trim(),
      email: formData.email.trim(),
      source: tracking.source || "Website",
      sub_source: tracking.sub_source || "shahrukhz-residence",
      utm_campaign: tracking.utm_campaign || "",
      campaign_url: tracking.campaign_url || (typeof window !== "undefined" ? window.location.href : ""),
      project: "Shahrukhz Residences by Danube",
      developer: "Danube Properties",
      community: "Dubai Maritime City",
      property_type: "Apartments & Penthouses",
      key_requirement: "Waterfront Luxury Residences",
      activity_description: "New lead submitted via website inquiry form",
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        console.warn("Lead route warning:", res.status);
      }
    } catch (err) {
      console.error("Submission error:", err);
    } finally {
      setIsSubmitting(false);
      // Redirect to thank-you page
      if (typeof window !== "undefined") {
        window.location.href = "/thank-you";
      }
    }
  };

  if (isSubmitted) {
    return (
      <div className="connect-form-success" role="status" aria-live="polite">
        <div className="success-icon" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="success-title">THANK YOU, {formData.name.toUpperCase()}!</h3>
        <p className="success-desc">
          Your inquiry has been received. Our luxury property specialist will reach out to you at <strong>{phone}</strong> shortly.
        </p>
        <button
          type="button"
          onClick={() => {
            setIsSubmitted(false);
            setFormData({ name: "", email: "" });
            setPhone("");
          }}
          className="btn-connect-submit"
          style={{ marginTop: "16px" }}
        >
          SUBMIT ANOTHER INQUIRY
        </button>
      </div>
    );
  }

  return (
    <form className="connect-form" onSubmit={handleSubmit} aria-label="Connect Inquiry Form">
      {/* 1. Name */}
      <input
        type="text"
        name="name"
        placeholder="Name*"
        required
        autoComplete="name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="connect-input"
        aria-label="Your Name"
      />

      {/* 2. Email Address */}
      <input
        type="email"
        name="email"
        placeholder="Email*"
        required
        autoComplete="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="connect-input"
        aria-label="Email Address"
      />

      {/* 3. Phone with react-international-phone with auto-detected country & flags */}
      <div className="connect-intl-phone-container">
        <PhoneInput
          key={country}
          defaultCountry={country}
          value={phone}
          onChange={(newPhone) => {
            setPhone(newPhone);
          }}
          preferredCountries={["ae", "sa", "qa", "kw", "om", "bh", "pk", "in", "gb", "us", "ru"]}
          placeholder="Phone Number*"
          inputProps={{
            name: "phone",
            autoComplete: "tel",
            "aria-label": "Phone Number",
            required: true,
            onFocus: () => {
              userHasEditedPhoneRef.current = true;
            },
            onKeyDown: () => {
              userHasEditedPhoneRef.current = true;
            },
          }}
        />
      </div>

      {/* Terms & Conditions Checkbox (Optional) */}
      <label className="connect-terms-label">
        <input
          type="checkbox"
          name="terms"
          defaultChecked
          className="connect-checkbox"
        />
        <span>
          I agree to be contacted by Danube Properties and accept the{" "}
          <a href="/terms-and-conditions">Terms &amp; Conditions</a>.
        </span>
      </label>

      {/* Submit Button */}
      <button type="submit" disabled={isSubmitting} className="btn-connect-submit">
        {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
      </button>
    </form>
  );
}

export default InquireForm;
