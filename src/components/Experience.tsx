'use client';

import React from 'react';
import { useSectionInView } from '../lib/hooks';
import SectionHeading from './SectionHeading';
import SectionParagraph from './SectionParagraph';

const Experience = () => {
  const { ref } = useSectionInView('Experience');

  return (
    <div
      ref={ref}
      id='experience'
      className='scroll-m-16 relative text-white px-3 sm:px-16 w-full h-fit mt-20'
    >
      <SectionHeading>Experience</SectionHeading>
      <SectionParagraph>
        {' '}
        I love building projects and practice my engineering skills, here&apos;s
        are some of my project that I&apos;ve worked on and you can check all of
        my projects by visiting My{' '}
      </SectionParagraph>

      <div>
        <div></div>
      </div>
    </div>
  );
};

export default Experience;
