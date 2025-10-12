"use client";

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
  getPaginationRowModel,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table";
import { Input } from "@workspace/ui/components/input";
import { useState, useEffect } from "react";
import { DataTablePagination } from "@/components/data-table-pagination";
import { Product } from "@/types/product";

type ProductsResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  // data: ProductsResponse;
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  // 서버가 내려준 첫 페이지 상태
  // const [pageSize, setPageSize] = useState(data.limit);
  // const [pageIndex, setPageIndex] = useState(0);
  // const [rows, setRows] = useState<Product[]>(data);
  // const [total, setTotal] = useState(data.total);
  // const [loading, setLoading] = useState(false);

  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [rowSelection, setRowSelection] = useState({});

  // useEffect(() => {
  //   // SSR로 받은 첫 페이지(0번 페이지)는 재요청 불필요
  //   if (pageIndex === 0 && pageSize === data.limit) return;
  //
  //   let active = true;
  //   (async () => {
  //     setLoading(true);
  //     try {
  //       const skip = pageIndex * pageSize;
  //       const res = await fetch(
  //         `/api/products?limit=${pageSize}&skip=${skip}`,
  //         {
  //           cache: "no-store",
  //         },
  //       );
  //       if (!res.ok) throw new Error("Failed to fetch page");
  //       const json = (await res.json()) as ProductsResponse;
  //       if (!active) return;
  //       setRows(json.products);
  //       setTotal(json.total);
  //     } catch (e) {
  //       console.error(e);
  //     } finally {
  //       if (active) setLoading(false);
  //     }
  //   })();
  //
  //   return () => {
  //     active = false;
  //   };
  // }, [pageIndex, pageSize, data.limit]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      rowSelection,
    },
  });

  return (
    <div>
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter emails..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
      </div>
      {/*<div className="text-muted-foreground flex-1 text-sm">*/}
      {/*  {table.getFilteredSelectedRowModel().rows.length} of{" "}*/}
      {/*  {table.getFilteredRowModel().rows.length} row(s) selected.*/}
      {/*</div>*/}
      <div className="overflow-hidden rounded-md border mb-5">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <DataTablePagination table={table} />
    </div>
  );
}
