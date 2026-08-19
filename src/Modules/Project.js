import { motion } from "framer-motion";
import { useTheme } from "../ThemeContext";

export default function Projects() {
  const { theme } = useTheme();

  const projects = [
    {
      title: "InterviewBuddy B2C Platform",
      subtitle: "AI-Powered Interview Preparation",
      badge: "15,000+ Users",
      features: [
        "Dynamic Pricing Strategy",
        "Razorpay Payment Gateway",
        "Typesense Full-Text Search",
        "90+ Lighthouse Score",
      ],
      tech: ["React", "Next.js", "Node.js", "PostgreSQL", "Redis", "Razorpay", "Typesense"],
    },
    {
      title: "Collaborative Terminal",
      subtitle: "Real-time Pair Programming",
      badge: "Open Source",
      features: [
        "Real-time WebSocket Sync",
        "node-pty Terminal Emulation",
        "Cloudflare Tunnel Integration",
        "Multi-user Sessions",
      ],
      tech: ["Node.js", "WebSocket", "React", "SSH", "Deploy"],
    },
  ];

  const cardBgClass = theme === "light"
    ? "bg-gray-50 border-gray-200"
    : "bg-darker border-gray-800";

  const textClass = theme === "light" ? "text-gray-900" : "text-gray-100";
  const mutedTextClass = theme === "light" ? "text-gray-600" : "text-gray-400";

  return (
    <section className={`py-16 sm:py-20 px-4 md:px-6 lg:px-8 ${theme === "light" ? "bg-gray-100" : ""}`}>
      <div className="max-w-6xl mx-auto">
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
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-6 sm:p-8 rounded-lg border ${cardBgClass} group overflow-hidden h-full`}
            >
              {/* Gradient overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity -z-10"
                layoutId={`proj-${idx}`}
              />

              <div className="flex justify-between items-start gap-3 mb-4">
                <div className="flex-1">
                  <h3 className={`text-xl sm:text-2xl font-bold ${textClass} mb-1`}>
                    {project.title}
                  </h3>
                  <p className={`text-sm sm:text-base ${mutedTextClass}`}>
                    {project.subtitle}
                  </p>
                </div>
                {project.badge && (
                  <motion.span
                    className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap ${
                      theme === "light"
                        ? "bg-accent/10 text-accent border border-accent/20"
                        : "bg-accent/20 text-accent border border-accent/30"
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {project.badge}
                  </motion.span>
                )}
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {project.features.map((feature, fIdx) => (
                  <motion.div
                    key={fIdx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: fIdx * 0.05 }}
                    viewport={{ once: true }}
                    className={`text-xs sm:text-sm p-3 rounded border ${
                      theme === "light"
                        ? "bg-white border-gray-300 text-gray-700"
                        : "bg-gray-900 border-gray-700 text-gray-300"
                    }`}
                  >
                    ✨ {feature}
                  </motion.div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="space-y-2">
                <p className={`text-xs sm:text-sm font-semibold ${mutedTextClass}`}>
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, tIdx) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: tIdx * 0.02 }}
                      viewport={{ once: true }}
                      className={`text-xs px-2.5 py-1.5 rounded border ${
                        theme === "light"
                          ? "bg-gray-200 text-gray-800 border-gray-300"
                          : "bg-gray-800 text-gray-200 border-gray-700"
                      } hover:text-accent hover:border-accent transition-colors`}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
