"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// interface Chapter {
//   id: number;
//   title: string;
//   score: number;
//   duration: string;
//   bgColor: string;
//   circleColor: string;
// }

export default function PelajaranPage() {
  const router = useRouter();
  const params = useParams();
  const pelajaran = params.pelajaran.toString();

  const [chapters, setChapters] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const fetchChapters = async () => {
    try {
      const response = await fetch(
        `https://l41w325z-5000.asse.devtunnels.ms/chapter_list/1`,
        {
          method: "GET",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch chapters");
      }
      const data = await response.json();
      setChapters(data.chapters);
      console.log("ini data ", data);
      console.log("ini chapter ", chapters);
    } catch (error) {
      console.error("Error fetching chapters:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchChapters();
  }, [pelajaran]);

  function capitalizeFirstLetter(str: string): string {
    if (!str) return ""; // Jika string kosong, kembalikan string kosong

    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  if (loading) {
    return (
      <div className="min-h-screen pt-6 text-black flex justify-center items-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-purple-500 pt-6">
      {/* Header */}
      <div className="text-white mb-6 flex justify-around px-4">
        <h1 className="text-3xl font-bold text-center">
          {capitalizeFirstLetter(pelajaran)}
        </h1>
      </div>

      {/* Quizzes */}
      <div className="space-y-4 bg-white rounded-t-xl pt-10 px-6 h-screen">
        {chapters.map((chapter, index) => (
          <Link
            key={index}
            className={`flex items-center justify-between p-4 rounded-lg shadow-md ${chapter.bgColor}`}
            href={`/pelajaran/${pelajaran}/content`}
          >
            <div className="flex items-center">
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full text-white ${chapter.circleColor}`}
              >
                {chapter.chapter_id}
              </div>
              <div className="ml-4">
                <h2 className="text-lg font-semibold">
                  {chapter.chapter_name}
                </h2>
                <p className="text-2xl font-bold">{chapter.score}</p>
              </div>
            </div>
            {/* <div className="flex items-center text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6V4m6 2h2M6 6h2m2 14H6v-4m10 4h-2M8 10v4M4 14v6m16-6v6M4 6v4m16-4v4m-4 10h-2"
                />
              </svg>
              <span className="ml-2">{chapter.duration}</span>
            </div> */}
          </Link>
        ))}
      </div>
    </div>
  );
}
