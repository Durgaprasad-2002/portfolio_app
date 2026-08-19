import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      name: "InterviewBuddy B2C Platform",
      description:
        "Complete customer-facing platform for booking interview preparation services with 15,000+ users",
      features: [
        "Dynamic pricing engine",
        "Coupon & discount system",
        "Secure checkout with Razorpay integration",
        "Order management & service bundles",
        "SEO optimization (Lighthouse score 90+)",
        "Advanced search with Typesense",
        "PostHog analytics tracking",
      ],
      tech: [
        "Next.js",
        "Angular",
        "NestJS",
        "GraphQL",
        "PostgreSQL",
        "Typesense",
        "Docker",
      ],
      link: "https://interviewbuddy.in",
    },
    {
      name: "Collaborative Terminal (Terminal Expose)",
      description:
        "Open-source Node.js CLI package for secure remote terminal sharing and real-time collaboration",
      features: [
        "Real-time terminal synchronization via WebSockets",
        "node-pty integration for PTY orchestration",
        "Public terminal sharing using Cloudflare Tunnel",
        "Session management and concurrent client support",
        "Authentication & authorization",
        "Published as npm package",
      ],
      tech: [
        "Node.js",
        "WebSockets",
        "node-pty",
        "Express",
        "Cloudflare Tunnel",
      ],
      link: "https://www.npmjs.com/package/terminal-expose",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20 border-t border-gray-800">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>

        {projects.map((project, idx) => (
          <motion.a
            key={idx}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            className="mb-12 p-6 bg-darker rounded border border-gray-800 block group"
            whileHover={{ borderColor: "#3b82f6", y: -4 }}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                  {project.name} →
                </h3>
                <p className="text-gray-400 mt-2">{project.description}</p>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-semibold text-accent mb-2">
                Key Features
              </h4>
              <ul className="grid md:grid-cols-2 gap-2">
                {project.features.map((feature, i) => (
                  <li key={i} className="text-sm text-gray-400">
                    • {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 bg-gray-900 text-gray-300 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
