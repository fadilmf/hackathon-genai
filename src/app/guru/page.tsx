"use client";

import axiosClient from "@/utils/axiosClient";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

export default function UploadMaterialPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState<boolean>(false);
  const [selectedSubject, setSelectedSubject] = useState<string>(""); // State untuk pelajaran yang dipilih
  const [chapterName, setChapterName] = useState<string>(""); // State untuk nama bab

  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Memastikan hanya file PDF yang diizinkan
    const pdfFiles = acceptedFiles.filter(
      (file) => file.type === "application/pdf"
    );
    setFiles(pdfFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "application/pdf": [".pdf"] },
  });

  const handleUpload = async () => {
    if (files.length === 0) {
      alert("Please upload at least one PDF file.");
      return;
    }

    if (!selectedSubject) {
      alert("Please select a subject.");
      return;
    }

    if (!chapterName) {
      alert("Please enter a chapter name.");
      return;
    }

    setUploading(true);

    try {
      const formData = new FormData();

      // Append each file with the key 'file' (matching the backend)
      files.forEach((file) => {
        formData.append("file", file); // Use 'file' instead of 'pdf_file'
      });

      formData.append("course_name", selectedSubject); // Tambahkan pelajaran yang dipilih ke formData
      formData.append("chapter_name", chapterName); // Tambahkan nama bab ke formData

      // Log FormData entries
      // for (let [key, value] of formData.entries()) {
      //   if (value instanceof File) {
      //     console.log(`${key}: ${value.name}`); // Log the file name
      //   } else {
      //     console.log(`${key}: ${value}`); // Log other values
      //   }
      // }

      // Send the files to an API route
      const response = await axiosClient.post("/upload_pdf", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 201) {
        alert("Files uploaded successfully!");
        setFiles([]);
        setSelectedSubject(""); // Reset pelajaran yang dipilih
        setChapterName(""); // Reset nama bab
      } else {
        alert("Failed to upload files. Please try again.");
      }
    } catch (error) {
      console.error("Error uploading files:", error);
      alert(
        "An error occurred while uploading the files. Please check the console for details."
      );
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Upload PDF Materi
        </h2>

        {/* Dropdown Pelajaran */}
        <div className="mb-6">
          <label
            className="block text-sm font-medium text-gray-700 mb-2"
            htmlFor="subject"
          >
            Pilih Pelajaran:
          </label>
          <select
            id="subject"
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="" disabled>
              -- Pilih Pelajaran --
            </option>
            <option value="Matematika">Matematika</option>
            <option value="Biologi">Biologi</option>
            <option value="Kimia">Kimia</option>
            <option value="Fisika">Fisika</option>
            <option value="Sejarah">Sejarah</option>
          </select>
        </div>

        {/* Input Nama Bab */}
        <div className="mb-6">
          <label
            className="block text-sm font-medium text-gray-700 mb-2"
            htmlFor="chapterName"
          >
            Nama Bab:
          </label>
          <input
            id="chapterName"
            type="text"
            value={chapterName}
            onChange={(e) => setChapterName(e.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Dropzone untuk Upload PDF */}
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-6 text-center ${
            isDragActive ? "border-blue-500" : "border-gray-300"
          }`}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p className="text-blue-500">Drop the files here...</p>
          ) : (
            <p>Drag & drop some files here, or click to select files</p>
          )}
        </div>
        {files.length > 0 && (
          <div className="mt-4">
            <h3 className="font-semibold">Files to be uploaded:</h3>
            <ul className="list-disc ml-6">
              {files.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Tombol Upload */}
        <div className="mt-6 flex justify-center">
          <button
            className={`px-4 py-2 rounded-md shadow-md ${
              uploading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
            onClick={handleUpload}
            disabled={uploading}
          >
            {uploading ? "Uploading..." : "Upload PDF"}
          </button>
        </div>
      </div>
    </div>
  );
}
