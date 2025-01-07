import { NextResponse } from "next/server";
import Database from "better-sqlite3";

// Create or open the SQLite database
const db = new Database("./database.db");

export async function POST(req: Request) {
  try {
    const { ip } = await req.json();

    // Save IP to the database
    const stmt = db.prepare("INSERT INTO visitors (ip_address) VALUES (?)");
    stmt.run(ip);

    console.log(`Logged IP: ${ip}`);
    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof Error) {
      // Safely access error.message
      console.error("Error logging IP:", error.message);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    } else {
      // Handle unexpected error types
      console.error("Unexpected error:", error);
      return NextResponse.json({ success: false, error: "An unexpected error occurred." }, { status: 500 });
    }
  }
}
