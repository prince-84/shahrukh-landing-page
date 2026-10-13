"use client";

import React, { useState, useEffect, useRef } from "react";

interface CountryInfo {
  code: string;
  name: string;
  dial: string;
  flag: string;
}

const COUNTRIES: CountryInfo[] = [
  { code: "AE", name: "United Arab Emirates", dial: "+971", flag: "🇦🇪" },
  { code: "PK", name: "Pakistan", dial: "+92", flag: "🇵🇰" },
  { code: "IN", name: "India", dial: "+91", flag: "🇮🇳" },
  { code: "SA", name: "Saudi Arabia", dial: "+966", flag: "🇸🇦" },
  { code: "QA", name: "Qatar", dial: "+974", flag: "🇶🇦" },
  { code: "KW", name: "Kuwait", dial: "+965", flag: "🇰🇼" },
  { code: "OM", name: "Oman", dial: "+968", flag: "🇴🇲" },
  { code: "BH", name: "Bahrain", dial: "+973", flag: "🇧🇭" },
  { code: "GB", name: "United Kingdom", dial: "+44", flag: "🇬🇧" },
  { code: "US", name: "United States", dial: "+1", flag: "🇺🇸" },
  { code: "CA", name: "Canada", dial: "+1", flag: "🇨🇦" },
  { code: "AU", name: "Australia", dial: "+61", flag: "🇦🇺" },
  { code: "RU", name: "Russia", dial: "+7", flag: "🇷🇺" },
  { code: "DE", name: "Germany", dial: "+49", flag: "🇩🇪" },
  { code: "FR", name: "France", dial: "+33", flag: "🇫🇷" },
  { code: "IT", name: "Italy", dial: "+39", flag: "🇮🇹" },
  { code: "ES", name: "Spain", dial: "+34", flag: "🇪🇸" },
  { code: "TR", name: "Turkey", dial: "+90", flag: "🇹🇷" },
  { code: "EG", name: "Egypt", dial: "+20", flag: "🇪🇬" },
  { code: "JO", name: "Jordan", dial: "+962", flag: "🇯🇴" },
  { code: "LB", name: "Lebanon", dial: "+961", flag: "🇱🇧" },
  { code: "BD", name: "Bangladesh", dial: "+880", flag: "🇧🇩" },
  { code: "PH", name: "Philippines", dial: "+63", flag: "🇵🇭" },
  { code: "ID", name: "Indonesia", dial: "+62", flag: "🇮🇩" },
  { code: "MY", name: "Malaysia", dial: "+60", flag: "🇲🇾" },
  { code: "SG", name: "Singapore", dial: "+65", flag: "🇸🇬" },
  { code: "ZA", name: "South Africa", dial: "+27", flag: "🇿🇦" },
  { code: "NG", name: "Nigeria", dial: "+234", flag: "🇳🇬" },
  { code: "KE", name: "Kenya", dial: "+254", flag: "🇰🇪" },
  { code: "CN", name: "China", dial: "+86", flag: "🇨🇳" },
  { code: "JP", name: "Japan", dial: "+81", flag: "🇯🇵" },
  { code: "KR", name: "South Korea", dial: "+82", flag: "🇰🇷" },
  { code: "CH", name: "Switzerland", dial: "+41", flag: "🇨🇭" },
  { code: "NL", name: "Netherlands", dial: "+31", flag: "🇳🇱" },
  { code: "SE", name: "Sweden", dial: "+46", flag: "🇸🇪" },
  { code: "NO", name: "Norway", dial: "+47", flag: "🇳🇴" },
];

