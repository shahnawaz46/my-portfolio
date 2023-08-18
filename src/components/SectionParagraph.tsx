import React from 'react';
import type { childrenProps } from '../interfaces/Interface';

const SectionParagraph = ({ children }: childrenProps) => {
  return <p className="text-center text-md sm:text-lg">{children}</p>;
};

export default SectionParagraph;
