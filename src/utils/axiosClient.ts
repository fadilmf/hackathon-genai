import axios from "axios";

// Membuat instance axios dengan base URL
const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // Ganti dengan URL API Anda
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
