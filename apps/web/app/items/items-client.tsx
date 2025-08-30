"use client";

import useSWR from "swr";
import { useUI } from "@/lib/store/ui";

type Item = { id: string; title: string };

export default function ItemsClient({ initial }: { initial: Item[] }) {
  const { data, error, isLoading } = useSWR<Item[]>("/api/items", {
    suspense: true, // SSR에서 쓰려면 fallbackData 필요
    fallbackData: initial, // 서버가 준 초기 데이터
    revalidateOnMount: true, // 클라에서 즉시 최신화(원하면 false로)
  });

  const { modalOpen, openModal, closeModal } = useUI();

  if (isLoading) return <div>Loading items…</div>;
  if (error) return <div className="text-red-600">Failed to load</div>;

  return (
    <>
      <ul className="list-disc pl-5">
        {data!.map((i) => (
          <li key={i.id}>{i.title}</li>
        ))}
      </ul>

      <button
        onClick={openModal}
        className="rounded border px-3 py-1 hover:bg-black/5"
      >
        Open Modal (Zustand)
      </button>

      {modalOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="rounded bg-white p-6 shadow">
            <p className="mb-4">This modal is controlled by Zustand.</p>
            <button
              onClick={closeModal}
              className="rounded border px-3 py-1 hover:bg-black/5"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
