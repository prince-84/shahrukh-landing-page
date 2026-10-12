import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const alt = "Shahrukhz Residences by Danube Properties Dubai";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#07090e",
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(197, 168, 128, 0.25) 0%, transparent 50%), radial-gradient(circle at 10% 90%, rgba(30, 41, 59, 0.4) 0%, transparent 60%)",
          padding: "60px 80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          color: "#ffffff",
        }}
      >
        {/* Header Badge */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "10px 22px",
              backgroundColor: "rgba(197, 168, 128, 0.15)",
              border: "1px solid rgba(197, 168, 128, 0.4)",
              borderRadius: "999px",
            }}
          >
            <span style={{ fontSize: "16px", color: "#e5cfa7", letterSpacing: "2px", fontWeight: 700, textTransform: "uppercase" }}>
              DANUBE PROPERTIES • DUBAI LAUNCH
            </span>
          </div>
          <span style={{ fontSize: "18px", color: "#94a3b8", fontWeight: 500 }}>
            Freehold Luxury Waterfront
          </span>
        </div>

        {/* Main Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h1
            style={{
              fontSize: "64px",
              fontWeight: 800,
              lineHeight: 1.1,
              margin: 0,
              background: "linear-gradient(to right, #ffffff, #f1e2ce, #c5a880)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {siteConfig.name}
          </h1>
          <p
            style={{
              fontSize: "26px",
              color: "#cbd5e1",
              maxWidth: "960px",
              margin: 0,
              lineHeight: 1.4,
            }}
          >
            Ultra-Luxury Waterfront Studios, Apartments & Penthouses in Dubai Maritime City. 30/70 Flexible Payment Plan & Q4 2029 Completion.
          </p>
        </div>

        {/* Bottom Feature Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255, 255, 255, 0.12)",
            paddingTop: "32px",
          }}
        >
          <div style={{ display: "flex", gap: "48px" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "14px", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "1px" }}>
                Starting From
              </span>
              <span style={{ fontSize: "28px", fontWeight: 700, color: "#e5cfa7" }}>AED 1.65M</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "14px", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "1px" }}>
                Payment Plan
              </span>
              <span style={{ fontSize: "28px", fontWeight: 700, color: "#ffffff" }}>30/70 Structure</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "14px", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "1px" }}>
                Location
              </span>
              <span style={{ fontSize: "28px", fontWeight: 700, color: "#ffffff" }}>Dubai Maritime City</span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#c5a880",
              color: "#07090e",
              fontWeight: 800,
              fontSize: "18px",
              padding: "14px 28px",
              borderRadius: "12px",
            }}
          >
            Register VIP Interest →
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
