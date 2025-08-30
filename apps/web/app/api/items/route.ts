// app/api/items/route.ts
import { NextResponse } from "next/server";

const items = [
  { id: "1", title: "First" },
  { id: "2", title: "Second" },
];

export async function GET() {
  return NextResponse.json(items, { status: 200 });
}
