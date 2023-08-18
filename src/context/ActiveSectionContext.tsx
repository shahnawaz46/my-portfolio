'use client';

import React, { createContext, useContext, useState } from 'react';
import type { childrenProps, activeLinkType } from '../interfaces/Interface';

interface activeSectionContextProps {
  activeLink: activeLinkType;
  setActiveLink: React.Dispatch<React.SetStateAction<activeLinkType>>;
}

const activeSectionContext = createContext<activeSectionContextProps | null>(
  null
);

const ActiveSectionContextProvider = ({ children }: childrenProps) => {
  const [activeLink, setActiveLink] = useState<activeLinkType>('Home');
  return (
    <activeSectionContext.Provider value={{ activeLink, setActiveLink }}>
      {children}
    </activeSectionContext.Provider>
  );
};

export const useActiveSectionContext = () => useContext(activeSectionContext);

export default ActiveSectionContextProvider;
