"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export default function WelcomeScreen() {
  const aboutRef = useRef<HTMLDivElement>(null);

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#1a0732] via-[#120c48] to-[#030c1a] transition-all duration-1000">
      
      {/* Navigation Bar */}
      <nav className="w-[90%] mx-auto mt-4 py-4 px-8 bg-white/20 backdrop-blur-lg rounded-2xl flex justify-between items-center shadow-lg">
        <h1 className="text-2xl font-bold text-white">DYNAMIC PRICING</h1>
        <div className="space-x-6">
          <Link href="/" className="text-gray-200 font-medium hover:text-gray-400">Home</Link>
          <button onClick={scrollToAbout} className="text-gray-200 font-medium hover:text-gray-400">About</button>
          <Link href="/login">
            <motion.button
              className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md transition-all"
              whileHover={{ backgroundColor: "#4f46e5", scale: 1.05 }}
            >
              Login
            </motion.button>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 mt-20 flex-grow">
        
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left">
          <motion.h1 
            className="text-7xl md:text-8xl font-extrabold bg-clip-text text-transparent animate-gradient bg-gradient-to-r from-blue-300 via-purple-500 to-blue-300 mb-14 leading-tight"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            DYNAMIC PRICING
          </motion.h1>
          
          {/* Added more space before "Revolutionize" */}
          <p className="text-xl text-gray-200 mt-10">
            Revolutionize your pricing strategy with our dashboard.
            Gain real-time insights, track market trends, and receive AI-powered price recommendations to stay ahead of the competition.
          </p>

          {/* Hover Glow Button with Navigation */}
          <Link href="/login">
            <motion.button
              className="relative mt-12 px-8 py-3 text-lg font-semibold rounded-full shadow-lg bg-purple-600 text-white overflow-hidden transition-all"
              whileHover={{ scale: 1.1 }}
            >
              <span className="relative z-10">Get Started</span>

              {/* Glow Effect Layers */}
              <motion.span
                className="absolute inset-0 rounded-full opacity-0 hover:opacity-100 transition-all duration-500 bg-gradient-to-r from-blue-500 via-white to-purple-600 blur-xl"
                whileHover={{ opacity: 1, scale: 1.2 }}
              />
              <motion.span
                className="absolute inset-0 rounded-full opacity-0 hover:opacity-50 transition-all duration-700 bg-gradient-to-r from-blue-300 via-white to-purple-500 blur-3xl"
                whileHover={{ opacity: 0.8, scale: 1.3 }}
              />
            </motion.button>
          </Link>
        </div>

        {/* Right Side Image */}
        <motion.div 
          className="md:w-1/2 flex justify-center mt-8 md:mt-0"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image 
            src="/dynamic-pricing.png" // Replace with actual image
            alt="Dynamic Pricing Dashboard"
            width={450}
            height={350}
            className="rounded-lg"
          />
        </motion.div>
      </div>

      {/* Spacer to push About section further down */}
      <div className="h-[300px] w-full"></div> {/* Adjusted height to bring About section higher */}

      {/* About Section */}
      <div ref={aboutRef} className="py-20 px-10 md:px-32 text-white">
        <div className="flex flex-col md:flex-row items-center">
          
          {/* Left Side - Text */}
          <motion.div 
            className="md:w-1/2 text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-white mb-6">
              About Dynamic Pricing
            </h2>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Struggling to set the right price for your products? The Dynamic Pricing System takes the guesswork out of pricing by providing real-time, data-driven price recommendations. With just a few clicks, businesses can:
            </p>

            <ul className="mt-6 text-gray-200 space-y-4">
              <li>✔ <span className="font-semibold text-blue-300">Analyze Competitor Prices</span> – Stay ahead of the market by tracking price trends.</li>
              <li>✔ <span className="font-semibold text-purple-300">Predict Future Demand</span> – Leverage AI-powered forecasting to make smarter pricing decisions.</li>
              <li>✔ <span className="font-semibold text-blue-400">Maximize Profits & Stay Competitive</span> – Adjust prices dynamically for the best balance of revenue and customer satisfaction.</li>
              <li>✔ <span className="font-semibold text-purple-400">User-Friendly Dashboard</span> – Get instant insights with an interactive, easy-to-use interface.</li>
            </ul>

            <p className="mt-8 text-lg text-gray-300">
              No more manual adjustments or outdated pricing—let the system do the work for you! 🚀
            </p>
          </motion.div>

          {/* Right Side - Graph Image */}
          <motion.div 
            className="md:w-1/2 flex justify-center mt-8 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image 
              src="/pricing-prediction-graph.png" // Replace with actual graph image
              alt="Pricing Prediction Model Graph"
              width={500}
              height={350}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          
        </div>
        <div className="flex justify-center mt-12">
          <Link href="/login">
            <motion.button
              className="relative px-8 py-3 text-lg font-semibold rounded-full shadow-lg bg-purple-600 text-white overflow-hidden transition-all"
              whileHover={{ scale: 1.1 }}
            >
              <span className="relative z-10">Get Started</span>
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
}





