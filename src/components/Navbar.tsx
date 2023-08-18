'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineClose } from 'react-icons/ai';
import { BiMenuAltRight } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { navbarItems } from '../lib/data';
import { useActiveSectionContext } from '../context/ActiveSectionContext';

const Navbar = () => {
  const { activeLink, setActiveLink } = useActiveSectionContext();
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 z-20 w-full text-white bg-black bg-opacity-30 backdrop-blur-[3px] bottom-8
       flex justify-between items-center h-16 px-3 sm:p-5 md:px-12 lg:px-24`}
    >
      <h1 className="text-3xl">
        {' '}
        &lt;Profo<span className="text-[#3CCF91]">\</span>&gt;{' '}
      </h1>
      <BiMenuAltRight
        className="text-[33px] cursor-pointer sm:hidden"
        onClick={() => setShowNavbar(true)}
      />
      <nav
        className={`fixed sm:static top-0 ${
          showNavbar ? 'right-0' : 'right-[-100%]'
        } transition-all duration-500 bg-white sm:bg-transparent text-black sm:text-white w-60 sm:w-fit h-screen sm:h-fit p-4 flex flex-col sm:flex-row gap-3 sm:gap-7 lg:gap-12 cursor-pointer z-10`}
      >
        <div className="flex justify-end">
          <AiOutlineClose
            className="text-xl cursor-pointer sm:hidden"
            onClick={() => setShowNavbar(false)}
          />
        </div>
        {navbarItems.map((item, index) => (
          <div
            key={index}
            className={`text-xl sm:text-lg ${
              activeLink === item.name &&
              'underline underline-offset-4 decoration-[#3CCF91]'
            } sm:hover:underline sm:hover:decoration-[#3CCF91] sm:hover:underline-offset-4`}
            onClick={() => setActiveLink(item.name)}
          >
            <Link href={item.link}>{item.name}</Link>
          </div>
        ))}
      </nav>
    </motion.div>
  );
};

export default Navbar;
// ${'underline underline-offset-4 decoration-[#3CCF91]'}
