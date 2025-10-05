import React from "react";
import { Button } from "@workspace/ui/components/button";
import { SignOutButton } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import HeaderName from "@/components/header/headerName";

const Index = async () => {
  const { isAuthenticated } = await auth();

  if (!isAuthenticated) {
    return <div>Sign in to view this page</div>;
  }

  const user = await currentUser();
  return (
    <header className="p-2 py-4 bg-background/90 sticky top-0 z-10 flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <HeaderName />
        <div className="ml-auto flex items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="font-bold">Welcome, {user?.username}!</span>
            <SignOutButton>
              <Button size="sm">Sign Out</Button>
            </SignOutButton>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Index;
