import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db/mongodb";
import Quote from "@/lib/models/Quote";
import transporter from "@/lib/mail/mail";

export const runtime = "nodejs";

type Freights = Record<string, Record<string, string>>;

interface QuoteBody {
  company?: string;
  name?: string;
  email?: string;
  phone?: string;
  freights?: unknown;
}

const SECTION_TITLES: Record<string, string> = {
  air: "Air Freight",
  ocean: "Ocean Freight",
  road: "Road Freight",
  courier: "International Courier",
};

const FIELD_LABELS: Record<string, string> = {
  departure: "City of Departure",
  delivery: "Delivery City",
  incoterm: "Incoterm",
  weight: "Weight (kg)",
  width: "Width (cm)",
  height: "Height (cm)",
  length: "Length (cm)",
  package: "Package Type",
  speed: "Delivery Speed",
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Never trust the client: keep only short, non-empty string values
function cleanFreights(input: unknown): Freights {
  const result: Freights = {};
  if (!input || typeof input !== "object") return result;

  for (const [section, fields] of Object.entries(input as Record<string, unknown>)) {
    if (!fields || typeof fields !== "object") continue;
    const clean: Record<string, string> = {};
    for (const [field, value] of Object.entries(fields as Record<string, unknown>)) {
      if (typeof value === "string" && value.trim()) {
        clean[field] = value.trim().slice(0, 200);
      }
    }
    if (Object.keys(clean).length > 0) result[section] = clean;
  }
  return result;
}

function freightsToHtml(freights: Freights): string {
  return Object.entries(freights)
    .map(([section, fields]) => {
      const rows = Object.entries(fields)
        .map(
          ([field, value]) =>
            `<tr><td style="padding:4px 12px 4px 0"><strong>${escapeHtml(
              FIELD_LABELS[field] ?? field
            )}:</strong></td><td>${escapeHtml(value)}</td></tr>`
        )
        .join("");
      return `<h4 style="margin:16px 0 4px">${escapeHtml(
        SECTION_TITLES[section] ?? section
      )}</h4><table>${rows}</table>`;
    })
    .join("");
}

// Open http://localhost:3000/api/quote in the browser to check the route
export async function GET() {
  return NextResponse.json({ success: true, message: "Quote API is working" });
}

export async function POST(req: NextRequest) {
  try {
    const body: QuoteBody = await req.json();
    const { company, name, email, phone } = body;
    const freights = cleanFreights(body.freights);

    if (!company?.trim() || !name?.trim() || !email?.trim()) {
      return NextResponse.json(
        { success: false, message: "Company, name and email are required" },
        { status: 400 }
      );
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email format" },
        { status: 400 }
      );
    }
    if (phone && !/^[0-9+\s-]{7,20}$/.test(phone)) {
      return NextResponse.json(
        { success: false, message: "Invalid phone number" },
        { status: 400 }
      );
    }
    if (Object.keys(freights).length === 0) {
      return NextResponse.json(
        { success: false, message: "Please fill at least one freight section" },
        { status: 400 }
      );
    }

    await connectDB();
    const quote = await Quote.create({
      company: company.trim(),
      name: name.trim(),
      email: email.trim(),
      phone: phone?.trim() ?? "",
      freights,
    });

    await transporter.sendMail({
      from: process.env.Admin_Mail,
      to: process.env.Admin_Mail,
      replyTo: email,
      subject: `New Quote Request - ${company}`,
      html: `
        <h3>New Quote Request</h3>
        <p><strong>Company:</strong> ${escapeHtml(company)}</p>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "N/A")}</p>
        ${freightsToHtml(freights)}
        <p style="margin-top:16px"><strong>Submitted At:</strong> ${String(quote.get("createdAt"))}</p>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Quote request sent successfully. We will contact you soon.",
        data: quote,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("QUOTE API ERROR:", error);
    const message = error instanceof Error ? error.message : "Something went wrong";
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}