import React from 'react';
import type { childrenProps } from '../interfaces/Interface';

const SectionParagraph = ({ children }: childrenProps) => {
  return (
    <p className='text-center text-lg sm:text-xl font-roboto font-normal'>
      {children}
    </p>
  );
};

export default SectionParagraph;
