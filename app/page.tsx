import React from 'react';
import ActiveSectionContextProvider from '@/src/context/ActiveSectionContext';
import Navbar from '@/src/components/Navbar';
import Banner from '@/src/components/Banner';
import About from '@/src/components/About';
import Skills from '@/src/components/Skills';
import Project from '@/src/components/Project';
import Contact from '@/src/components/Contact';
import Experience from '@/src/components/Experience';

const Index = () => {
  return (
    <ActiveSectionContextProvider>
      <Navbar />
      <main>
        <Banner />
        <About />
        <Skills />
        {/* <Experience /> */}
        <Project />
        <Contact />
      </main>
    </ActiveSectionContextProvider>
  );
};

export default Index;
