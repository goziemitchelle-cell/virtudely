import React from "react";
import office from "../assets/office.png";
import Header from "./Header";

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen text-white overflow-hidden">

      {/* Navbar */}
      <Header />

      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${office})`,
          backgroundSize: "contain", // shows full image
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#000", // fills empty space nicely
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/5"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 min-h-screen flex items-center">

        <div className="w-full pt-20 md:pt-0">

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