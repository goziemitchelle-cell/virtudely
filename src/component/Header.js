import { useState } from 'react';
import logo from "../assets/Logo5.png";

const Header = () => {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="absolute top-6 left-1/2 -translate-x-1/2 
      bg-white/80 backdrop-blur-md shadow-lg border border-white/40
      rounded-full px-6 py-3 
      max-w-6xl w-[90%] 
      flex items-center justify-between z-50">

      {/* Logo */}
      <div className="flex items-center">
        <img 
          src={logo} 
          alt="TalentConnect Logo" 
          className="h-50 md:h-16 object-contain"
        />
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-blue-900">

        {/* Services Dropdown */}
        <div className="relative">
          <button
            className="flex items-center space-x-1 hover:text-blue-800"
            onClick={() => setServicesOpen(!servicesOpen)}
          >
            <span>Services</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {servicesOpen && (
            <div className="absolute top-12 left-0 bg-white shadow-xl rounded-xl py-2 w-56 z-50 border border-gray-100">
              <a href="#" className="block px-4 py-2 hover:bg-gray-50">Customer Service</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-50">Sales Experts</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-50">Marketing Pros</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-50">Design & Development</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-50">Virtual Assistants</a>
            </div>
          )}
        </div>

        <a href="#" className="hover:text-blue-800">How It Works</a>
        <a href="#" className="hover:text-blue-800">About Us</a>
        <a href="#" className="hover:text-blue-800">Testimonials</a>
      </div>

      {/* CTA Button */}
      <button className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
        Book a Call
      </button>

    </nav>
  );
};

export default Header;