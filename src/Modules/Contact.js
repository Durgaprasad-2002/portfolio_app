import { motion } from "framer-motion";
import { useTheme } from "../ThemeContext";

export default function Contact() {
  const { theme } = useTheme();

  const contacts = [
    {
      label: "Email",
      value: "prasaddurga2031@gmail.com",
      link: "mailto:prasaddurga2031@gmail.com",
      icon: "📧",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      label: "WhatsApp",
      value: "+91 9177943677",
      link: "https://wa.me/919177943677",
      icon: "💬",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      label: "LinkedIn",
      value: "Durga Prasad Thota",
      link: "https://linkedin.com/in/durgaprasad-thota",
      icon: "🔗",
      gradient: "from-blue-600 to-blue-400",
    },
    {
      label: "GitHub",
      value: "@Durgaprasad-2002",
      link: "https://github.com/Durgaprasad-2002",
      icon: "💻",
      gradient: "from-gray-700 to-gray-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className={`py-16 sm:py-20 px-4 md:px-6 lg:px-8 ${
      theme === "light" ? "bg-white" : ""
    }`}>
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
            Get in Touch
          </h2>
          <p className={`text-lg sm:text-xl ${
            theme === "light" ? "text-gray-600" : "text-gray-400"
          }`}>
            Let's connect and build something amazing together
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12"
        >
          {contacts.map((contact, idx) => (
            <motion.a
              key={idx}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className={`group relative overflow-hidden rounded-lg p-6 sm:p-8 transition-all ${
                theme === "light"
                  ? "bg-gray-50 border border-gray-200 hover:border-accent hover:shadow-lg"
                  : "bg-darker border border-gray-800 hover:border-accent hover:shadow-lg hover:shadow-accent/10"
              }`}
            >
              {/* Gradient background overlay */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${contact.gradient} opacity-0 group-hover:opacity-10 transition-opacity -z-10`}
              />

              <div className="text-center">
                <motion.div
                  className="text-4xl sm:text-5xl mb-3 group-hover:scale-110 transition-transform"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {contact.icon}
                </motion.div>
                <h3 className={`text-lg sm:text-xl font-bold mb-2 ${
                  theme === "light"
                    ? "text-gray-900"
                    : "text-gray-100"
                }`}>
                  {contact.label}
                </h3>
                <p className={`text-xs sm:text-sm ${
                  theme === "light"
                    ? "text-gray-600"
                    : "text-gray-400"
                } break-all`}>
                  {contact.value}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Footer Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className={`text-center text-xs sm:text-sm ${
            theme === "light" ? "text-gray-600" : "text-gray-500"
          } space-y-2`}
        >
          <p>
            Crafted with <span className="text-accent">React</span> • <span className="text-accent">Next.js</span> • <span className="text-accent">Tailwind</span> • <span className="text-accent">Framer Motion</span>
          </p>
          <p>
            © 2025 Durga Prasad Thota. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
