"use client";

import { useState } from "react";

export default function ProfilePage() {
  const [user, setUser] = useState({
    name: "Sakho",
    email: "sakho@sakho.com",
    bio: "A passionate software developer who loves to code!",
    profilePictureUrl: "https://via.placeholder.com/150",
  });

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-col items-center">
          <img
            className="w-32 h-32 rounded-full shadow-lg mb-4"
            src={user.profilePictureUrl}
            alt={`${user.name}'s profile`}
          />
          <h2 className="text-2xl font-bold mb-2">{user.name}</h2>
          <p className="text-gray-500 mb-4">{user.email}</p>
        </div>
        {/* Tombol Edit Profil */}
        <div className="mt-6 flex justify-center">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600"
            onClick={() => alert("Fitur Edit Profil Segera Hadir!")}
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}
