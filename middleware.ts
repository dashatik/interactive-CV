import { NextResponse } from "next/server";

export const config = {
    runtime: "nodejs",
};

export default function middleware(req: Request) {
    try {
      const baseUrl = "https://interactive-cv-omega.vercel.app/"; // Replace with your actual domain
      const fullUrl = new URL(req.url, baseUrl); // Safely construct the URL
  
      console.log("Full URL:", fullUrl.href);
  
      // Middleware logic here
      return NextResponse.next();
    } catch (error) {
      console.error("Middleware error:", error);
      return NextResponse.next();
    }
  }
  