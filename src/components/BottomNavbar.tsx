"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { LuBarChart3, LuBookCopy, LuHome, LuUser } from "react-icons/lu";
// import { MdHistory, MdHome, MdPerson, MdStore } from "react-icons/md";

export default function BottomNavbar() {
  const pathname = usePathname();
  const navItems = [
    {
      href: "/",
      icon: <LuHome />,
      label: "Home",
    },
    {
      href: "/pelajaran",
      icon: <LuBookCopy />,
      label: "Pelajaran",
    },
    {
      href: "/statistik",
      icon: <LuBarChart3 />,
      label: "Statistik",
    },
    {
      href: "/profile",
      icon: <LuUser />,
      label: "Profile",
    },
  ];
  return (
    <div className="bg-white flex justify-around items-center rounded-t-xl shadow-inner fixed bottom-0 w-full max-w-md">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`flex flex-col items-center py-2 rounded-t-xl w-full h-full ${
            pathname === item.href
              ? "text-primary font-bold text-3xl"
              : "text-gray-500 font-medium text-2xl"
          }`}
        >
          <div className="">{item.icon}</div>
          <h1 className="text-xs">{item.label}</h1>
        </Link>
      ))}
    </div>
  );
}
