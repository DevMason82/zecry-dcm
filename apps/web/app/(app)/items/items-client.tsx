"use client";

import useSWR from "swr";
import { useUI } from "@/lib/store/ui";

type Item = {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
};

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function ItemsClient({ posts }) {
  const { data, error, isLoading } = useSWR<Item[]>(
    "https://api.vercel.app/blog",
    fetcher,
    {
      suspense: true, // SSR에서 쓰려면 fallbackData 필요
      fallbackData: posts, // 서버가 준 초기 데이터
      revalidateOnMount: true, // 클라에서 즉시 최신화(원하면 false로)
      shouldRetryOnError: false,
    },
  );

  console.log("DATA ==>>", data);

  const { modalOpen, openModal, closeModal } = useUI();

  if (isLoading) return <div>Loading items…</div>;
  if (error) return <div className="text-red-600">Failed to load</div>;

  return (
    <>
      <section>
        <h1>Client Component</h1>
        <ul className="list-disc pl-5">
          {data!.map((i) => (
            <li key={i.id}>{i.title}</li>
          ))}
        </ul>
      </section>

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
