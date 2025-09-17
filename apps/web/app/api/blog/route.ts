// 서버 전용: 브라우저 CORS와 무관
import { NextResponse } from "next/server";

export async function GET() {
  const upstream = await fetch("https://api.vercel.app/blog", {
    cache: "no-store",
  });
  if (!upstream.ok) {
    return NextResponse.json(
      { error: "Upstream failed", status: upstream.status },
      { status: upstream.status },
    );
  }
  const data = await upstream.json();
  return NextResponse.json(data);
}
