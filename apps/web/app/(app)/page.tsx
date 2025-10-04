import { Button } from "@workspace/ui/components/button";
import { auth, currentUser } from "@clerk/nextjs/server";
import { SignOutButton } from "@clerk/nextjs";
import Notice from "@/components/dashboard/notice";
import Cs from "@/components/dashboard/cs";
import Qa from "@/components/dashboard/qa";
import TodayOrder from "@/components/dashboard/today-order";
import SixMonthOrder from "@/components/dashboard/six-month-order";

export default async function Page() {
  const { isAuthenticated } = await auth();

  if (!isAuthenticated) {
    return <div>Sign in to view this page</div>;
  }

  const user = await currentUser();

  return (
    <div className="@container/main flex flex-1 flex-col gap-2">
      <div className="grid grid-cols-1 gap-4 px-4 mb-2 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2">
        <TodayOrder />
        <SixMonthOrder />
      </div>

      <div className="grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-3">
        <Notice />

        <Cs />

        <Qa />
      </div>

      <div>
        <h1 className="text-2xl font-bold text-amber-400">
          Welcome, {user?.username}!
        </h1>

        <Button size="lg" variant="secondary">
          Button
        </Button>
        <SignOutButton>
          <Button size="sm" variant="outline">
            Sign Out
          </Button>
        </SignOutButton>
      </div>
    </div>
  );
}
