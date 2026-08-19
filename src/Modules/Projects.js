import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      name: "InterviewBuddy B2C Platform",
      description: "Complete customer-facing platform for booking interview preparation services with 15,000+ users",
      features: [
        "Dynamic pricing engine",
        "Coupon & discount system",
        "Secure checkout with Razorpay",
        "Order management & bundles",
        "SEO optimization (90+ Lighthouse)",
        "Typesense search integration",
        "PostHog analytics",
      ],
      tech: ["Next.js", "Angular", "NestJS", "GraphQL", "PostgreSQL", "Typesense", "Docker"],
      link: "https://interviewbuddy.in",
      stats: "15,000+ Users",
    },
    {
      name: "Collaborative Terminal (Terminal Expose)",
      description: "Open-source Node.js CLI for secure remote terminal sharing and real-time collaboration",
      features: [
        "Real-time sync via WebSocket",
        "node-pty orchestration",
        "Cloudflare Tunnel sharing",
        "Session management",
        "Authentication & auth",
        "Published on npm",
      ],
      tech: ["Node.js", "WebSockets", "node-pty", "Express", "Cloudflare"],
      link: "https://www.npmjs.com/package/terminal-expose",
      stats: "Open Source",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="projects" className="py-20 border-t border-gray-800">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        {projects.map((project, idx) => (
          <motion.a
            key={idx}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            className="mb-8 p-8 bg-gradient-to-br from-gray-900 via-darker to-gray-900 rounded border border-gray-800 hover:border-accent/50 transition-all block group relative overflow-hidden"
            whileHover={{ borderColor: "rgba(59, 130, 246, 0.5)", y: -4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors mb-2">
                    {project.name} →
                  </h3>
                  <p className="text-gray-400 text-lg">{project.description}</p>
                </div>
                <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-sm rounded-full border border-accent/50 font-mono text-xs whitespace-nowrap ml-4">
                  {project.stats}
                </span>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-accent mb-3 uppercase tracking-wider">
                  ✨ Highlights
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {project.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      className="text-sm text-gray-400"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.03 }}
                      viewport={{ once: true }}
                    >
                      • {feature}
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <motion.span
                    key={i}
                    className="text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full border border-gray-700 hover:border-accent hover:bg-gray-700 transition-all"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