function getFlagFromCode(code: string): string {
  try {
    const codePoints = code
      .toUpperCase()
      .split("")
      .map((char) => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  } catch {
    return "🌐";
  }
}

export function InquireForm() {
  const [selectedCountry, setSelectedCountry] = useState<CountryInfo>(COUNTRIES[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Auto-detect user country location
  useEffect(() => {
    let detectedCode = "";

    // Step 1: Fast synchronous fallback via timezone
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (tz.includes("Karachi")) detectedCode = "PK";
      else if (tz.includes("Dubai")) detectedCode = "AE";
      else if (tz.includes("Kolkata")) detectedCode = "IN";
      else if (tz.includes("Riyadh")) detectedCode = "SA";
      else if (tz.includes("London")) detectedCode = "GB";
      else if (tz.includes("New_York") || tz.includes("Chicago") || tz.includes("Los_Angeles")) detectedCode = "US";
    } catch {
      // ignore
    }

    if (detectedCode) {
      const match = COUNTRIES.find((c) => c.code === detectedCode);
      if (match) setSelectedCountry(match);
    }

    // Step 2: Accurate client IP geolocation
    const controller = new AbortController();
    fetch("https://api.country.is/", { signal: controller.signal })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.country) {
          const code = String(data.country).toUpperCase();
          const match = COUNTRIES.find((c) => c.code === code);
          if (match) {
            setSelectedCountry(match);
          } else {
            // Dynamic country not in list
            setSelectedCountry({
              code,
              name: code,
              dial: "+",
              flag: getFlagFromCode(code),
            });
          }
        }
      })
      .catch(() => {
        // Fallback to secondary geo service
        fetch("https://ipwho.is/", { signal: controller.signal })
          .then((r) => r.json())
          .then((d) => {
            if (d && d.country_code) {
              const code = String(d.country_code).toUpperCase();
              const match = COUNTRIES.find((c) => c.code === code);
              if (match) {
                setSelectedCountry(match);
              } else {
                setSelectedCountry({
                  code,
                  name: d.country || code,
                  dial: d.calling_code ? `+${d.calling_code}` : "+",
                  flag: getFlagFromCode(code),
                });
              }
            }
          })
          .catch(() => {});
      });

    return () => controller.abort();
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredCountries = COUNTRIES.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.dial.includes(search) ||
      c.code.toLowerCase().includes(search.toLowerCase())
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
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
          Your inquiry has been received. Our luxury property specialist will reach out to you at <strong>{selectedCountry.dial} {formData.phone}</strong> shortly.
        </p>
        <button
          type="button"
          onClick={() => {
            setIsSubmitted(false);
            setFormData({ name: "", email: "", phone: "" });
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

      {/* 3. Phone with Auto-detected Country Flag & Dial Code */}
      <div className="connect-phone-group" ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="connect-phone-prefix-btn"
          aria-label={`Selected country: ${selectedCountry.name} (${selectedCountry.dial}). Click to change.`}
          aria-expanded={isOpen}
        >
          <span className="country-flag-emoji" aria-hidden="true">{selectedCountry.flag}</span>
          <span className="country-code-text">{selectedCountry.dial}</span>
          <svg
            width="8"
            height="5"
            viewBox="0 0 10 6"
            fill="currentColor"
            aria-hidden="true"
            className={`phone-chevron ${isOpen ? "open" : ""}`}
          >
            <path d="M0 0l5 5 5-5z" />
          </svg>
        </button>

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number*"
          required
          autoComplete="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="connect-input phone-input"
          aria-label="Phone Number"
        />

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="country-dropdown-menu" role="listbox">
            <div className="country-search-wrap">
              <input
                type="text"
                placeholder="Search country or code..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="country-search-input"
                autoFocus
              />
            </div>
            <div className="country-list-scroll">
              {filteredCountries.map((c) => (
                <button
                  key={c.code}
                  type="button"
                  onClick={() => {
                    setSelectedCountry(c);
                    setIsOpen(false);
                    setSearch("");
                  }}
                  className={`country-item-btn ${selectedCountry.code === c.code ? "selected" : ""}`}
                  role="option"
                  aria-selected={selectedCountry.code === c.code}
                >
                  <span className="country-item-flag">{c.flag}</span>
                  <span className="country-item-name">{c.name}</span>
                  <span className="country-item-dial">{c.dial}</span>
                </button>
              ))}
              {filteredCountries.length === 0 && (
                <div className="country-no-result">No country found</div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Terms & Conditions Checkbox */}
      <label className="connect-terms-label">
        <input
          type="checkbox"
          name="terms"
          defaultChecked
          required
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
