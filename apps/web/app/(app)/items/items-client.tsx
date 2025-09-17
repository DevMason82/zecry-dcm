"use client";

import useSWR from "swr";
import { useUI } from "@/lib/store/ui";

export type Item = {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
};

// fetcher의 반환 타입을 명시해주면 SWR 제네릭과 일치해 타입 안정성이 좋아집니다.
const fetcher = async (url: string): Promise<Item[]> => {
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
  return res.json();
};

interface ItemsClientProps {
  /** SSR에서 내려주는 초기 데이터 (옵션) */
  posts?: Item[];
}

export default function ItemsClient({ posts = [] }: ItemsClientProps) {
  const { data, error, isLoading } = useSWR<Item[]>("/api/blog", fetcher, {
    suspense: true, // SSR에서 쓰려면 fallbackData 필요
    fallbackData: posts, // 서버가 준 초기 데이터
    revalidateOnMount: true, // 클라에서 즉시 최신화(원하면 false로)
    shouldRetryOnError: false,
  });

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
