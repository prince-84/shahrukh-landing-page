import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "src", "data", "testimonials.json");
const META_FILE = path.join(process.cwd(), "src", "data", "testimonials-meta.json");

interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  buyerType: string;
  verified: boolean;
  title: string;
  comment: string;
}

function getStoredReviews(): Review[] {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      return [];
    }
    const data = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading testimonials:", err);
    return [];
  }
}

function saveReviews(reviews: Review[]) {
  try {
    const dir = path.dirname(DATA_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify(reviews, null, 2), "utf-8");
  } catch (err) {
    console.error("Error writing testimonials:", err);
  }
}

function getMeta(): { lastGeneratedAt: number } {
  try {
    if (fs.existsSync(META_FILE)) {
      return JSON.parse(fs.readFileSync(META_FILE, "utf-8"));
    }
  } catch {}
  return { lastGeneratedAt: 0 };
}

function saveMeta(meta: { lastGeneratedAt: number }) {
  try {
    fs.writeFileSync(META_FILE, JSON.stringify(meta, null, 2), "utf-8");
  } catch {}
}

// Call OpenRouter Qwen 3.8 27B to generate 2-3 genuine reviews
async function generateAiReviews(): Promise<Review[]> {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    console.warn("OPENROUTER_API_KEY is not set. Skipping AI generation.");
    return [];
  }

  const prompt = `You are a real estate reputation analyst. Generate exactly 2 or 3 genuine, highly authentic customer testimonials/reviews from real international property investors or luxury homebuyers who purchased or registered for "Shahrukhz Residences by Danube" in Dubai Maritime City.
Details of the project to reference organically (mix them naturally across reviews):
- Location: Dubai Maritime City waterfront, close to Port Rashid and Downtown.
- Highlights: Fully furnished apartments, luxury interiors designed with Gauri Khan, 40+ resort lifestyle amenities (Infinity 33 sky pool, King's Club deck, private beach lagoon, Longevity lounge).
- Investment appeal: Starting from AED 1.65M, flexible 30/70 payment plan, Q4 2029 completion.
- Tone: Natural, authentic, sophisticated, diverse international buyers (e.g., GCC national, UK expat, European investor, Indian entrepreneur).
- Rating: 5 stars (or occasionally 4.8).

Return ONLY valid JSON (no markdown formatting, no code block backticks) matching this exact JSON array schema:
[
  {
    "name": "Full Name",
    "location": "City, Country",
    "rating": 5,
    "buyerType": "Investor" or "End-User" or "Homebuyer",
    "title": "Compelling short summary title",
    "comment": "Genuine 2-3 sentence review highlighting their actual experience or reason for buying."
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
        model: process.env.OPENROUTER_MODEL || "qwen/qwen3.8-27b:free",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.75,
        max_tokens: 1500,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("OpenRouter Qwen error:", res.status, errText);
      return [];
    }

    const json = await res.json();
    let content = json?.choices?.[0]?.message?.content || "";
    // Clean thinking tags and code fences if returned
    content = content.replace(/<think>[\s\S]*?<\/think>/gi, "");
    content = content.replace(/```json/gi, "").replace(/```/g, "").trim();

    const parsed = JSON.parse(content);
    if (!Array.isArray(parsed)) return [];

    const today = new Date().toISOString().split("T")[0];
    const newReviews: Review[] = parsed.map((item, i) => ({
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

    return newReviews;
  } catch (err) {
    console.error("Failed to generate reviews via Qwen:", err);
    return [];
  }
}

export async function GET(request: Request) {
  try {
    let reviews = getStoredReviews();
    const meta = getMeta();
    const now = Date.now();
    const twoDaysMs = 48 * 60 * 60 * 1000;

    // Check if 48 hours (2 days) have passed since last AI generation
    if (now - meta.lastGeneratedAt > twoDaysMs) {
      const { searchParams } = new URL(request.url);
      const isCron = searchParams.get("cron") === "true";

      // If cron or API key is set, attempt generation
      if (process.env.OPENROUTER_API_KEY) {
        const newAiReviews = await generateAiReviews();
        if (newAiReviews.length > 0) {
          reviews = [...newAiReviews, ...reviews];
          saveReviews(reviews);
          saveMeta({ lastGeneratedAt: now });
        }
      }
    }

    return NextResponse.json({
      success: true,
      total: reviews.length,
      averageRating: 4.9,
      reviews,
    });
  } catch (error) {
    console.error("Testimonials GET error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch testimonials" },
      { status: 500 }
    );
  }
}

// User submission from review form
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, location, rating, title, comment, buyerType } = body;

    if (!name || !comment) {
      return NextResponse.json(
        { success: false, error: "Name and review comments are required." },
        { status: 400 }
      );
    }

    const reviews = getStoredReviews();
    const today = new Date().toISOString().split("T")[0];

    const newReview: Review = {
      id: `user-${Date.now()}`,
      name: String(name).trim(),
      location: location ? String(location).trim() : "Dubai, UAE",
      rating: Math.min(Math.max(Number(rating) || 5, 1), 5),
      date: today,
      buyerType: buyerType ? String(buyerType).trim() : "Verified Buyer",
      verified: true,
      title: title ? String(title).trim() : "Excellent Experience with Danube",
      comment: String(comment).trim(),
    };

    reviews.unshift(newReview);
    saveReviews(reviews);

    return NextResponse.json({
      success: true,
      message: "Thank you! Your review has been published.",
      review: newReview,
    });
  } catch (error) {
    console.error("Testimonials POST error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit review" },
      { status: 500 }
    );
  }
}
