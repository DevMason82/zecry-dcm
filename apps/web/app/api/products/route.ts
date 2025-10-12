// app/api/products/route.ts
import { NextResponse } from "next/server";

type ProductsResponse = {
  products: any[];
  total: number;
  skip: number;
  limit: number;
};

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const limit = Number(searchParams.get("limit") ?? 20);
  const skip = Number(searchParams.get("skip") ?? 0);

  const upstreamUrl = new URL("https://dummyjson.com/products");
  upstreamUrl.searchParams.set("limit", String(limit));
  upstreamUrl.searchParams.set("skip", String(skip));

  // 서버 전용 호출 (브라우저 CORS 무관)
  const upstream = await fetch(upstreamUrl, { cache: "no-store" });
  if (!upstream.ok) {
    return NextResponse.json(
      { error: "Upstream failed", status: upstream.status },
      { status: upstream.status },
    );
  }

  const data = (await upstream.json()) as ProductsResponse;
  return NextResponse.json(data, { status: 200 });
}
