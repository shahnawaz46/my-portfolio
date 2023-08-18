'use client';

import React from 'react';
import ProgrammerImage from '../assets/programmer.png';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useSectionInView } from '../lib/hooks';

const About = () => {
  const { ref } = useSectionInView('About', 0.8);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      id="about"
      className="scroll-m-32 relative text-white px-3 sm:px-16 w-full h-fit"
    >
      <div className="w-48 sm:w-40 md:w-48 h-48 sm:h-40 md:h-48 relative left-1/2 -translate-x-1/2 md:translate-x-0  md:absolute md:-top-12 md:left-16 lg:left-44 z-10">
        <Image
          src={ProgrammerImage.src}
          alt="profile-image"
          fill
          className=" object-cover rounded-[50%] md:rounded-lg  shadow-2xl"
        />
      </div>

      <div className=" bg-[#2a4942] rounded-md pt-28 md:pt-6 pb-6 px-4 md:pl-16 relative -top-24 md:top-0 md:ml-36 lg:ml-64 md:mt-20 shadow-xl">
        <h2 className="text-3xl text-[#3CCF91] mb-2 font-medium">About us</h2>
        <p className=" text-[white] text-md sm:text-lg">
          Hy Myself Mohammad Shahnawaz. A Software Engineer mainly focused on
          Development. I really like to develop web apps and mobile apps.
          <br /> <br />
          Whenever i see some uinique Design then i start code it because during
          the code we learn lots of things about packages, css, logic and etc.
          <br />
          <br />
          Everything i learn about coding like Mern Stack, Python, Django, C++,
          web development and app develpment by My Self.
          <br />
        </p>
      </div>
    </motion.div>
  );
};

export default About;
