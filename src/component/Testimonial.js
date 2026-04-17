import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Manager",
    text: "TalentConnect helped us scale our sales team in weeks. The quality of talent is exceptional.",
  },
  {
    name: "David Chen",
    role: "Startup Founder",
    text: "The onboarding was seamless. We got pre-vetted professionals who delivered immediately.",
  },
  {
    name: "Amina Yusuf",
    role: "Operations Lead",
    text: "It feels like having an in-house team without the stress of hiring.",
  },
];

// DIFFERENT ANIMATION STYLE (left / right reveal)
const variants = [
  {
    hidden: { opacity: 0, x: -120, rotate: -3 },
    show: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
  },
  {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
  },
  {
    hidden: { opacity: 0, x: 120, rotate: 3 },
    show: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
  },
];

const Testimonials = () => {
  return (
    <div className="relative bg-gray-100 py-28 overflow-hidden">

      {/* soft background glow (like Digireps) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-200/30 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 mb-16">
            Real results from companies scaling with TalentConnect.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">

          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              variants={variants[index]}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white p-8 rounded-2xl shadow-sm relative"
            >
              <p className="text-gray-600 mb-6 text-sm">
                "{item.text}"
              </p>

              <div className="border-t pt-4">
                <h4 className="font-semibold text-blue-900">
                  {item.name}
                </h4>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Testimonials;
