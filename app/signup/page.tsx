"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signing up with:", formData);
    // Handle signup logic here
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#1a0732] via-[#120c48] to-[#030c1a] p-6 transition-all duration-1000">
      {/* Animated Sign Up Heading */}
      <motion.h1
        className="text-6xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-500 to-blue-300 mb-10 leading-tight"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Sign Up
      </motion.h1>

      {/* Form */}
      <div className="mt-[-20px]"> {/* Moves form slightly lower */}
        <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 border border-gray-300 rounded"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-4 border border-gray-300 rounded"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-bold p-3 rounded hover:bg-purple-700"
          >
            Sign Up
          </button>
        </form>
      </div>

      {/* Login Redirect */}
      <p className="mt-6 text-gray-300 text-lg">
        Already have an account?{" "}
        <span
          className="text-purple-400 font-bold cursor-pointer hover:underline"
          onClick={() => router.push("/login")}
        >
          Login
        </span>
      </p>
    </main>
  );
}
