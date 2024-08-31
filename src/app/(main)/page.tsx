import Image from "next/image";
import Link from "next/link";
import { LuPencilRuler, LuTrees } from "react-icons/lu";

export default function Home() {
  return (
    // <div>
    //   <div className="flex justify-between items-center bg-white border-b-4 border-b-green-700 rounded-b-lg px-4 py-4">
    //     <h1 className="font-bold text-xl">Hello, Elliot</h1>
    //     <Image
    //       className="rounded-full"
    //       src={"/pizza.jpg"}
    //       alt="profile_picture"
    //       width={50}
    //       height={50}
    //     />
    //   </div>

    //   <div className="px-4 mt-4">
    //     <div className="flex justify-between">
    //       <h1 className="font-semibold text-lg">Mata Pelajaran Favorit</h1>
    //       <Link className="text-sm" href={"/pelajaran"}>
    //         Selengkapnya
    //       </Link>
    //     </div>

    //     <div className="mt-4 flex gap-2 max-w-sm overflow-auto">
    //       <div className="bg-blue-500 rounded-lg p-4 text-white">
    //         <h1>Matematika</h1>
    //         <p>10 Kuis</p>
    //         <span>
    //           <LuPencilRuler />
    //         </span>
    //       </div>
    //       <div className="bg-blue-500 rounded-lg p-4 text-white">
    //         <h1>Matematika</h1>
    //         <p>10 Kuis</p>
    //       </div>
    //       <div className="bg-blue-500 rounded-lg p-4 text-white">
    //         <h1>Matematika</h1>
    //         <p>10 Kuis</p>
    //       </div>
    //       <div className="bg-blue-500 rounded-lg p-4 text-white">
    //         <h1>Matematika</h1>
    //         <p>10 Kuis</p>
    //       </div>
    //       <div className="bg-blue-500 rounded-lg p-4 text-white">
    //         <h1>Matematika</h1>
    //         <p>10 Kuis</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <div className="bg-white rounded-lg p-4 shadow-md mb-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Hello, Elliot</h1>
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src="/pizza.jpg"
              alt="User Profile"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Favorite Subjects */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4">Mata Pelajaran Favorit</h2>
        <div className="flex gap-4">
          <div className="bg-blue-500 rounded-lg p-4 text-white flex-1 flex items-center justify-between gap-5">
            <div>
              <h3 className="text-xl font-bold">Matematika</h3>
              <p>10 Kuis</p>
            </div>
            <div className="text-5xl">
              <LuPencilRuler />
            </div>
          </div>
          <div className="bg-green-500 rounded-lg p-4 text-white flex-1 flex items-center justify-between gap-5">
            <div>
              <h3 className="text-xl font-bold">IPA</h3>
              <p>8 Kuis</p>
            </div>
            <div className="text-5xl">
              <LuTrees />
            </div>
          </div>
        </div>
      </div>

      {/* Continue Quizzes */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Lanjutkan Kuis</h2>
        <div className="space-y-4">
          {["Dimensi 3", "Dimensi 3", "Dimensi 3", "Dimensi 3"].map(
            (quiz, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 shadow-md flex justify-between"
              >
                <span className="font-medium">{quiz}</span>
                <span className="text-gray-600">7/10 soal benar</span>
              </div>
            )
          )}
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-t p-4 flex justify-around items-center">
        <button className="text-green-500">
          {/* Replace with appropriate icon */}
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
              d="M3 12l2-2-2-2m4-2h5m-5 6h5m-5 6h5m-5 6h5"
            />
          </svg>
        </button>
        {/* Add other navigation items similarly */}
      </div>
    </div>
  );
}
