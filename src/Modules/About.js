import { motion } from "framer-motion";
import { useTheme } from "../ThemeContext";

export default function About() {
  const { theme } = useTheme();

  const stats = [
    { label: "1.3+ Years", value: "Experience" },
    { label: "15,000+", value: "Users Served" },
    { label: "500+", value: "Live Sessions" },
  ];

  const skills = {
    Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    Backend: ["Node.js", "NestJS", "Express", "GraphQL", "REST APIs"],
    Databases: ["PostgreSQL", "Redis", "MongoDB", "Prisma"],
    DevOps: ["Docker", "GitHub Actions", "Vercel", "Cloudflare", "AWS"],
  };

  const cardBgClass = theme === "light"
    ? "bg-gray-50 border-gray-200"
    : "bg-darker border-gray-800";

  const textClass = theme === "light" ? "text-gray-900" : "text-gray-100";

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
            About Me
          </h2>
          <p className={`text-lg sm:text-xl ${theme === "light" ? "text-gray-600" : "text-gray-400"}`}>
            Full-Stack Engineer | Production-Scale Applications
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`text-center p-6 rounded-lg border ${cardBgClass} transition-all hover:scale-105`}
            >
              <div className={`text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-2`}>
                {stat.label}
              </div>
              <div className={`text-sm sm:text-base ${theme === "light" ? "text-gray-600" : "text-gray-400"}`}>
                {stat.value}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills */}
        <div className="space-y-8 sm:space-y-12">
          {Object.entries(skills).map(([category, skillList], categoryIdx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIdx * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className={`text-xl sm:text-2xl font-bold mb-4 ${textClass}`}>
                {category}
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {skillList.map((skill, idx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium border transition-all hover:scale-110 ${
                      theme === "light"
                        ? "bg-gray-200 text-gray-800 border-gray-300 hover:bg-blue-100 hover:text-blue-800"
                        : "bg-gray-800 text-gray-200 border-gray-700 hover:bg-accent/20 hover:text-accent"
                    }`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className={`mt-12 sm:mt-16 p-6 sm:p-8 rounded-lg border ${cardBgClass}`}
        >
          <p className={`text-base sm:text-lg leading-relaxed ${
            theme === "light" ? "text-gray-700" : "text-gray-300"
          }`}>
            I'm a Full-Stack Software Engineer with <strong>1.3+ years</strong> of professional experience building production-scale web applications. I specialize in modern web technologies including React, Next.js, Node.js, NestJS, and PostgreSQL. At <strong>InterviewBuddy</strong>, I've had the opportunity to work on features that serve <strong>15,000+ users</strong>, optimize performance, and implement complex system architectures.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
