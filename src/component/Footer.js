import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/Logo4.png";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      duration: 0.6,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white relative overflow-hidden">

      {/* subtle grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[size:40px_40px]"></div>
      </div>

      {/* MAIN SECTION */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-5 gap-10"
      >

        {/* BRAND */}
        <motion.div variants={item} className="md:col-span-2">

          {/* ✨ NEW: Logo + Brand */}
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="logo" className="h-12 w-auto"  />
            <h2 className="text-green-600 text-2xl font-bold">
              TalentConnect
            </h2>
          </div>

          <p className="text-sm text-white leading-6 max-w-sm">
            We connect exceptional global talent with forward-thinking companies.
            Build faster teams with precision hiring and modern recruitment systems.
          </p>

          {/* Newsletter */}
          <div className="mt-6">
            <p className="text-white text-sm mb-2 font-medium">
              Subscribe to updates
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 text-sm text-white bg-[#111827] border border-gray-700 rounded-l-md outline-none focus:border-white transition"
              />
              <button className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-r-md hover:bg-green-700 transition">
                Join
              </button>
            </div>
          </div>
        </motion.div>

        {/* COMPANY */}
        <motion.div variants={item}>
          <h3 className="text-green-600 font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-white">
            {[
  { name: "How It Works", link: "#how-it-works" },
  { name: "About Us", link: "#about" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contactus" },
].map((item) => (
  <li key={item.name}>
    <a
      href={item.link}
      className="hover:text-white cursor-pointer transition"
    >
      {item.name}
    </a>
  </li>
))}
          </ul>
        </motion.div>

        {/* SERVICES */}
        <motion.div variants={item}>
          <h3 className="text-green-600 font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm text-white">
            {["Recruitment", "Remote Hiring", "Talent Matching", "HR Solutions"].map(
              (i) => (
                <li key={i} className="hover:text-white cursor-pointer transition">
                  {i}
                </li>
              )
            )}
          </ul>
        </motion.div>

        {/* LEGAL */}
        <motion.div variants={item}>
          <h3 className="text-green-600 font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm text-white">
            {[
  { name: "Privacy Policy", link: "/privacy-policy" },
  { name: "Terms", link: "/terms" },
].map((item) => (
  <li key={item.name}>
    <a
      href={item.link}
      className="hover:text-white transition"
    >
      {item.name}
    </a>
  </li>
))}
          </ul>
        </motion.div>
      </motion.div>

      {/* DIVIDER */}
      <div className="border-t border-white" />

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">

        <p>© {new Date().getFullYear()} TalentConnect. All rights reserved.</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          {["LinkedIn", "Twitter", "Instagram"].map((s) => (
            <span key={s} className="hover:text-white cursor-pointer transition">
              {s}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;