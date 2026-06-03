import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Patents from "./components/Patents";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div
      style={{
        background: darkMode ? "#020617" : "#f8fafc",
        color: darkMode ? "white" : "#0f172a",
        transition: "all 0.3s ease",
      }}
    >
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Hero darkMode={darkMode} />

      <About darkMode={darkMode} />

      <Skills darkMode={darkMode} />

      <Projects darkMode={darkMode} />

      <Education darkMode={darkMode} />

      <Certifications darkMode={darkMode} />

      <Patents darkMode={darkMode} />

      <Contact darkMode={darkMode} />

      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;