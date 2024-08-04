'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { IoIosArrowBack } from 'react-icons/io';

const Email = () => {
  return (
    <div className='relative p-3'>
      <Link href={'/'} className='text-white w-10 flex'>
        <IoIosArrowBack className='text-3xl' />
      </Link>

      <div className='text-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <motion.div
          initial={{ x: 0, y: 0, scale: 0 }}
          animate={{ x: 1, y: 1, scale: 1 }}
          transition={{
            delay: 0.2,
            duration: 0.8,
            type: 'spring',
            stiffness: 50,
          }}
        >
          <div className='flex flex-col items-center gap-3'>
            <p className='text-2xl sm:text-4xl font-roboto font-semibold cursor-pointer z-10'>
              shahnawaz85748@gmail.com
            </p>

            <Link href={'mailto:shahnawaz85748@gmail.com'} target='_blank'>
              <div className='bg-white hover:bg-red-100 flex items-center gap-2 py-1 px-4 rounded-md'>
                <AiOutlineMail className='text-lg cursor-pointer text-red-600' />
                <p className='text-black font-fira font-normal'>Email</p>
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Email;
