"use client";

import { useEffect, useState } from "react";

// Fungsi untuk mengambil data kuis dari API
async function fetchQuizData(id: number) {
  try {
    const response = await fetch(
      `https://l41w325z-5000.asse.devtunnels.ms/generate/${id}`,
      {
        method: "POST",
        // headers: {
        //   "Content-Type": "application/json",
        // },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch quiz data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching quiz data:", error);
    return [];
  }
}

export default function QuizPage() {
  const [quizData, setQuizData] = useState<any[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  // Ambil data kuis dari API ketika komponen dimuat
  useEffect(() => {
    const id = "1"; // Ganti dengan ID yang sesuai
    fetchQuizData(7).then((data) => {
      setQuizData(data);
    });
  }, []);

  // Fungsi untuk menangani perubahan pertanyaan saat menjawab
  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert("Kuis selesai!");
    }
  };

  if (quizData.length === 0) {
    return <div className="px-4">Loading...</div>;
  }

  const currentQuestion = quizData[currentQuestionIndex];

  return (
    <div className="px-4">
      <div className="bg-white flex justify-center py-4">Quiz</div>
      <div className="bg-blue-400 rounded-lg text-white h-64 flex flex-col justify-center items-center">
        <span>Soal {currentQuestion.level}</span>
        <h1 className="text-2xl p-4">{currentQuestion.question}</h1>
      </div>
      <div className="flex flex-col gap-2 mt-3 text-black">
        {currentQuestion.options.map((option: string, index: number) => (
          <div
            key={index}
            className="bg-white border border-blue-400 rounded-lg p-4 cursor-pointer hover:bg-blue-100"
            onClick={handleNextQuestion}
          >
            <h1>{option}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
