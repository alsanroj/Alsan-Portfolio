import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import TiltCard from "./TiltCard";

const experiences = [
  {
    title: "React Developer",
    company: "Loremore Pvt. Ltd",
    period: "08/2025 - 10/2025",
    highlights: [
      "Built automation workflows using n8n for LinkedIn auto-posting",
      "Designed UI/UX wireframes in Figma",
      "Developed real-time projects",
    ],
  },
  {
    title: "Web Developer Intern",
    company: "Codesoft",
    period: "05/2024 - 06/2024",
    highlights: [
      "Managed RESTful APIs with Node.js/Express",
      "Handled MongoDB databases",
      "Built responsive UIs with React",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 md:px-4 relative z-20">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-red-600 via-red-500 to-dark-red-900 bg-clip-text text-transparent"
        >
          EXPERIENCE
        </motion.h2>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom:0 w-1 bg-gradient-to-b from-red-600 via-red-500 to-dark-red-900"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline Dot with Ping Animation */}
                <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-6 z-10">
                  <div className="relative w-4 h-4">
                    {/* Ping Animation Ring */}
                    <div
                      className="absolute inset-0 rounded-full bg-red-600 animate-ping opacity-75"
                      style={{ animationDuration: "2s" }}
                    ></div>
                    {/* Dot */}
                    <div className="relative w-4 h-4 rounded-full bg-gradient-to-r from-red-600 to-red-500 border-2 border-black shadow-lg shadow-red-600/50"></div>
                  </div>
                </div>

                {/* Content Card */}
                <div
                  className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${
                    index % 2 === 0
                      ? "md:mr-auto md:pr-12"
                      : "md:ml-auto md:pl-12"
                  }`}
                >
                  <TiltCard>
                    <div className="bg-black/50 border border-gray-800 rounded-lg p-6 md:p-8 hover:border-red-600/50 transition-all">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 bg-red-600/20 rounded-lg">
                          <Briefcase className="w-6 h-6 text-red-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-xl text-red-600 mb-2">
                            {exp.company}
                          </p>
                          <p className="text-sm text-gray-400 mb-4">
                            {exp.period}
                          </p>
                        </div>
                      </div>

                      <div className="ml-14">
                        <h4 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide">
                          Highlights:
                        </h4>
                        <ul className="space-y-2">
                          {exp.highlights.map((highlight, hIndex) => (
                            <li
                              key={hIndex}
                              className="flex items-start gap-2 text-gray-400"
                            >
                              <span className="text-red-600 mt-1.5">•</span>
                              <span className="leading-relaxed">
                                {highlight}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </TiltCard>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
