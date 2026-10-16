import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db/mongodb";
import Contact from "@/lib/models/Contact";
import transporter from "@/lib/mail/mail";

export const runtime = "nodejs"; // nodemailer + mongoose need the Node runtime, not Edge

interface ContactBody {
  fullName?: string;
  email?: string;
  companyName?: string;
  phoneNumber?: string;
  service?: string;
  message?: string;
}

// Prevents users from injecting HTML into the notification email
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Simple check: open http://localhost:3000/api/contact in the browser
export async function GET() {
  return NextResponse.json({ success: true, message: "Contact API is working" });
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactBody = await req.json(); // replaces req.body
    const { fullName, email, companyName, phoneNumber, message } = body;

    // ---- validation ----
    if (!fullName || !email || !phoneNumber || !message) {
      return NextResponse.json(
        { success: false, message: "All required fields must be filled" },
        { status: 400 }
      );
    }
    if (!/^\d+$/.test(phoneNumber)) {
      return NextResponse.json(
        { success: false, message: "Phone number must contain digits only" },
        { status: 400 }
      );
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email format" },
        { status: 400 }
      );
    }

    // ---- save to MongoDB ----
    await connectDB();
    const contact = await Contact.create({
      fullName,
      email,
      companyName,
      phoneNumber,
      message,
    });

    // ---- send mail ----
    await transporter.sendMail({
      from: process.env.Admin_Mail,
      to: process.env.Admin_Mail,
      replyTo: email, // so you can hit "Reply" and answer the customer
      subject: "New Contact Form Submission",
      html: `
        <h3>New Contact Submission</h3>
        <p><strong>Full Name:</strong> ${escapeHtml(fullName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Company Name:</strong> ${escapeHtml(companyName || "N/A")}</p>
        <p><strong>Phone Number:</strong> ${escapeHtml(phoneNumber)}</p>
        <p><strong>Message:</strong> ${escapeHtml(message)}</p>
        <p><strong>Submitted At:</strong> ${String(contact.get("createdAt"))}</p>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Mail sent successfully. We will reach you soon.",
        data: contact,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("CONTACT API ERROR:", error);
    const message = error instanceof Error ? error.message : "Something went wrong";
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}