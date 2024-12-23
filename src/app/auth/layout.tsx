import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import BottomNavbar from "@/components/BottomNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gerbang Jabar",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col min-h-screen max-w-md bg-slate-50 mx-auto`}
      >
        <div className="flex-grow">{children}</div>
      </body>
    </html>
  );
}
