import React from "react";
import office from "../assets/office.png";
import Header from "./Header";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden text-white bg-black">

      {/* Background Image */}
      <img
        src={office}
        alt="Office Background"
        className="
          absolute inset-0
          w-full h-full
          object-contain md:object-cover
          object-center
        "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Navbar */}
      <div className="relative z-20">
        <Header />
      </div>

      {/* Content */}
      <div
        className="
          relative z-10
          max-w-6xl
          mx-auto
          px-6 sm:px-8 lg:px-12
          min-h-screen
          flex items-center
        "
      >
        <div className="w-full pt-32 md:pt-20">

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Accelerate Your Growth
            <br className="hidden sm:block" />
            with Elite Remote Talent
          </h1>

          {/* Paragraph */}
          <p className="text-base sm:text-lg text-gray-200 max-w-xl leading-relaxed">
            Build your team with top-tier professionals in Sales,
            Marketing, Design & More.
          </p>

        </div>
      </div>
    </section>
  );
};

export default Hero;