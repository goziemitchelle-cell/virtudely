import React from "react";
import {  FaUserFriends, FaBullseye, FaBullhorn, FaLaptopCode, FaHeadset } from "react-icons/fa";

const services = [
    {
    icon: <FaUserFriends size={40} className="text-blue-900" />,
    title: "Customer Service",
    desc: "Dedicated support teams for your clients.",
  },
  {
    icon: <FaBullseye size={40} className="text-blue-900" />,
    title: "Sales Experts",
    desc: "SDRs & BDRs to boost your pipeline.",
  },
  {
    icon: <FaBullhorn size={40} className="text-blue-900" />,
    title: "Marketing Pros",
    desc: "Campaigns that drive results.",
  },
  {
    icon: <FaLaptopCode size={40} className="text-blue-900" />,
    title: "Design & Development",
    desc: "Creative and technical talent.",
  },
  {
    icon: <FaHeadset size={40} className="text-blue-900" />,
    title: "Virtual Assistants",
    desc: "Admin support for your business.",
  },
];

const Services = () => {
  return (
    <div className="bg-white py-5">
      <div className="max-w-6x4 mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-6">

        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-2 text-center"
          >
            <div className="mb-4 flex justify-center">
              {service.icon}
            </div>

            <h3 className="font-semibold text-lg text-blue-900 mb-2">
              {service.title}
            </h3>

            <p className="text-black text-md">
              {service.desc}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Services;