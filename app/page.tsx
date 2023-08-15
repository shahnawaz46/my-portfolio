import React from "react";
import Banner from "@/src/components/Banner";
import About from "@/src/components/About";
import Skills from "@/src/components/Skills";
import Project from "@/src/components/Project";
import Contact from "@/src/components/Contact";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Skills />
      <Project />
      <Contact />
    </>
  );
};

export default Home;
