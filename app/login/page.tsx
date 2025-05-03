"use client";
import { useRouter } from "next/navigation";
import { AuthForm } from "@/components/auth/AuthForm";
import { motion } from "framer-motion";

export default function LoginPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#1a0732] via-[#120c48] to-[#030c1a] p-6 transition-all duration-1000">
      <motion.h1
        className="text-6xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-500 to-blue-300 mb-10 leading-tight"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Login
      </motion.h1>
      <div className="mt-[-10px]"> {/* Moves form slightly lower */}
        <AuthForm />
      </div>
      <p className="mt-6 text-gray-300 text-lg">
        Don’t have an account?{" "}
        <span
          className="text-purple-400 font-bold cursor-pointer hover:underline"
          onClick={() => router.push("/signup")}
        >
          Sign Up
        </span>
      </p>
    </main>
  );
}

