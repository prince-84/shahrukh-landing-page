import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "src", "data", "testimonials.json");
const META_FILE = path.join(process.cwd(), "src", "data", "testimonials-meta.json");

export async function POST(request: Request) {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { success: false, error: "OPENROUTER_API_KEY is not configured in .env.local" },
      { status: 400 }
    );
  }

  const prompt = `You are an elite luxury real estate copywriter. Generate exactly 2 or 3 distinct, genuine, highly authentic customer testimonials/reviews from real international property investors or luxury homebuyers who purchased or registered for "Shahrukhz Residences by Danube" in Dubai Maritime City.
Details to naturally highlight across reviews:
- Waterfront coastal living in Dubai Maritime City, close to Port Rashid boat station and Downtown Dubai.
- Fully furnished luxury apartments with interiors designed by Gauri Khan.
- Over 40 resort amenities including the Infinity 33 sky pool, King's Club observatory deck, private beach lagoon, and Longevity wellness spa.
- Attractive 30/70 payment plan, completion in Q4 2029, starting from AED 1.65M.
- Diverse international buyer personas (e.g. GCC national, British investor, European expat, Asian entrepreneur).
- Rating: 5 stars (or 4.8).

Return ONLY valid JSON (no markdown formatting, no code block backticks) matching this exact JSON array schema:
[
  {
    "name": "Full Name",
    "location": "City, Country",
    "rating": 5,
    "buyerType": "Investor" or "End-User" or "Homebuyer",
    "title": "Short compelling summary title",
    "comment": "Genuine 2-3 sentence review reflecting real investor/buyer perspective."
  }
]`;

  try {
    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://shahrukhz-residence.com",
        "X-Title": "Shahrukhz Residences by Danube",
      },
      body: JSON.stringify({
        model: "qwen/qwen3.8-27b",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.75,
        max_tokens: 800,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      return NextResponse.json(
        { success: false, error: `OpenRouter API error: ${res.status}`, details: errText },
        { status: res.status }
      );
    }

    const json = await res.json();
    let content = json?.choices?.[0]?.message?.content || "";
    content = content.replace(/```json/gi, "").replace(/```/g, "").trim();

    const parsed = JSON.parse(content);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      return NextResponse.json(
        { success: false, error: "Model did not return a valid review array" },
        { status: 500 }
      );
    }

    const today = new Date().toISOString().split("T")[0];
    const newReviews = parsed.map((item, i) => ({
      id: `ai-${Date.now()}-${i}`,
      name: item.name || "Verified Buyer",
      location: item.location || "Dubai, UAE",
      rating: Number(item.rating) || 5,
      date: today,
      buyerType: item.buyerType || "Investor",
      verified: true,
      title: item.title || "Exceptional Waterfront Development",
      comment: item.comment || "",
    }));

    let existing: any[] = [];
    if (fs.existsSync(DATA_FILE)) {
      existing = JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
    }

    const updated = [...newReviews, ...existing];
    fs.writeFileSync(DATA_FILE, JSON.stringify(updated, null, 2), "utf-8");
    fs.writeFileSync(META_FILE, JSON.stringify({ lastGeneratedAt: Date.now() }, null, 2), "utf-8");

    return NextResponse.json({
      success: true,
      message: `Successfully generated ${newReviews.length} new reviews via Qwen 3.8 27B`,
      generated: newReviews,
      totalReviews: updated.length,
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: "Failed to process Qwen AI generation", details: err?.message },
      { status: 500 }
    );
  }
}
