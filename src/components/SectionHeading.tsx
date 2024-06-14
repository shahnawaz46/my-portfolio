import React from 'react';
import type { childrenProps } from '../interfaces/Interface';

const SectionHeading = ({ children }: childrenProps) => {
  return (
    <h2 className='text-3xl text-[#3CCF91] text-center mb-2 font-fira font-medium'>
      {children}
    </h2>
  );
};

export default SectionHeading;
