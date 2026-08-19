import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../ThemeContext";

export default function Hero() {
  const [showResumeModal, setShowResumeModal] = useState(false);
  const { theme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const modalBgClass =
    theme === "light" ? "bg-white text-gray-900" : "bg-darker text-gray-100";

  return (
    <section className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 text-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
          <div className="inline-block">
            <motion.span
              className={`px-3 sm:px-4 py-2 border border-accent text-accent rounded-full text-xs sm:text-sm font-mono ${
                theme === "light" ? "bg-blue-50" : "bg-blue-950/20"
              }`}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(59, 130, 246, 0.1)",
              }}
            >
              👨‍💻 Full-Stack Developer
            </motion.span>
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 ${
            theme === "light"
              ? "bg-gradient-to-r from-gray-900 to-gray-600"
              : "bg-gradient-to-r from-gray-100 to-gray-400"
          } bg-clip-text text-transparent`}
        >
          Durga Prasad Thota
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className={`text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 font-light ${
            theme === "light" ? "text-gray-600" : "text-gray-400"
          }`}
        >
          Building Production-Scale Applications
        </motion.p>

        <motion.p
          variants={itemVariants}
          className={`${
            theme === "light" ? "text-gray-600" : "text-gray-500"
          } max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed text-sm sm:text-base md:text-lg px-2 sm:px-0`}
        >
          Full-Stack Engineer at InterviewBuddy • 1.3+ years • 15,000+ users
          served
          <br className="hidden sm:block" />
          React • Next.js • Node.js • NestJS • PostgreSQL • Docker
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex gap-3 sm:gap-4 justify-center flex-wrap px-2 sm:px-0 mb-8"
        >
          <motion.a
            href="mailto:prasaddurga2031@gmail.com"
            className="px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-accent to-blue-500 text-dark rounded font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all text-sm sm:text-base"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            📧 Email
          </motion.a>
          <motion.button
            onClick={() => setShowResumeModal(true)}
            className="px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-accent text-accent rounded font-semibold hover:bg-accent/10 transition-all text-sm sm:text-base"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            📄 Resume
          </motion.button>
          <motion.a
            href="https://wa.me/919177943677"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-gray-700 rounded font-semibold hover:border-accent hover:text-accent transition-all text-sm sm:text-base ${
              theme === "light" ? "text-gray-700" : "text-gray-300"
            }`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            💬 WhatsApp
          </motion.a>
          <motion.a
            href="https://github.com/Durgaprasad-2002"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-gray-700 rounded font-semibold hover:border-accent hover:text-accent transition-all text-sm sm:text-base ${
              theme === "light" ? "text-gray-700" : "text-gray-300"
            }`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            GitHub
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div variants={itemVariants} className="flex justify-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`text-xs sm:text-sm ${
              theme === "light" ? "text-gray-500" : "text-gray-600"
            }`}
          >
            ↓ Scroll to explore
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Resume Modal */}
      <motion.div
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${
          showResumeModal ? "bg-black/50 backdrop-blur-sm" : ""
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: showResumeModal ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        onClick={() => setShowResumeModal(false)}
        style={{ pointerEvents: showResumeModal ? "auto" : "none" }}
      >
        <motion.div
          className={`${modalBgClass} rounded-lg shadow-2xl p-6 sm:p-8 max-w-2xl w-full max-h-96 md:max-h-[70vh] overflow-y-auto border border-accent/20`}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={
            showResumeModal
              ? { scale: 1, opacity: 1 }
              : { scale: 0.9, opacity: 0 }
          }
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl sm:text-2xl font-bold">Resume</h3>
            <button
              onClick={() => setShowResumeModal(false)}
              className="text-2xl font-bold text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-left">
            <div>
              <h4 className="font-bold text-accent mb-2">Summary</h4>
              <p
                className={
                  theme === "light" ? "text-gray-700" : "text-gray-300"
                }
              >
                Full-Stack Software Engineer with 1.3+ years of experience
                developing production web applications and scalable backend
                systems using React, Next.js, Node.js, NestJS, PostgreSQL,
                Redis, Docker, and TypeScript.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-accent mb-2">
                Current Role - Associate Software Engineer
              </h4>
              <p
                className={`${theme === "light" ? "text-gray-700" : "text-gray-300"} text-xs sm:text-sm`}
              >
                InterviewBuddy (May 2025 – Present)
              </p>
              <ul
                className={`list-disc pl-5 mt-2 space-y-1 ${theme === "light" ? "text-gray-700" : "text-gray-300"}`}
              >
                <li>
                  Improved Lighthouse scores from 68 to 90+, increasing traffic
                  by 37%
                </li>
                <li>
                  Built AI-driven features supporting 500+ concurrent sessions
                </li>
                <li>Reduced API latency by 25% through optimization</li>
                <li>Implemented high-performance search with Typesense</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "Next.js",
                "Node.js",
                "NestJS",
                "TypeScript",
                "PostgreSQL",
                "Docker",
                "GraphQL",
              ].map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-2 py-1 bg-accent/20 text-accent rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-3 mt-6 flex-wrap">
            <motion.a
              href="https://drive.google.com/file/d/1ze9Muh2gFCj8QJII3h4UrjtfencwyHZ9/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2.5 bg-accent text-dark rounded font-semibold hover:bg-blue-500 transition-colors text-center text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              👁️ View
            </motion.a>
            <motion.a
              href="https://drive.google.com/uc?export=download&id=1ze9Muh2gFCj8QJII3h4UrjtfencwyHZ9"
              className="flex-1 px-4 py-2.5 border-2 border-accent text-accent rounded font-semibold hover:bg-accent/10 transition-colors text-center text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ⬇️ Download
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
