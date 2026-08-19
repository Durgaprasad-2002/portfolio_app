import { useEffect } from "react";
import { useTheme } from "./ThemeContext";
import Navbar from "./Modules/Navbar";
import Hero from "./Modules/Hero";
import About from "./Modules/About";
import Experience from "./Modules/Experience";
import Project from "./Modules/Project";
import Contact from "./Modules/Contact";

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = theme;
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div
      className={`${theme === "light" ? "bg-white text-gray-900" : "bg-darker text-gray-200"} min-h-screen transition-colors duration-300`}
    >
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-20 md:px-6 lg:px-8">
        <Hero />
        <About />
        <Experience />
        <Project />
        <Contact />
      </main>
    </div>
  );
}

export default App;
