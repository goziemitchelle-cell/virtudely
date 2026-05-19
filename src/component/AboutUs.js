import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/VDlogo.png";

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-blue-950 text-white py-24 px-6"
    >
      {/* 🔵 Floating swirl background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl top-[-120px] left-[-120px] animate-spin-slow"></div>
        <div className="absolute w-[400px] h-[400px] bg-blue-900 rounded-full blur-3xl bottom-[-120px] right-[-120px] animate-pulse"></div>
      </div>

      {/* ✨ NEW: Soft logo watermark */}
      <div className="absolute top-6 left-6 opacity-10 pointer-events-none">
        <img src={logo} alt="TalentConnect Logo" className="h-40 w-auto" />
      </div>

      {/* 🔷 Top wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1200 120" className="w-full h-24">
          <path
            d="M0,0 C300,120 900,0 1200,100 L1200,0 L0,0 Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold tracking-wide"
        >
          About <span className="text-green-500">VirtuDely</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed"
        >
          VirtuDely is a next-generation hiring platform that connects top
          talent with forward-thinking companies. We make hiring faster,
          smarter, and more efficient through intelligent matching and seamless
          communication.
        </motion.p>

        {/* Cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Smart Matching",
              desc: "Recommendations for perfect hires.",
            },
            {
              title: "Global Reach",
              desc: "Access talent from anywhere in the world.",
            },
            {
              title: "Fast Hiring",
              desc: "Reduce hiring time significantly.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/5 border border-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl"
            >
              <h3 className="text-xl font-semibold text-green-500">
                {item.title}
              </h3>
              <p className="text-gray-300 mt-3 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🔵 Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 1200 120" className="w-full h-24">
          <path
            d="M0,0 C300,120 900,0 1200,100 L1200,0 L0,0 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default About;