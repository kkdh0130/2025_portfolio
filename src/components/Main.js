import React from "react";
import AboutMe from "./AboutMe";
import Stack from "./Stack";
import Project from "./Project";
import Contact from "./Contact";
import Home from "./Home";

const Main = () => {
  return (
    <div className="container max-w-4xl mx-auto px-6 py-12">
      <section id="home" className="flex flex-col md:flex-row justify-between items-center mb-12">
        <Home />
      </section>
      <section id="about" className="mb-16">
        <AboutMe />
      </section>
      <section id="stack" className="mb-16">
        <Stack />
      </section>
      <section id="project" className="mb-16">
        <Project />
      </section>
      <section id="contact" className="mb-16">
        <Contact />
      </section>
    </div>
  );
};

export default Main;
