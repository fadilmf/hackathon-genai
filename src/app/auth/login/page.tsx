import Link from "next/link";
import React from "react";

export default function LoginPage() {
  return (
    <div className="h-screen flex flex-col justify-center items-center px-10">
      <h1 className="font-bold text-4xl mb-20">Edu</h1>
      <div className="bg-white shadow-md rounded-lg p-2 w-full flex flex-col items-center">
        <div className="w-full flex flex-col gap-3">
          <input
            className="px-3 py-1 focus:outline-none"
            type="email"
            placeholder="email"
          />
          <hr />
          <input
            className="px-3 py-1 focus:outline-none"
            type="password"
            placeholder="password"
          />
        </div>
      </div>
      <div className="flex my-3 gap-2 justify-center items-center">
        <Link
          href={"#"}
          className="font-light text-sm text-red-400 hover:underline"
        >
          Forgot your password?
        </Link>
        <Link
          href={"/auth/register"}
          className="font-light text-sm text-red-400 hover:underline"
        >
          Create account
        </Link>
      </div>

      <div className="flex w-full justify-center">
        <button className="bg-primary hover:bg-red-700  w-full text-white rounded-full py-3">
          Login
        </button>
      </div>
    </div>
  );
}
