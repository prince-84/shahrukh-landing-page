"use client";

import React, { useState } from "react";

interface UnitPlan {
  id: string;
  name: string;
  price: number;
}

const unitOptions: UnitPlan[] = [
  { id: "studio-skyline", name: "Studio · Skyline Sea View — from AED 1.7M", price: 1700000 },
  { id: "flex-studio-skyline", name: "Flex Studio · Skyline Sea View — from AED 1.85M", price: 1850000 },
  { id: "flex-studio-panoramic", name: "Flex Studio · Panoramic Sea View — from AED 2.0M", price: 2000000 },
  { id: "1bhk-skyline", name: "1 BHK · Skyline Sea View — from AED 2.3M", price: 2300000 },
  { id: "1bhk-panoramic", name: "1 BHK · Panoramic Sea View — from AED 2.6M", price: 2600000 },
  { id: "flex-1bhk", name: "Flex 1 BHK · Panoramic / Skyline — from AED 2.95M", price: 2950000 },
  { id: "kings-1bhk", name: "King's 1 BHK · Panoramic Sea View — from AED 3.4M", price: 3400000 },
  { id: "2bhk-premium", name: "2 BHK Premium · Panoramic Sea View — from AED 4.25M", price: 4250000 },
  { id: "kings-2bhk", name: "King's 2 BHK · Panoramic Sea View — from AED 4.95M", price: 4950000 },
  { id: "3bhk", name: "3 BHK · Panoramic Sea View — from AED 6.5M", price: 6500000 },
];

export function PaymentPlanCalculator() {
  const [selectedUnitId, setSelectedUnitId] = useState<string>("studio-skyline");

  const selectedUnit = unitOptions.find((u) => u.id === selectedUnitId) || unitOptions[0];
  const price = selectedUnit.price;

  const downPayment = Math.round(price * 0.1);
  const secondInstalment = Math.round(price * 0.1);
  const thirdInstalment = Math.round(price * 0.05);
  const fourthInstalment = Math.round(price * 0.05);
  const handoverAmount = Math.round(price * 0.7);

  const formatAed = (val: number) => `AED ${val.toLocaleString()}`;

  return (
    <section className="payment-plan-section" id="30-70-plan" aria-label="30/70 Payment Plan Breakdown">
      <div className="container">
        {/* Section Header */}
        <div className="plan-header-row">
          <div className="plan-header-left">
            <span className="plan-eyebrow">— 30/70 PAYMENT PLAN</span>
            <h2 className="plan-main-title">
              Pay 30% while it is <br />
              built. 70% on handover.
            </h2>
          </div>
          <div className="plan-header-right">
            <p className="plan-header-desc">
              Ten per cent books the home. The next twenty per cent is spread across eighteen months, and the balance falls due at handover in December 2029.
            </p>
          </div>
        </div>

        {/* Dropdown Selector */}
        <div className="plan-selector-bar">
          <label htmlFor="unit-plan-select" className="plan-selector-label">
            SHOW THE PLAN FOR
          </label>
          <div className="plan-select-dropdown-wrap">
            <select
              id="unit-plan-select"
              value={selectedUnitId}
              onChange={(e) => setSelectedUnitId(e.target.value)}
              className="plan-select-dropdown"
              aria-label="Select property type to view payment plan"
            >
              {unitOptions.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  {opt.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Segmented Progress Bar */}
        <div className="plan-segmented-bar" aria-hidden="true">
          <div className="plan-segment segment-10" title="10% Down Payment"></div>
          <div className="plan-segment segment-10" title="10% 2nd Instalment"></div>
          <div className="plan-segment segment-5" title="5% 3rd Instalment"></div>
          <div className="plan-segment segment-5" title="5% 4th Instalment"></div>
          <div className="plan-segment segment-70" title="70% On Handover"></div>
        </div>

        {/* 5 Milestone Cards Grid */}
        <div className="plan-cards-grid">
          {/* Card 1: 10% Down payment */}
          <div className="plan-milestone-card">
            <div className="plan-percent-text">
              10<span className="percent-sign">%</span>
            </div>
            <div className="plan-card-title">Down payment</div>
            <div className="plan-card-timing">Within 21 days of booking</div>
            <div className="plan-card-divider"></div>
            <div className="plan-card-amount">{formatAed(downPayment)}</div>
          </div>

          {/* Card 2: 10% 2nd instalment */}
          <div className="plan-milestone-card">
            <div className="plan-percent-text">
              10<span className="percent-sign">%</span>
            </div>
            <div className="plan-card-title">2nd instalment</div>
            <div className="plan-card-timing">2 months from booking</div>
            <div className="plan-card-divider"></div>
            <div className="plan-card-amount">{formatAed(secondInstalment)}</div>
          </div>

          {/* Card 3: 5% 3rd instalment */}
          <div className="plan-milestone-card">
            <div className="plan-percent-text">
              5<span className="percent-sign">%</span>
            </div>
            <div className="plan-card-title">3rd instalment</div>
            <div className="plan-card-timing">10 months from booking</div>
            <div className="plan-card-divider"></div>
            <div className="plan-card-amount">{formatAed(thirdInstalment)}</div>
          </div>

          {/* Card 4: 5% 4th instalment */}
          <div className="plan-milestone-card">
            <div className="plan-percent-text">
              5<span className="percent-sign">%</span>
            </div>
            <div className="plan-card-title">4th instalment</div>
            <div className="plan-card-timing">18 months from booking</div>
            <div className="plan-card-divider"></div>
            <div className="plan-card-amount">{formatAed(fourthInstalment)}</div>
          </div>

          {/* Card 5: 70% On handover (Dark Brand Card) */}
          <div className="plan-milestone-card card-handover-dark">
            <div className="plan-percent-text">
              70<span className="percent-sign">%</span>
            </div>
            <div className="plan-card-title">On handover</div>
            <div className="plan-card-timing">December 2029</div>
            <div className="plan-card-divider"></div>
            <div className="plan-card-amount">{formatAed(handoverAmount)}</div>
          </div>
        </div>

        {/* Disclaimer Note */}
        <p className="plan-disclaimer-note">
          Amounts are worked from the starting price of the selected type and are indicative; your sale agreement sets the exact figures. Dubai Land Department fees and other charges are extra.
        </p>

        {/* Submit your EOI today Callout Box */}
        <div className="plan-eoi-banner">
          <div className="plan-eoi-banner-left">
            <h3 className="plan-eoi-title">Submit your EOI today</h3>
            <p className="plan-eoi-desc">
              Pay the 10% down payment and the developer gives you priority allocation of units.
            </p>
          </div>
          <div className="plan-eoi-banner-right">
            <div className="plan-eoi-tier">
              <span className="eoi-tier-label">STUDIO &amp; 1 BHK</span>
              <span className="eoi-tier-price">AED 50,000</span>
            </div>
            <div className="plan-eoi-divider" aria-hidden="true"></div>
            <div className="plan-eoi-tier">
              <span className="eoi-tier-label">2 BHK &amp; ABOVE</span>
              <span className="eoi-tier-price">AED 100,000</span>
            </div>
            <a href="/#inquire" className="btn-plan-eoi-action">
              Start my EOI →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default PaymentPlanCalculator;
