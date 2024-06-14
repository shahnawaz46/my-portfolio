'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { RiShareBoxFill } from 'react-icons/ri';
import { AiFillGithub } from 'react-icons/ai';
import { motion, useScroll, useTransform } from 'framer-motion';
import { projectDetails } from '../lib/data';
import { IoMdDownload } from 'react-icons/io';

type projectProps = (typeof projectDetails)[number];

const ProjectCard = ({
  name,
  image,
  gitHubLink,
  websiteLink,
  stack,
  about,
}: projectProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['0 1', '1 1'], // 0 for start and 1 for end
  });
  const scaleOpacityProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  return (
    <motion.div
      ref={scrollRef}
      style={{ scale: scaleOpacityProgress, opacity: scaleOpacityProgress }}
    >
      <div className='rounded-lg bg-[#080808] border border-[#333]'>
        <img src={image} alt='project-image' className='rounded-t-lg' />
        <div className='px-3 pb-3'>
          <div className='pb-3'>
            <div className='flex items-center justify-between mt-2'>
              <h3 className='text-lg md:text-xl font-roboto font-normal'>
                {name}
              </h3>
              <div className='flex items-center gap-2'>
                <Link href={gitHubLink} target='_blank'>
                  <AiFillGithub className='text-xl md:text-2xl' />
                </Link>
                {websiteLink && (
                  <Link href={websiteLink} target='_blank'>
                    <RiShareBoxFill className='text-xl md:text-2xl' />
                  </Link>
                )}

                {gitHubLink.includes('password-manager-app') && (
                  <Link href={'/password-manager.apk'}>
                    <IoMdDownload className='text-xl md:text-2xl' />
                  </Link>
                )}
              </div>
            </div>

            {/* stack */}
            <div className='flex items-center gap-2 flex-wrap mt-2'>
              {stack.map((item) => (
                <p
                  className='bg-white text-black py-1 px-4 rounded-md font-roboto font-normal'
                  key={item.id}
                >
                  {item.name}
                </p>
              ))}
            </div>
          </div>
          <hr style={{ borderColor: '#8F9094' }} />
          <div className='pt-1'>
            <p className='text-[#8F9094] text-md font-roboto font-normal'>
              {about}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
