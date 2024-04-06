import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Experience />
      </main>
    </>
  );
};

export default App;
