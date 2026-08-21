import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    service: "harsha-logistics",
    timestamp: new Date().toISOString(),
  });
}
