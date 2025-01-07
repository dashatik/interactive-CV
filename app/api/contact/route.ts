import { NextResponse } from "next/server";
import Database from "better-sqlite3";

export const config = {
  runtime: "nodejs",
};

const db = new Database("./database.db");

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get("content-type") || "";

    let data: { name: string; email: string; message: string };

    if (contentType.includes("application/json")) {
      // Parse JSON body
      data = await req.json();
    } else if (contentType.includes("application/x-www-form-urlencoded")) {
      // Parse URL-encoded form data
      const formData = await req.text();
      const params = new URLSearchParams(formData);
      data = {
        name: params.get("name") || "",
        email: params.get("email") || "",
        message: params.get("message") || "",
      };
    } else {
      return NextResponse.json(
        { success: false, error: "Unsupported content type" },
        { status: 400 }
      );
    }

    // Insert data into the database
    const stmt = db.prepare(
      "INSERT INTO form_submissions (name, email, message) VALUES (?, ?, ?)"
    );
    stmt.run(data.name, data.email, data.message);

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error processing request:", error.message);
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    } else {
      console.error("Unexpected error:", error);
      return NextResponse.json(
        { success: false, error: "An unexpected error occurred" },
        { status: 500 }
      );
    }
  }
}
