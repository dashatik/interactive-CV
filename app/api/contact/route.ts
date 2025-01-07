import { NextResponse } from "next/server";
import Database from "better-sqlite3";

const db = new Database("./database.db");

export async function POST(req: Request) {
  const { ip } = await req.json();
  try {
    const stmt = db.prepare("INSERT INTO visitors (ip_address) VALUES (?)");
    stmt.run(ip);

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof Error) {
      // If the error is an instance of the Error class
      console.error("Database error:", error.message);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    } else {
      // Handle unexpected error types
      console.error("Unexpected error:", error);
      return NextResponse.json({ success: false, error: "An unexpected error occurred." }, { status: 500 });
    }
  }
}
