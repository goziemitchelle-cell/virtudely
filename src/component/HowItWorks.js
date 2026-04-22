import { motion } from "framer-motion";

const steps = [
  {
    number: ["0", "1"],
    title: "Tell Us Your Needs",
    desc: "Share your requirements and the type of talent you're looking for.",
  },
  {
    number: ["0", "2"],
    title: "We Source Talent",
    desc: "We match you with pre-vetted professionals tailored to your needs.",
  },
  {
    number: ["0", "3"],
    title: "Start Scaling",
    desc: "Onboard your talent and start growing your business immediately.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.22 },
  },
};

const card = {
  hidden: { opacity: 0, y: 70, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

// Cloud SVG divider (top)
const CloudTop = () => (
  <svg viewBox="0 0 1440 90" xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none" className="w-full block">
    <rect width="1440" height="90" fill="white" />
    <path d="M0,90 
      C30,65 55,50 80,60 C100,68 115,80 140,72 C165,64 170,44 200,48 
      C228,52 240,70 265,68 C290,66 300,46 330,42 C358,38 375,58 400,62 
      C425,66 435,50 465,46 C492,42 510,60 540,64 C568,68 580,52 610,48 
      C638,44 655,62 685,66 C712,70 725,54 755,50 C782,46 800,64 830,68 
      C858,72 875,56 905,52 C932,48 950,66 980,70 C1008,74 1020,58 1050,54 
      C1078,50 1095,68 1125,72 C1152,76 1165,60 1195,56 
      C1222,52 1240,70 1270,74 C1298,78 1320,62 1350,58 
      C1380,54 1410,72 1440,76 
      L1440,0 L0,0 Z"
      fill="#0f2356" />
  </svg>
);

// Wave SVG divider (bottom)
const WaveBottom = () => (
  <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none" className="w-full block">
    <rect width="1440" height="100" fill="white" />
    <path
      d="M0,0 C180,80 360,120 540,80 C720,40 900,0 1080,60 C1260,120 1380,80 1440,60 L1440,0 Z"
      fill="#0f2356" />
  </svg>
);

const HowItWorks = () => {
  return (
    <div className="overflow-hidden">
      {/* Cloud top divider */}
      <CloudTop />

      {/* Main section */}
      <div
        id="how-it-works"
        className="bg-[#0f2356] py-20 px-6 scroll-mt-32"
      >
        <div className="max-w-5xl mx-auto text-center">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, amount: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-3">
              How It <span className="text-green-600">Works</span>
            </h2>

            {/* Accent line */}
            <div className="mx-auto mb-4 h-[3px] w-14 rounded-full bg-green-600" />

            <p className="text-[#c6d6f2] mb-14 text-base">
              Simple, fast, and effective process to scale your team.
            </p>
          </motion.div>

          {/* Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={card}
                className="relative bg-white rounded-2xl p-8 text-center cursor-pointer shadow-sm"
                whileHover={{
                  y: -12,
                  scale: 1.03,
                  boxShadow:
                    "0 20px 48px rgba(15,35,86,0.28), 0 0 0 3px rgba(245,166,35,0.2)",
                }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                {/* Hover glow */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "radial-gradient(ellipse at 60% 0%, rgba(245,166,35,0.12), transparent 70%)",
                  }}
                />

                {/* Dot */}
                <div className="mx-auto mb-4 h-3 w-3 rounded-full bg-green-600" />

                {/* Number */}
                <div className="text-black text-5xl font-bold mb-4 leading-none">
                  {step.number[0]}
                  <span className="text-green-600">{step.number[1]}</span>
                </div>

                {/* Title */}
                <h3 className="text-[#0f2356] text-lg font-bold mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-black text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Wave bottom divider */}
      <WaveBottom />
    </div>
  );
};

export default HowItWorks;