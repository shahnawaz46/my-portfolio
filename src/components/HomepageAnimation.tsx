'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const HomepageAnimation = () => {
  const router = useRouter();

  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 text-center text-white px-3 flex gap-3'>
      <motion.div
        initial={{ x: '-100', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 2.5,
          duration: 0.4,
          type: 'spring',
          stiffness: 50,
        }}
        onAnimationComplete={() => router.push('/')}
      >
        <span className='text-2xl sm:text-5xl font-fira font-bold'>&lt;</span>
      </motion.div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.1,
          duration: 0.7,
          type: 'spring',
          stiffness: 100,
        }}
        // onLoad={() => {
        //   console.log('onLoad');
        //   router.prefetch('/home');
        // }}
        // onAnimationStart={async () => {
        //   console.log('onAnimationStart');
        //   router.prefetch('/home');
        // }}
      >
        <span className='text-2xl sm:text-5xl font-fira font-bold'>P</span>
      </motion.div>

      <motion.div
        initial={{ y: '-100', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.5,
          duration: 0.7,
          type: 'spring',
          stiffness: 100,
        }}
      >
        <span className='text-2xl sm:text-5xl font-fira font-bold'>O</span>
      </motion.div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.8,
          duration: 0.7,
          type: 'spring',
          stiffness: 100,
        }}
      >
        <span className='text-2xl sm:text-5xl font-fira font-bold'>R</span>
      </motion.div>

      <motion.div
        initial={{ y: '-100', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 1.0,
          duration: 0.7,
          type: 'spring',
          stiffness: 100,
        }}
      >
        <span className='text-2xl sm:text-5xl font-fira font-bold'>T</span>
      </motion.div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 1.2,
          duration: 0.7,
          type: 'spring',
          stiffness: 100,
        }}
      >
        <span className='text-2xl sm:text-5xl font-fira font-bold'>F</span>
      </motion.div>

      <motion.div
        initial={{ y: '-100', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 1.4,
          duration: 0.7,
          type: 'spring',
          stiffness: 100,
        }}
      >
        <span className='text-2xl sm:text-5xl font-fira font-bold'>O</span>
      </motion.div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 1.6,
          duration: 0.7,
          type: 'spring',
          stiffness: 100,
        }}
      >
        <span className='text-2xl sm:text-5xl font-fira font-bold'>L</span>
      </motion.div>

      <motion.div
        initial={{ y: '-100', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 1.8,
          duration: 0.7,
          type: 'spring',
          stiffness: 100,
        }}
      >
        <span className='text-2xl sm:text-5xl font-fira font-bold'>I</span>
      </motion.div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 2.0,
          duration: 0.7,
          type: 'spring',
          stiffness: 100,
        }}
      >
        <span className='text-2xl sm:text-5xl font-fira font-bold'>O</span>
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 2.5,
          duration: 0.3,
          type: 'spring',
          stiffness: 50,
        }}
      >
        <span className='text-2xl sm:text-5xl font-fira font-bold text-[#3CCF91]'>
          /
        </span>
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 2.5,
          duration: 0.3,
          type: 'spring',
          stiffness: 50,
        }}
      >
        <span className='text-2xl sm:text-5xl font-fira font-bold'>&gt;</span>
      </motion.div>
    </div>
  );
};

export default React.memo(HomepageAnimation);
