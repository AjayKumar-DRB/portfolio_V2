import memojiImage from '@/assets/images/memoji-computer.png';
import Image from 'next/image';

export default function HeroIcon() {
  return (
    <>
      <div className="container sm:hidden md:block">
        <div className='flex flex-col items-center'>
          <Image src={memojiImage} 
          className='size-[100px]'
          alt='Hero Image' />
          <div className='bg-gray-950 border border-gray-700 px-4 py-1.5 inline-flex items-center gap-3 rounded-lg'>
            <div className='bg-green-500 size-2.5 rounded-full relative'>
              <div className='absolute inset-0 bg-green-500 rounded-full animate-ping-large'></div>
            </div>
            <div className='text-sm font-medium'>
              Available for new projects
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
