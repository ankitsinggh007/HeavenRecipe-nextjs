"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Children } from "react";

function linkNav({ href, children }) {
  const path = usePathname();
  return (
    <Link
      className={
        path.startsWith(href)
          ? "text-orange-300 drop-shadow-[0_0_10px_orange]"
          : "hover:text-orange-300 hover:drop-shadow-[0_0_10px/orange]"
      }
      href={href}
    >
      {children}
    </Link>
  );
}

export default linkNav;
