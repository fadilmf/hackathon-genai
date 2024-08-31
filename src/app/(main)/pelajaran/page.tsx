import Link from "next/link";
import React from "react";
import { LuPencilRuler } from "react-icons/lu";

const lessons = [
  {
    id: 1,
    name: "Matematika",
    quiz: 20,
  },
  {
    id: 2,
    name: "IPA",
    quiz: 10,
  },
  {
    id: 3,
    name: "Bahasa Indonesia",
    quiz: 24,
  },
  {
    id: 4,
    name: "Kimia",
    quiz: 13,
  },
  {
    id: 5,
    name: "Fisika",
    quiz: 44,
  },
];

export default function PelajaranPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <div className="bg-white rounded-lg p-4 shadow-md mb-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Pelajaran</h1>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 px-4">
        {lessons.map((lesson, key) => (
          <Link
            href={`/pelajaran/${lesson.name.toLowerCase()}`}
            key={key}
            className="bg-blue-500 rounded-lg p-4 text-white flex-1 flex items-center justify-between gap-5"
          >
            <div>
              <h3 className="text-xl font-bold">{lesson.name}</h3>
              <p>{lesson.quiz} Kuis</p>
            </div>
            <div className="text-5xl">
              <LuPencilRuler />
            </div>
          </Link>
        ))}

        {/* <div className="bg-blue-500 rounded-lg p-4 text-white flex-1 flex items-center justify-between gap-5">
          <div>
            <h3 className="text-xl font-bold">Matematika</h3>
            <p>10 Kuis</p>
          </div>
          <div className="text-5xl">
            <LuPencilRuler />
          </div>
        </div>

        <div className="bg-blue-500 rounded-lg text-white">
          <h1>Matematika</h1>
          <p>10 Kuis</p>
        </div> */}
      </div>
    </div>
  );
}