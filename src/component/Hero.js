import React from "react";
import office from "../assets/office.png";
import Header from "./Header";

const Hero = () => {
  return (
    <div className="relative h-screen text-white overflow-hidden">

      {/* Navbar (NOW INSIDE HERO) */}
      <Header />

      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${office})`,
          backgroundSize: "cover",
          backgroundPosition: "center 15%",
          opacity:100,
        }}
      ></div>

      {/* Dark overlay (important for readability) */}
      <div className="absolute inset-0 bg-blue-900/5"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-40">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Accelerate Your Growth <br />
          with Elite Remote Talent
        </h1>

        <p className="mb-8 text-lg text-gray-200 max-w-xl">
          Build your team with top-tier professionals in Sales, Marketing,
          Design & More.
        </p>

      
      </div>
    </div>
  );
};

export default Hero;