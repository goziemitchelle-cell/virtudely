import { useState } from 'react';
import logo from "../assets/TCLogo3.png";
const Header = () => {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="bg-blue-900 h-12 px-6  flex items-center justify-between">

      {/* Logo */}
      <div className="flex items-center">
  <img 
    src={logo} 
    alt="TalentConnect Logo" 
    className="h-10 object-contain"
    style={{ mixBlendMode: 'luminosity' }}
  />
</div>

      {/* Nav Links */}
      <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-white">

        {/* Services with Dropdown */}
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
            <div className="absolute top-8 left-0 bg-white shadow-lg rounded-md py-2 w-52 z-50 border border-gray-100">
             <a href="#" className="block px-4 py-2 hover:bg-gray-50 text-gray-700">Customer Service</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-50 text-gray-700">Sales Experts</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-50 text-gray-700">Marketing Pros</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-50 text-gray-700">Design & Development</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-50 text-gray-700">Virtual Assistants</a>
            </div>
          )}
        </div>

        <a href="#" className="hover:text-blue-800">How It Works</a>
        <a href="#" className="hover:text-blue-800">About Us</a>
        <a href="#" className="hover:text-blue-800">Testimonials</a>
      </div>

      

    </nav>
  );
};

export default Header;