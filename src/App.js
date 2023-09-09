import "./App.css";

import React from "react";
import styles from "./style";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="main_container w-full overflow-hidden">
      <About />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
};

export default App;
