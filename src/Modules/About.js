import { motion } from "framer-motion";

export default function About() {
  const skills = {
    Frontend: [
      "React.js",
      "Next.js",
      "Angular",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    Backend: [
      "Node.js",
      "NestJS",
      "Express.js",
      "GraphQL",
      "REST APIs",
      "Prisma ORM",
    ],
    Databases: ["PostgreSQL", "MongoDB", "Redis", "Typesense"],
    DevOps: ["Docker", "Git", "GitHub", "DigitalOcean", "Cloudflare"],
  };

  return (
    <section id="about" className="py-20 border-t border-gray-800">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8">About Me</h2>

        <div className="mb-12">
          <p className="text-gray-400 leading-relaxed mb-4">
            Full-Stack Software Engineer with 1.3+ years of professional
            experience building scalable web applications using React, Next.js,
            Angular, NestJS, Node.js, GraphQL, PostgreSQL, Prisma, and Docker.
          </p>
          <p className="text-gray-400 leading-relaxed">
            I enjoy designing clean backend architectures, building responsive
            user interfaces, optimizing APIs, and solving complex engineering
            problems. Currently at{" "}
            <span className="text-accent font-semibold">InterviewBuddy</span>,
            where I've helped serve 15,000+ candidates with production-scale
            features.
          </p>
        </div>

        <h3 className="text-xl font-bold mb-6">Tech Stack</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, Tech]) => (
            <motion.div
              key={category}
              className="p-4 bg-darker rounded border border-gray-800"
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="text-accent font-semibold mb-3">{category}</h4>
              <div className="flex flex-wrap gap-2">
                {Tech.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1 bg-gray-900 text-gray-300 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
