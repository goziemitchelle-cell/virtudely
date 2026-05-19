import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ add this
import logo from "../assets/VDlogo.png";

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

      {/* background */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[size:40px_40px]"></div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-5 gap-10"
      >

        {/* BRAND */}
        <motion.div variants={item} className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="logo" className="h-12 w-auto" />
            <h2 className="text-green-600 text-2xl font-bold">
              VirtuDely
            </h2>
          </div>

          <p className="text-sm leading-6 max-w-sm">
            We connect exceptional global talent with forward-thinking companies.
          </p>
        </motion.div>

        {/* COMPANY */}
        <motion.div variants={item}>
          <h3 className="text-green-600 font-semibold mb-4">Company</h3>

          <ul className="space-y-2 text-sm">
            {[
              { name: "How It Works", link: "/#how-it-works" },
              { name: "About Us", link: "/#about" },
              { name: "Testimonials", link: "/#testimonials" },
              { name: "Contact", link: "/#contactus" }, // ✅ fixed
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

        {/* SERVICES */}
        <motion.div variants={item}>
          <h3 className="text-green-600 font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
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

          <ul className="space-y-2 text-sm">
            {[
              { name: "Privacy Policy", link: "/privacy-policy" },
              { name: "Terms", link: "/terms" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  to={item.link}   // ✅ use Link instead of <a>
                  className="hover:text-white transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      {/* bottom */}
      <div className="border-t border-white" />

      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} VirtuDely. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;