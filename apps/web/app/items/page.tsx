import { Suspense } from "react";
import ItemsClient from "@/app/items/items-client";

async function getItems() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/items`, {
    // 필요에 따라 캐시 전략 선택
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Could not find items.");
  return (await res.json()) as { id: string; title: string }[];
}

export default async function ItemsPage() {
  const items = await getItems();
  console.log("HHHHH ==>>", items);
  return (
    <Suspense fallback={<div>Items Loading...</div>}>
      <ItemsClient initial={items} />
    </Suspense>
  );
}
