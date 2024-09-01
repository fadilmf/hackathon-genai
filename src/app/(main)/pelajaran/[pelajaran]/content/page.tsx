"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axiosClient from "@/utils/axiosClient";

// Definisi interface untuk struktur data materi
interface Chapter {
  chapter_id: number;
  chapter_name: string;
  content: string;
}

export default function MateriPage() {
  const [chapterData, setChapterData] = useState<Chapter | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();
  const params = useParams();
  const pelajaran = params.pelajaran.toString();
  //   const chapterId = params.chapterId.toString();

  useEffect(() => {
    // Fungsi untuk mengambil data materi dari API
    const fetchChapterData = async () => {
      try {
        const response = await axiosClient.get("/chapter_list/1");

        const data = response.data;
        setChapterData(data.chapters); // Mengambil chapter pertama dari respons
      } catch (error) {
        console.error("Error fetching chapter data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchChapterData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-black">
        Loading...
      </div>
    );
  }

  if (!chapterData) {
    return (
      <div className="min-h-screen flex justify-center items-center text-black">
        Data tidak ditemukan.
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 text-white pb-32">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">{chapterData.chapter_name}</h1>
      </div>

      {/* Content */}
      <div className="bg-white text-black rounded-lg p-6 shadow-md mb-6">
        <p className="whitespace-pre-wrap">{chapterData.content}</p>
      </div>

      {/* Button untuk mengambil kuis */}
      <div className="flex justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => router.push(`/pelajaran/${pelajaran}/quiz`)}
        >
          Ambil Kuis
        </button>
      </div>
    </div>
  );
}
