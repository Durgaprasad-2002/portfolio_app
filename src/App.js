import Navbar from "./Modules/Navbar";
import Hero from "./Modules/Hero";
import About from "./Modules/About";
import Experience from "./Modules/Experience";
import Projects from "./Modules/Projects";
import Contact from "./Modules/Contact";

function App() {
  return (
    <div className="bg-dark min-h-screen text-gray-200">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-20 md:px-8">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
