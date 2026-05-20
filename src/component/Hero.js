import React from "react";
import office from "../assets/office.png";
import Header from "./Header";

const Hero = () => {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">

      {/* Navbar */}
      <Header />

      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${office})`,
          backgroundSize: "cover",
          backgroundPosition: "center 15%",
          opacity: 1,
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-blue-900/5"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center min-h-screen">

        <div className="w-full pt-24 sm:pt-32 md:pt-20">

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Accelerate Your Growth{" "}
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