import React from "react";
import office from "../assets/office.png";
import Header from "./Header";

const Hero = () => {
  return (
    <div className="relative w-full text-white overflow-hidden">

      {/* Navbar */}
      <Header />

      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={office}
          alt="Office"
          className="w-full h-full object-contain md:object-cover object-center"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/5 -z-10"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 min-h-[100svh] flex items-center">

        <div className="w-full pt-24 md:pt-0">

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Accelerate Your Growth
            <br className="hidden sm:block" />
            with Elite Remote Talent
          </h1>

          {/* Paragraph */}
          <p className="text-base sm:text-lg text-gray-200 max-w-xl leading-relaxed mb-8">
            Build your team with top-tier professionals in Sales,
            Marketing, Design & More.
          </p>

        </div>

      </div>
    </div>
  );
};

export default Hero;