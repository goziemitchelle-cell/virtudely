import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/VDlogo.png";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Manager",
    text: "VirtuDely helped us scale our sales team in weeks.",
  },
  {
    name: "David Chen",
    role: "Startup Founder",
    text: "We got top-tier talent faster than expected.",
  },
  {
    name: "Amina Yusuf",
    role: "Operations Lead",
    text: "Feels like an in-house team without the stress.",
  },
  {
    name: "Michael Brown",
    role: "CEO",
    text: "Our productivity doubled after working with them.",
  },
  {
    name: "Jessica Lee",
    role: "HR Manager",
    text: "The hiring process became effortless and fast.",
  },
  {
    name: "Ibrahim Bello",
    role: "Business Owner",
    text: "Highly reliable talent. Highly recommended.",
  },
];

// duplicate for seamless loop
const duplicated = [...testimonials, ...testimonials];

const Testimonials = () => {
  return (
    <div
      id="testimonials"
      className="relative bg-white py-24 overflow-hidden scroll-mt-32"
    >

      {/* ✨ NEW: Soft center watermark logo */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <img src={logo} alt="logo" className="h-72 w-auto" />
      </div>

      {/* Header */}
      <div className="text-center mb-16 px-6 relative z-10">
        <h2 className="text-4xl font-bold text-blue-950">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 mt-2">
          Real results from companies scaling with VirtuDely.
        </p>
      </div>

      {/* SLIDER WRAPPER */}
      <div className="relative">

        {/* FADE LEFT */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />

        {/* FADE RIGHT */}
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />

        {/* SLIDER */}
        <div className="overflow-hidden relative z-10">
          <motion.div
            className="flex gap-8 px-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 45,
              ease: "linear",
            }}
          >
            {duplicated.map((item, index) => (
              <div
                key={index}
                className="min-w-[300px] md:min-w-[350px] bg-blue-950 p-6 rounded-2xl shadow-sm hover:shadow-lg transition"
              >
                <p className="text-white text-lg mb-4">
                  "{item.text}"
                </p>

                <div className="border-t border-white/20 pt-3">
                  <h4 className="font-semibold text-white">
                    {item.name}
                  </h4>
                  <p className="text-sm text-green-600">
                    {item.role}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default Testimonials;