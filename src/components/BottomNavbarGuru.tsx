"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { LuBarChart3, LuBookCopy, LuHome, LuUser } from "react-icons/lu";
// import { MdHistory, MdHome, MdPerson, MdStore } from "react-icons/md";

export default function BottomNavbarGuru() {
  const pathname = usePathname();
  const navItems = [
    {
      href: "/guru",
      icon: <LuHome />,
      label: "Home",
    },
    {
      href: "/guru/profile",
      icon: <LuUser />,
      label: "Profile",
    },
  ];
  return (
    <div className="bg-white flex justify-around items-center rounded-t-xl shadow-inner fixed bottom-0 w-full max-w-md border-4 border-t-yellow-400">
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
          <div
            className={`rounded-lg p-1 ${
              pathname === item.href ? "bg-green-500" : ""
            }`}
          >
            {item.icon}
          </div>
          <h1 className="text-xs">{item.label}</h1>
        </Link>
      ))}
    </div>
  );
}
