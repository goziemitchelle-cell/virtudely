import React from "react";

const steps = [
  {
    number: "01",
    title: "Tell Us Your Needs",
    desc: "Share your requirements and the type of talent you're looking for.",
  },
  {
    number: "02",
    title: "We Source Talent",
    desc: "We match you with pre-vetted professionals tailored to your needs.",
  },
  {
    number: "03",
    title: "Start Scaling",
    desc: "Onboard your talent and start growing your business immediately.",
  },
];

const HowItWorks = () => {
  return (
    <div className="py-16 bg-gray-200">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl font-bold mb-4">
          How It Works
        </h2>

        <p className="text-blue-900 mb-12">
          Simple, fast, and effective process to scale your team.
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {steps.map((step, index) => (
            <div key={index} className="text-center">

              {/* Number */}
              <div className="text-blue-900 text-4xl font-bold mb-4">
                {step.number}
              </div>

              {/* Title */}
              <h3 className="text-lg  text-blue-900 font-semibold mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm">
                {step.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default HowItWorks;