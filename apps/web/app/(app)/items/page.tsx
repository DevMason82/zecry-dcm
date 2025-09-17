import { Suspense } from "react";
import ItemsClient from "@/app/(app)/items/items-client";
import { SignOutButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

type Item = {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
};

export default async function ItemsPage() {
  const data = await fetch("https://api.vercel.app/blog");
  const posts = await data.json();
  console.log("POSTS ==>>", posts);

  const user = await currentUser();

  return (
    <Suspense fallback={<div>LLLLLL</div>}>
      <ul>
        {posts.map((post: Item) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      <ItemsClient posts={posts} />
      <h1 className="text-2xl font-bold">Welcome, {user?.username}!</h1>
      <SignOutButton />
    </Suspense>
  );
}
