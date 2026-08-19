import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      title: "Associate Software Engineer",
      company: "InterviewBuddy",
      duration: "May 2025 – Present",
      highlights: [
        "Developed and maintained production frontend and backend features using React, Next.js, NestJS, and PostgreSQL for 15,000+ candidates",
        "Improved Core Web Vitals compliance and increased Lighthouse scores from 68 to 90+, contributing to 37% traffic increase",
        "Developed AI-driven interview services using NestJS, Microservices, and WebSockets supporting 500+ live sessions",
        "Built modular workflow orchestration system reducing feature onboarding time by 40%",
        "Improved PostgreSQL queries and implemented Redis caching, cutting API latency by 25%",
        "Implemented high-performance search using Typesense enabling low-latency filtering across thousands of records",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "InterviewBuddy",
      duration: "Jan 2025 – Apr 2025",
      highlights: [
        "Built responsive marketing applications using Next.js and Tailwind CSS, improving user engagement by 15%",
        "Developed reusable Angular components and collaborated on Spring Boot backend services",
        "Contributed to production feature releases and debugged critical issues",
        "Gained hands-on experience with Git workflows, code reviews, and Agile development",
      ],
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
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="experience" className="py-20 border-t border-gray-800">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-12">Experience</h2>

        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="mb-12 p-6 bg-darker rounded border border-gray-800"
            whileHover={{ borderColor: "#3b82f6" }}
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-bold">{exp.title}</h3>
                <p className="text-accent">{exp.company}</p>
              </div>
              <span className="text-sm text-gray-500">{exp.duration}</span>
            </div>
            <ul className="space-y-2 mt-4 text-gray-400">
              {exp.highlights.map((highlight, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-accent mt-1">›</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
