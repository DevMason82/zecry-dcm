import { auth } from "@clerk/nextjs/server";

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

  return (
    <div className="@container/main flex flex-1 flex-col gap-2">
      <div className="grid grid-cols-1 gap-4 mb-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:@xl/main:grid-cols-2">
        <TodayOrder />
        <SixMonthOrder />
      </div>

      <div className="grid grid-cols-1 gap-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:@xl/main:grid-cols-2 @5xl/main:grid-cols-3">
        <Notice />

        <Cs />

        <Qa />
      </div>
    </div>
  );
}
