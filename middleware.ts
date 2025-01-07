import { NextResponse } from "next/server";

export const config = {
  runtime: "nodejs", // Ensure Node.js runtime
};

export function middleware(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for") || // Use this for deployed environments
    req.headers.get("remote-addr") || // Use this for local environments
    "unknown";

  console.log(`Visitor IP: ${ip}`);

  // Send the IP to the /api/log-ip endpoint
  fetch("https://interactive-cv-omega.vercel.app/api/log-ip", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ip }),
  });

  return NextResponse.next();
}
