"use client";

import { useRouter } from "next/navigation";

const quizzes = [
  {
    number: 1,
    title: "Science & tecnology",
    score: 10,
    duration: "30s",
    bgColor: "bg-blue-100",
    circleColor: "bg-blue-500",
  },
  {
    number: 2,
    title: "Science & tecnology",
    score: 12,
    duration: "30s",
    bgColor: "bg-orange-100",
    circleColor: "bg-orange-500",
  },
  {
    number: 3,
    title: "Science & tecnology",
    score: 15,
    duration: "20s",
    bgColor: "bg-purple-100",
    circleColor: "bg-purple-500",
  },
  {
    number: 4,
    title: "Science & tecnology",
    score: 12,
    duration: "30s",
    bgColor: "bg-orange-100",
    circleColor: "bg-orange-500",
  },
  {
    number: 5,
    title: "Science & tecnology",
    score: 15,
    duration: "20s",
    bgColor: "bg-blue-100",
    circleColor: "bg-blue-500",
  },
  {
    number: 6,
    title: "Science & tecnology",
    score: 10,
    duration: "30s",
    bgColor: "bg-purple-100",
    circleColor: "bg-purple-500",
  },
];

export default function MatematikaPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-purple-500 pt-6">
      {/* Header */}
      <div className="relative text-white mb-6">
        <button
          onClick={() => router.back()}
          className="absolute left-0 top-0 p-2 rounded-full bg-white text-purple-500"
        >
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <h1 className="text-3xl font-bold text-center">Science</h1>
      </div>

      {/* Quizzes */}
      <div className="space-y-4 bg-white rounded-t-xl pt-10 px-6 h-screen">
        {quizzes.map((quiz, index) => (
          <div
            key={index}
            className={`flex items-center justify-between p-4 rounded-lg shadow-md ${quiz.bgColor}`}
          >
            <div className="flex items-center">
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full text-white ${quiz.circleColor}`}
              >
                {quiz.number}
              </div>
              <div className="ml-4">
                <h2 className="text-lg font-semibold">{quiz.title}</h2>
                <p className="text-2xl font-bold">{quiz.score}</p>
              </div>
            </div>
            <div className="flex items-center text-gray-700">
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
              <span className="ml-2">{quiz.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
