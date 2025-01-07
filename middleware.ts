import { NextResponse } from "next/server";

export const config = {
  runtime: "edge",
};

export default async function middleware(req: Request) {
  const ip = req.headers.get("x-forwarded-for") || req.headers.get("remote-addr") || "unknown";

  // Send the IP to the API route
  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/visitors`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ip }),
  });

  return NextResponse.next();
}
