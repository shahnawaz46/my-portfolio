'use client';

import React from 'react';
import Link from 'next/link';
import ProjectCard from './ProjectCard';
import SectionHeading from './SectionHeading';
import SectionParagraph from './SectionParagraph';
import { projectDetails } from '../lib/data';
import { useSectionInView } from '../lib/hooks';

const Project = () => {
  const { ref } = useSectionInView('Projects');

  return (
    <div
      ref={ref}
      id='projects'
      className='scroll-m-16 relative text-white px-3 sm:px-16 w-full h-fit mt-20'
    >
      <SectionHeading>Projects</SectionHeading>
      <SectionParagraph>
        {' '}
        I love building projects and practice my engineering skills, here&apos;s
        are some of my project that I&apos;ve worked on and you can check all of
        my projects by visiting My{' '}
        <Link href={'https://github.com/shahnawaz46'}>Github</Link>.
      </SectionParagraph>

      <div className='grid sm:grid-cols-2 gap-5 md:gap-7 mt-4'>
        {projectDetails.map((info, index) => (
          <React.Fragment key={index}>
            <ProjectCard {...info} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Project;
