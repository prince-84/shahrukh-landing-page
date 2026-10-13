import { NextResponse } from "next/server";

const N8N_WEBHOOK_URL =
  process.env.N8N_WEBHOOK_URL ||
  "https://n8n.srv1625508.hstgr.cloud/webhook/979a4b97-a515-4ee0-96e3-5d0ddb475e99";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const payload = {
      name: body.name || "",
      phone: body.phone || "",
      email: body.email || "",
      source: body.source || "",
      sub_source: body.sub_source || "",
      utm_campaign: body.utm_campaign || "",
      campaign_url: body.campaign_url || "",
      project: body.project || "Shahrukhz Residences by Danube",
      developer: body.developer || "Danube Properties",
      community: body.community || "Dubai Maritime City",
      property_type: body.property_type || "Apartments & Penthouses",
      key_requirement: body.key_requirement || "Waterfront Luxury Residences",
      activity_description:
        body.activity_description ||
        "Inquiry submitted via official landing page form",
    };

    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (process.env.N8N_WEBHOOK_AUTH_TOKEN) {
      headers["Authorization"] = process.env.N8N_WEBHOOK_AUTH_TOKEN;
    }

    try {
      const webhookRes = await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers,
        body: JSON.stringify(payload),
      });

      if (!webhookRes.ok) {
        const errText = await webhookRes.text().catch(() => "");
        console.warn(
          `n8n webhook returned status ${webhookRes.status}:`,
          errText
        );
      }
    } catch (webhookErr) {
      console.error("Failed to forward lead to n8n webhook:", webhookErr);
    }

    return NextResponse.json({ success: true, message: "Lead submitted successfully" });
  } catch (error) {
    console.error("Lead API route error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process lead" },
      { status: 500 }
    );
  }
}
