"use client";
import React from "react";
import { usePathname } from "next/navigation";

const HeaderName = () => {
  const pathname = usePathname();
  return (
    <h1 className="text-base font-medium">
      {pathname === "/" ? "Dashboard" : pathname}
    </h1>
  );
};

export default HeaderName;
