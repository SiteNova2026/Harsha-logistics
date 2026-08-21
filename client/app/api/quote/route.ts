import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    return NextResponse.json({
      success: true,
      message: "Quote request received. Our team will contact you soon.",
      data: body,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Unable to process quote request." },
      { status: 400 }
    );
  }
}
