import react from "react";
import office from "../assets/office.png";


const Hero = () => {
    return(
    <div className="relative bg-blue-900 text-white">
        {/*background image*/}
        <div className="absolute inset-0"
        style={{ 
            backgroundImage: `url(${office})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 15%',
            opacity: 500,
        }}></div>

        {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900 opacity-10"></div>

        {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-4 leading-tight">
          Accelerate Your Growth <br />
          with Elite Remote Talent
        </h1>

        <p className="mb-6 text-lg text-gray-200">
          Build your team with top-tier professionals in Sales, Marketing,
          Design & More.
        </p>

        <div className="flex space-x-4">
          <button className="bg-green-500 px-6 py-3 rounded font-semibold">
            Hire Talent
          </button>

          <button className="border border-white px-6 py-3 rounded">
            Learn More
          </button>
        </div>
      </div>
    </div>

    )
}

export default Hero