"use client";

import ArrowDown from '@/assets/icons/arrow-down.svg';
import ArrowUpRight from '@/assets/icons/arrow-up-right.svg';
import { useEffect, useState } from 'react';
import { setTimeout } from 'timers';

export default function SplitButton() {

    const [hover, setHover] = useState(false);

  return (
    <div onMouseEnter={() =>
            setTimeout(() => {
                setHover(true)
            }, 300)
    } onMouseLeave={
        () => 
            setTimeout(() => {
                setHover(false)
            }, 300)
        }>
        { hover === false ? (
        <div className='transition-transform duration-300 ease-in-out transform hover:scale-50'>
            <button className='inline-flex items-center gap-2 bg-white text-gray-900 border border-white rounded-xl px-6 h-12'>
                <span className='animate-wave-hand'>👋</span>
                <span className='font-semibold'>Hover Here for Résumé</span>
            </button>
        </div>
        ) : (
        <div className='flex md:gap-4 sm:gap-2 w-full transition-transform duration-300 ease-in-out transform hover:scale-100 scale-50'>        
        <a href="" target='_blank'>
            <button className='inline-flex items-center gap-2 bg-white text-gray-900 border border-white rounded-xl px-6 h-12'>
                <span className='font-semibold'>Download</span>
                <div className="animate-bounce">
                    <ArrowDown/>    
                </div>
            </button>
        </a>
        <a href="" target='_blank'>
            <button className='inline-flex items-center gap-2 bg-white text-gray-900 border border-white rounded-xl px-6 h-12'>
                <span className='font-semibold'>View</span>
                <div className='animate-side-bounce mb-4'>
                    <ArrowUpRight/>
                </div>
            </button>
        </a>
        </div>)
        }
    </div>
  )
}
