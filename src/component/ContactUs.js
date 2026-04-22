import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";


const CTA = () => {
  const [open, setOpen] = useState(false);

  const contactItems = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "your@email.com",
      link: "mailto:your@email.com",
    },
    {
      icon: <FaPhoneAlt />,
      label: "Phone",
      value: "+234 800 000 0000",
      link: "tel:+2348000000000",
    },
    {
      icon: <FaWhatsapp />,
      label: "WhatsApp",
      value: "Chat with us",
      link: "https://wa.me/2348000000000",
    },
  ];

  return (
    <div id="contactus"
    className="relative py-32 bg-white overflow-hidden text-center">


      <div className="relative z-10 max-w-3xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">
          Ready to Scale Your Team?
        </h2>

        <p className="text-blue-950 mb-10 text-lg">
          Reach us instantly — fast, simple, and reliable.
        </p>

        <motion.button
          onClick={() => setOpen(true)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-md"
        >
          Contact Us
        </motion.button>
      </div>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 w-full max-w-md relative"
          >

            {/* CLOSE */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-black transition"
            >
              ✕
            </button>

            <h3 className="text-xl font-semibold text-blue-900 mb-8 text-center">
              Get in Touch
            </h3>

            {/* CONTACT ITEMS */}
            <div className="space-y-4">

              {contactItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target={item.label === "WhatsApp" ? "_blank" : "_self"}
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.03,
                    y: -4,
                  }}
                  className="flex items-center justify-between p-4 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-lg transition relative overflow-hidden"
                >

                  {/* glow effect */}
                  <div className="absolute inset-0 opacity-0 hover:opacity-100 bg-blue-100 blur-2xl transition duration-300 -z-10" />

                  <div className="flex items-center gap-4">
                    <div className="text-blue-900 text-lg">
                      {item.icon}
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">
                        {item.label}
                      </p>
                      <p className="text-blue-900 font-medium">
                        {item.value}
                      </p>
                    </div>
                  </div>

                  <span className="text-gray-400 text-sm">→</span>

                </motion.a>
              ))}

            </div>

          </motion.div>
        </div>
      )}
    </div>
  );
};

export default CTA;