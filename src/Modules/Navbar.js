import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-darker border-b border-gray-800" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto px-4 py-4 md:px-8 flex justify-between items-center">
        <motion.div
          className="text-xl font-bold text-accent"
          whileHover={{ scale: 1.05 }}
        >
          &lt;DP /&gt;
        </motion.div>

        <div className="hidden md:flex gap-8">
          {["about", "experience", "projects", "contact"].map((item) => (
            <motion.button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-sm text-gray-300 hover:text-accent transition-colors capitalize"
              whileHover={{ scale: 1.05 }}
            >
              {item}
            </motion.button>
          ))}
        </div>

        <motion.a
          href="mailto:prasaddurga2031@gmail.com"
          className="text-accent text-sm border border-accent px-4 py-2 rounded hover:bg-accent hover:text-dark transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact
        </motion.a>
      </div>
    </motion.nav>
  );
}
