// lib/fetcher.ts
export async function jsonFetcher<T = unknown>(url: string): Promise<T> {
  const res = await fetch(url, { headers: { accept: "application/json" } });
  if (!res.ok) throw new Error(await res.text());
  return res.json() as Promise<T>;
}
