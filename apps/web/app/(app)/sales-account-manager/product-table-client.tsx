"use client";
import * as React from "react";
import useSWR from "swr";
import { Product, ProductsResponse } from "@/types/product";
import { Input } from "@workspace/ui/components/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { Button } from "@workspace/ui/components/button";
import { Badge } from "@workspace/ui/components/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table";

const fetcher = async (url: string) => {
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json() as Promise<ProductsResponse>;
};

function makeKey(pageIndex: number, pageSize: number, q: string) {
  // SWR fallback과 동일하게 직렬화
  return JSON.stringify(["products", pageIndex, pageSize, q]);
}

const ProductTableClient = ({
  initialPageSize = 20,
  initialUrl,
}: {
  initialPageSize?: number;
  initialUrl: string;
}) => {
  const [pageIndex, setPageIndex] = React.useState(0); // 0-based
  const [pageSize, setPageSize] = React.useState(initialPageSize);
  const [query, setQuery] = React.useState(""); // 검색어

  const isSearching = query.trim().length > 0;
  const skip = pageIndex * pageSize;

  // 항상 'URL 문자열'을 SWR의 key로 사용 (fallback과 반드시 동일 규칙)
  const url = isSearching
    ? `https://dummyjson.com/products/search?q=${encodeURIComponent(query)}&limit=${pageSize}&skip=${skip}`
    : `https://dummyjson.com/products?limit=${pageSize}&skip=${skip}`;

  const swrKey = makeKey(pageIndex, pageSize, query);
  const { data, isLoading, error } = useSWR<ProductsResponse>(url, fetcher, {
    // 서버에서 넣어준 fallback과 키가 일치하면, 0페이지/기본 페이지크기/빈 검색어는 네트워크 없이 SSR로 바로 그려짐
    suspense: false,
    keepPreviousData: true,
    revalidateOnFocus: false,
  });

  const total = data?.total ?? 0;
  const pageCount = Math.max(1, Math.ceil(total / pageSize));
  const rows = data?.products ?? [];

  return (
    <section className="space-y-4">
      {/* 툴바 */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-2 items-center">
          <Input
            placeholder="Search title/brand/category..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPageIndex(0); // 검색어 변경 시 첫 페이지로
            }}
            className="w-[280px]"
          />
          {query ? (
            <Badge variant="secondary" className="text-xs">
              Searching: “{query}”
            </Badge>
          ) : null}
        </div>

        <div className="flex items-center gap-2">
          <Select
            value={String(pageSize)}
            onValueChange={(v) => {
              setPageSize(Number(v));
              setPageIndex(0);
            }}
          >
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Page size" />
            </SelectTrigger>
            <SelectContent>
              {[10, 20, 30, 40, 50, 100].map((n) => (
                <SelectItem key={n} value={String(n)}>
                  Show {n}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div className="flex gap-1">
            <Button
              variant="outline"
              onClick={() => setPageIndex(0)}
              disabled={pageIndex === 0}
            >
              ⏮ First
            </Button>
            <Button
              variant="outline"
              onClick={() => setPageIndex((p) => Math.max(0, p - 1))}
              disabled={pageIndex === 0}
            >
              ◀ Prev
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                setPageIndex((p) => (p + 1 < pageCount ? p + 1 : p))
              }
              disabled={pageIndex + 1 >= pageCount}
            >
              Next ▶
            </Button>
            <Button
              variant="outline"
              onClick={() => setPageIndex(pageCount - 1)}
              disabled={pageIndex + 1 >= pageCount}
            >
              Last ⏭
            </Button>
          </div>

          <span className="text-sm opacity-70">
            Page <b>{pageIndex + 1}</b> / <b>{pageCount}</b>
          </span>
        </div>
      </div>

      {/* 테이블 */}
      <div className="rounded-xl border overflow-auto">
        <Table className="min-w-[900px]">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[72px]">Preview</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Brand</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead className="text-right">Rating</TableHead>
              <TableHead className="text-right">Stock</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {error ? (
              <TableRow>
                <TableCell
                  colSpan={7}
                  className="text-center py-10 text-red-600"
                >
                  Failed to load
                </TableCell>
              </TableRow>
            ) : isLoading && !data ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-10">
                  Loading...
                </TableCell>
              </TableRow>
            ) : rows.length ? (
              rows.map((p) => (
                <TableRow key={p.id} className="hover:bg-muted/40">
                  <TableCell>
                    <img
                      src={p.thumbnail}
                      alt={p.title}
                      className="w-14 h-14 object-cover rounded-lg"
                    />
                  </TableCell>
                  <TableCell className="font-medium">{p.title}</TableCell>
                  <TableCell>{p.brand}</TableCell>
                  <TableCell>{p.category}</TableCell>
                  <TableCell className="text-right">
                    ${p.price.toFixed(2)}
                  </TableCell>
                  <TableCell className="text-right">
                    {p.rating.toFixed(2)}
                  </TableCell>
                  <TableCell className="text-right">{p.stock}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-10">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default ProductTableClient;
