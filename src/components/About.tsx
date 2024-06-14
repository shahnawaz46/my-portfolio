'use client';

import React from 'react';
import { motion } from 'framer-motion';
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
      id='about'
      className='scroll-m-32 relative text-white px-3 sm:px-16 w-full h-fit flex justify-center'
    >
      <div className='bg-[#2a4942] rounded-md p-6 md:p-8  shadow-xl w-full lg:w-3/4'>
        <h2 className='text-3xl text-[#3CCF91] mb-2 font-fira font-medium'>
          About us
        </h2>
        <p className=' text-[white] text-[17px] sm:text-xl font-roboto font-normal'>
          Hi, This is Mohammad Shahnawaz. A Software Engineer. I am passionate
          about creating web applications and software because it provides me an
          opportunities to learn and solve problems. And I am always excited to
          explore new opportunities, expand my skill set, and take on projects
          that challenge me to grow as a developer.
          <br /> <br />
          As a Junior Developer, I&apos;m eager to learn and collaborate with
          experienced professionals to create efficient and innovative software
          solutions. Im&apos; proficient in languages like
          &quot;JavaScript&quot;, &quot;Reactjs&quot;, &quot;Typescript&quot;,
          &quot;Nodejs&quot; and &quot;Python&quot;.
          <br />
        </p>
      </div>
    </motion.div>
  );
};

export default About;
