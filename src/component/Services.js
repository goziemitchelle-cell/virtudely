import React from "react";
import { motion } from "framer-motion";
import {
  FaUserFriends,
  FaBullseye,
  FaBullhorn,
  FaLaptopCode,
  FaHeadset,
} from "react-icons/fa";

const services = [
  {
    icon: <FaUserFriends size={40} className="text-blue-900" />,
    title: "Customer Service",
    desc: "Dedicated support teams for your clients.",
  },
  {
    icon: <FaBullseye size={40} className="text-blue-900" />,
    title: "Sales Experts",
    desc: "SDRs & BDRs to boost your pipeline.",
  },
  {
    icon: <FaBullhorn size={40} className="text-blue-900" />,
    title: "Marketing Pros",
    desc: "Campaigns that drive results.",
  },
  {
    icon: <FaLaptopCode size={40} className="text-blue-900" />,
    title: "Design & Development",
    desc: "Creative and technical talent.",
  },
  {
    icon: <FaHeadset size={40} className="text-blue-900" />,
    title: "Virtual Assistants",
    desc: "Admin support for your business.",
  },
];

const card = {
  hidden: {
    opacity: 0,
    y: 80,
    filter: "blur(6px)",
  },
  show: (i) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const Services = () => {
  return (
    <div className="bg-white py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-10">

        {services.map((service, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={card}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{ y: -8, scale: 1.05 }}
            className="text-center"
          >
            <div className="mb-4 flex justify-center">
              {service.icon}
            </div>

            <h3 className="font-semibold text-lg text-blue-900 mb-2">
              {service.title}
            </h3>

            <p className="text-black text-md">
              {service.desc}
            </p>
          </motion.div>
        ))}

      </div>
    </div>
  );
};

export default Services;