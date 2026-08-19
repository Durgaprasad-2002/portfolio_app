import { motion } from "framer-motion";
import { useTheme } from "../ThemeContext";

export default function Experience() {
  const { theme } = useTheme();

  const experiences = [
    {
      title: "Associate Software Engineer",
      company: "InterviewBuddy",
      period: "May 2025 – Present",
      type: "Full-time",
      highlights: [
        "Improved Lighthouse scores from 68 to 90+, increasing traffic by 37%",
        "Built AI-driven features supporting 500+ concurrent interactive sessions",
        "Reduced API latency by 25% through optimization and caching strategies",
        "Implemented high-performance search with Typesense and pagination",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "InterviewBuddy",
      period: "Jan 2025 – Apr 2025",
      type: "Internship",
      highlights: [
        "Developed core interview platform features using React and Node.js",
        "Implemented real-time video integration with WebRTC",
        "Built comprehensive testing suite with Jest and React Testing Library",
        "Contributed to PostgreSQL schema optimization",
      ],
    },
  ];

  const cardBgClass = theme === "light"
    ? "bg-gray-50 border-gray-200"
    : "bg-darker border-gray-800";

  const textClass = theme === "light" ? "text-gray-900" : "text-gray-100";
  const mutedTextClass = theme === "light" ? "text-gray-600" : "text-gray-400";

  return (
    <section className={`py-16 sm:py-20 px-4 md:px-6 lg:px-8 ${theme === "light" ? "bg-white" : ""}`}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${
            theme === "light"
              ? "bg-gradient-to-r from-gray-900 to-gray-600"
              : "bg-gradient-to-r from-gray-100 to-gray-400"
          } bg-clip-text text-transparent`}>
            Experience
          </h2>
        </motion.div>

        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-6 sm:p-8 rounded-lg border ${cardBgClass} group overflow-hidden`}
            >
              {/* Gradient overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity -z-10"
                layoutId={`bg-${idx}`}
              />

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                <div className="flex-1">
                  <h3 className={`text-xl sm:text-2xl font-bold ${textClass}`}>
                    {exp.title}
                  </h3>
                  <p className="text-lg text-accent">{exp.company}</p>
                  <p className={`text-sm sm:text-base ${mutedTextClass}`}>
                    {exp.period}
                  </p>
                </div>
                <motion.span
                  className={`inline-block px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold border ${
                    exp.type === "Full-time"
                      ? theme === "light"
                        ? "bg-green-50 text-green-700 border-green-200"
                        : "bg-accent/20 text-accent border-accent/30"
                      : theme === "light"
                        ? "bg-blue-50 text-blue-700 border-blue-200"
                        : "bg-blue-950/30 text-blue-300 border-blue-900/30"
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  {exp.type}
                </motion.span>
              </div>

              <div className="space-y-2">
                {exp.highlights.map((highlight, hIdx) => (
                  <motion.div
                    key={hIdx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: hIdx * 0.05 }}
                    viewport={{ once: true }}
                    className={`flex gap-3 ${mutedTextClass} text-sm sm:text-base`}
                  >
                    <span className="text-accent font-bold mt-0.5">▸</span>
                    <span>{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
