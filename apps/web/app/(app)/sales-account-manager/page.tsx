import { columns } from "./columns";
import { DataTable } from "./data-table";
import { SWRConfig } from "swr";
import { Product, ProductsResponse } from "@/types/product";
import ProductTableClient from "@/app/(app)/sales-account-manager/product-table-client";

const INITIAL_LIMIT = 20;
async function getFirstPage(url: string): Promise<ProductsResponse> {
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch first page");
  return res.json();
}

// async function getFirstProducts(): Promise<ProductsResponse> {
//   const res = await fetch(
//     `https://dummyjson.com/products?limit=${INITIAL_LIMIT}&skip=0`,
//     {
//       cache: "no-store",
//     },
//   );
//   if (!res.ok) throw new Error("Failed to fetch products");
//   return res.json();
// }

export default async function Page() {
  const initialUrl = `https://dummyjson.com/products?limit=${INITIAL_LIMIT}&skip=0`;
  const first = await getFirstPage(initialUrl);
  // const productsData = await getFirstProducts();

  return (
    <SWRConfig
      value={{
        // 키=URL 과 데이터가 반드시 1:1로 일치해야 함
        fallback: { [initialUrl]: first },

        // SSR에서 Suspense로 인한 오류 방지 (전역으로 true일 수 있으니 명시)
        suspense: false,

        // UX 최적화 옵션
        keepPreviousData: true,
        revalidateOnFocus: false,
      }}
    >
      <div className="mx-auto">
        <h1 className="mb-3 text-lg">매출처 관리</h1>
        {/*<DataTable columns={columns} data={productsData.products} />*/}
        <ProductTableClient
          initialPageSize={INITIAL_LIMIT}
          initialUrl={initialUrl}
        />
      </div>
    </SWRConfig>
  );
}
