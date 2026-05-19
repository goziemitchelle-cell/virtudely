import { useState, useEffect, useRef } from "react";
import logo from "../assets/VDlogo.png";

const Header = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const contactRef = useRef(null);
  const servicesRef = useRef(null);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns when clicking outside
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
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = (
    <>
      <a href="/#how-it-works" className="hover:text-blue-700">
        How It Works
      </a>
      <a href="/#about" className="hover:text-blue-700">
        About Us
      </a>
      <a href="/#testimonials" className="hover:text-blue-700">
        Testimonials
      </a>
      <a href="/#contactus" className="hover:text-blue-700">
        Contact
      </a>
    </>
  );

  return (
    <nav
      className={`fixed top-3 left-1/2 -translate-x-1/2 z-50 transition-all duration-300
      ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg"
          : "bg-white/80 backdrop-blur-md"
      }
      border border-gray-200 rounded-3xl w-[95%] px-4 md:px-8 py-3 flex items-center justify-between`}
    >
      {/* LOGO */}
      <img
        src={logo}
        alt="logo"
        className={`object-contain transition-all duration-300 ${
          scrolled ? "h-14 md:h-18" : "h-20 md:h-28"
        }`}
      />

      {/* DESKTOP NAV */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-blue-900">
        {/* SERVICES */}
        <div className="relative" ref={servicesRef}>
          <button
            onClick={() => setServicesOpen(!servicesOpen)}
            className="flex items-center gap-1"
          >
            Services <span>{servicesOpen ? "▲" : "▼"}</span>
          </button>

          {servicesOpen && (
            <div className="absolute top-10 left-0 bg-white shadow-xl rounded-xl p-3 w-64 border">
              {[
                "Customer Service",
                "Sales Experts",
                "Business Development Representatives",
                "Design & Development",
                "Virtual Assistants",
                "Data Entry Specialists",
              ].map((item, i) => (
                <div key={i} className="p-2 hover:bg-gray-50 rounded">
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

        {navLinks}
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-3">
        {/* HAMBURGER */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-2xl text-blue-900"
        >
          ☰
        </button>

        {/* CTA */}
        <div className="relative" ref={contactRef}>
          <button
            onClick={() => setContactOpen(!contactOpen)}
            className="bg-green-600 text-white px-4 py-2 rounded-full text-sm hover:bg-green-700"
          >
            Book a Call
          </button>

          {contactOpen && (
            <div className="absolute right-0 mt-3 w-72 bg-white shadow-xl rounded-xl p-4 border">
              <p className="font-semibold mb-2">Contact Us</p>
              <p>📧 contact@virtudely.com</p>
              <p>📞 +234 800 000 0000</p>
            </div>
          )}
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full mt-3 bg-white rounded-2xl shadow-xl p-5 flex flex-col gap-5 md:hidden border">

          {/* SERVICES */}
          <div>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="font-medium text-left w-full text-blue-900"
            >
              Services {servicesOpen ? "▲" : "▼"}
            </button>

            {servicesOpen && (
              <div className="pl-3 mt-2 flex flex-col gap-2 text-gray-700">
                <span>Customer Service</span>
                <span>Sales Experts</span>
                <span>Business Development Representatives</span>
                <span>Design & Development</span>
                <span>Virtual Assistants</span>
                <span>Data Entry Specialists</span>
              </div>
            )}
          </div>

          {/* LINKS */}
          <div className="flex flex-col gap-4 font-medium text-blue-900">
            {navLinks}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;