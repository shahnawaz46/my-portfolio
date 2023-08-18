import React from 'react';
import { navbarItems } from '../lib/data';

export interface childrenProps {
  children: React.ReactNode;
}

export type activeLinkType = (typeof navbarItems)[number]['name'];
