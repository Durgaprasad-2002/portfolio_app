import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../ThemeContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
    setMobileMenuOpen(false);
  };

  const navItems = [
    { name: "about", label: "About" },
    { name: "experience", label: "Experience" },
    { name: "projects", label: "Projects" },
    { name: "contact", label: "Contact" },
  ];

  const bgClass =
    theme === "light"
      ? "bg-white/90 border-gray-200 shadow-gray-200/20"
      : "bg-darker/90 border-accent/10 shadow-accent/5";

  const mutedTextClass =
    theme === "light"
      ? "text-gray-600 hover:text-gray-900"
      : "text-gray-300 hover:text-accent";

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? `${bgClass} backdrop-blur-md border-b shadow-lg`
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-4xl mx-auto px-4 py-3 md:py-4 md:px-6 lg:px-8 flex justify-between items-center">
        <motion.div
          className="text-xl md:text-2xl font-bold bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={() => scrollToSection("about")}
        >
          &lt;DP /&gt;
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 lg:gap-8 items-center">
          {navItems.map((item) => (
            <motion.button
              key={item.name}
              onClick={() => scrollToSection(item.name)}
              className={`text-sm font-medium ${mutedTextClass} transition-colors relative group`}
              whileHover={{ scale: 1.05 }}
            >
              {item.label}
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-accent to-blue-400 rounded-full"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          ))}
        </div>

        {/* Theme Toggle & CTA */}
        <div className="flex items-center gap-3 md:gap-4">
          <motion.button
            onClick={toggleTheme}
            className={`px-3 py-2 rounded border transition-all ${
              theme === "light"
                ? "border-gray-300 text-gray-700 hover:bg-gray-100"
                : "border-gray-600 text-gray-300 hover:bg-gray-800"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </motion.button>

          <motion.a
            href="mailto:prasaddurga2031@gmail.com"
            className="hidden sm:inline-block text-accent text-xs sm:text-sm border border-accent px-3 sm:px-4 py-2 rounded hover:bg-accent hover:text-dark transition-all font-semibold whitespace-nowrap"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch →
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden w-7 h-7 flex flex-col justify-center items-center gap-1.5"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className={`w-5 h-0.5 ${theme === "light" ? "bg-gray-900" : "bg-accent"}`}
              animate={
                mobileMenuOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className={`w-5 h-0.5 ${theme === "light" ? "bg-gray-900" : "bg-accent"}`}
              animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className={`w-5 h-0.5 ${theme === "light" ? "bg-gray-900" : "bg-accent"}`}
              animate={
                mobileMenuOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden ${
          theme === "light"
            ? "bg-white/95 border-gray-200"
            : "bg-darker/95 border-accent/10"
        } backdrop-blur-sm border-b transition-colors`}
        initial={{ height: 0, opacity: 0 }}
        animate={
          mobileMenuOpen
            ? { height: "auto", opacity: 1 }
            : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.3 }}
        style={{ overflow: "hidden" }}
      >
        <div className="px-4 py-3 flex flex-col gap-2">
          {navItems.map((item, i) => (
            <motion.button
              key={item.name}
              onClick={() => scrollToSection(item.name)}
              className={`text-sm font-medium text-left py-2 px-2 rounded transition-colors ${
                theme === "light"
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-gray-300 hover:text-accent"
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={
                mobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
              }
              transition={{ delay: i * 0.05 }}
            >
              {item.label}
            </motion.button>
          ))}
          <motion.a
            href="mailto:prasaddurga2031@gmail.com"
            className="text-accent text-sm border border-accent px-3 py-2 rounded hover:bg-accent hover:text-dark transition-all font-semibold text-center mt-2"
            initial={{ opacity: 0, y: -10 }}
            animate={
              mobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }
            }
            transition={{ delay: navItems.length * 0.05 + 0.1 }}
          >
            Get in Touch
          </motion.a>
        </div>
      </motion.div>
    </motion.nav>
  );
}
