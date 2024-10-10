"use client";
import StarIcon from '@/assets/icons/star.svg';
import { motion } from 'framer-motion';
import { Fragment } from 'react';

const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Responsive",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Testable",
  "Relialbe",
]

export const TapeSection = () => {
  return (
    <div className='h-0 py-16 lg:py-24 overflow-x-clip'>
      <motion.div 
      initial={{maxHeight:0}}
      whileInView={{maxHeight:100, transition:{delay:0.2, duration:1}}}
      viewport={{once:false, amount:0.2}}
      className='bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1 shadow-lg'>
        <div className='flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
          <div className='flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:30s]'>
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {words.map(word => (
                  <div key={word} className='inline-flex gap-4 items-center'>
                    <span className='text-gray-900 uppercase font-extrabold text-sm'>{word}</span>
                    <StarIcon className="size-6 text-gray-900 -rotate-12" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
