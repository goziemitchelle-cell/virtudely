import { useState, useEffect, useRef } from "react";
import logo from "../assets/VDlogo.png";

const Header = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const contactRef = useRef(null);
  const servicesRef = useRef(null);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (contactRef.current && !contactRef.current.contains(e.target)) {
        setContactOpen(false);
      }

      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 
      transition-all duration-300
      ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg h-16 max-w-6xl"
          : "bg-white/80 backdrop-blur-md h-20 max-w-7xl"
      }
      border border-gray-200 rounded-full w-[95%] px-10 flex items-center justify-between`}
    >
      {/* LOGO */}
      <img
        src={logo}
        alt="VirtuDely Logo"
        className={`object-contain transition-all duration-300
        ${scrolled ? "h-20" : "h-40"}`}
      />

      {/* NAV LINKS */}
      <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-blue-900">

        {/* SERVICES */}
        <div className="relative" ref={servicesRef}>
          <button
            onClick={() => setServicesOpen(!servicesOpen)}
            className="flex items-center gap-1 hover:text-blue-700 transition"
          >
            Services
            <span className={`transition ${servicesOpen ? "rotate-180" : ""}`}>
              ▼
            </span>
          </button>

          <div
            className={`absolute top-10 left-0 bg-white shadow-xl rounded-xl py-2 w-56 border transition-all duration-200 origin-top
            ${
              servicesOpen
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
            }`}
          >
            {[
              "Customer Service",
              "Sales Experts",
              "Business Development representatives",
              "Design & Development",
              "Virtual Assistants",
              "Data Entry Specialists",
            ].map((item, i) => (
              <button
                key={i}
                className="block w-full text-left px-4 py-2 hover:bg-gray-50"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* ✅ FIXED LINKS (WORK FROM ANY PAGE) */}
        <a href="/#how-it-works" className="hover:text-blue-700 transition">
          How It Works
        </a>

        <a href="/#about" className="hover:text-blue-700 transition">
          About Us
        </a>

        <a href="/#testimonials" className="hover:text-blue-700 transition">
          Testimonials
        </a>

        <a href="/#contactus" className="hover:text-blue-700 transition">
          Contact
        </a>
      </div>

      {/* CTA */}
      <div className="relative" ref={contactRef}>
        <button
          onClick={() => setContactOpen(!contactOpen)}
          className={`bg-green-600 text-white rounded-full transition-all duration-300
          ${scrolled ? "px-4 py-1.5 text-sm" : "px-5 py-2"}
          hover:bg-green-700 shadow-md`}
        >
          Book a Call
        </button>

        {/* POPUP */}
        <div
          className={`absolute right-0 mt-3 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 p-5
          transition-all duration-200 origin-top-right
          ${
            contactOpen
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
          }`}
        >
          <h4 className="text-gray-900 font-semibold mb-3">
            Contact Us
          </h4>

          <div className="p-3 hover:bg-gray-50 text-black rounded-lg cursor-pointer">
            ✉️ contact@virtudely.com
          </div>

          <div className="p-3 hover:bg-gray-50 text-black rounded-lg cursor-pointer">
            📞 +234 800 000 0000
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;