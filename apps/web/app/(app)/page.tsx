import { Button } from "@workspace/ui/components/button";
import { auth, currentUser } from "@clerk/nextjs/server";
import { SignOutButton } from "@clerk/nextjs";

export default async function Page() {
  const { isAuthenticated } = await auth();

  if (!isAuthenticated) {
    return <div>Sign in to view this page</div>;
  }

  const user = await currentUser();

  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Welcome, {user?.username}!</h1>
        {/*<Button size="sm">Button</Button>*/}
        <SignOutButton />
      </div>
    </div>
  );
}
