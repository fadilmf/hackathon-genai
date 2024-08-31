import Link from "next/link";
import React from "react";

export default function RegisterPage() {
  return (
    <div className="h-screen flex flex-col justify-center items-center px-10">
      <div className="mb-20 flex flex-col items-center">
        <h1 className="font-bold text-4xl">🍉 Klontong</h1>
      </div>
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
            type="text"
            placeholder="full name"
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
          href={"/auth/login"}
          className="font-light text-sm text-red-400 hover:underline"
        >
          Already have an account
        </Link>
      </div>

      <div className="flex w-full justify-center">
        <button className="bg-primary hover:bg-red-700  w-full text-white rounded-full py-3">
          Register
        </button>
      </div>
    </div>
  );
}
