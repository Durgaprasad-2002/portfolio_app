import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Durga Prasad Thota
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-8">
          Full-Stack Software Engineer
        </p>
        <p className="text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed">
          Building scalable web applications with React, Node.js, and modern
          cloud infrastructure. Passionate about clean code, performance
          optimization, and developer experience.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <motion.a
            href="mailto:prasaddurga2031@gmail.com"
            className="px-6 py-3 bg-accent text-dark rounded font-medium hover:bg-blue-400 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            📧 Email
          </motion.a>
          <motion.a
            href="https://wa.me/919177943677"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-accent text-accent rounded font-medium hover:bg-accent hover:text-dark transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            💬 WhatsApp
          </motion.a>
          <motion.a
            href="https://github.com/Durgaprasad-2002"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-accent text-accent rounded font-medium hover:bg-accent hover:text-dark transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            GitHub
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/durgaprasad31/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-accent text-accent rounded font-medium hover:bg-accent hover:text-dark transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            LinkedIn
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
