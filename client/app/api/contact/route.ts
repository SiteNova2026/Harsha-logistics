import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db/mongodb";
import Contact from "@/lib/models/Contact";
import transporter from "@/lib/mail/mail";
import { renderEmail } from "@/components/mail/Emailtemplate";


export const runtime = "nodejs"; // nodemailer + mongoose need the Node runtime, not Edge

interface ContactBody {
  fullName?: string;
  email?: string;
  companyName?: string;
  phoneNumber?: string;
  service?: string;
  message?: string;
}


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
    const html = renderEmail({
      eyebrow: "Contact Form",
      title: "New Contact Submission",
      rows: [
        { label: "Full Name", value: fullName },
        { label: "Email", value: email, href: `mailto:${email}` },
        { label: "Phone", value: phoneNumber, href: `tel:${phoneNumber}` },
        { label: "Company", value: companyName || "N/A" },
      ],
      message,
      replyTo: { email, label: `Reply to ${fullName}` },
      submittedAt: contact.get("createdAt"),
    });
    // ---- send mail ----
    await transporter.sendMail({
      from: process.env.Admin_Mail,
      to: process.env.Admin_Mail,
      replyTo: email, // so you can hit "Reply" and answer the customer
      subject: `New Contact Form Submission - ${fullName}`,
      html,
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