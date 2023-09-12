import React from 'react';
import Arrow from '@/public/images/icon-arrow-down.svg';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='w-full h-[calc(100vh-56px)] md:h-[calc(100vh-67px)] overflow-hidden'>
      <div className='absolute top-0 left-0 w-full h-full -z-10 flex flex-col items-center justify-evenly bg-hero'>
        <div className='w-full flex justify-center items-center'>
          <h1 className='w-full font-black font-fraunces text-[40px] md:text-[56px] tracking-[6.2px] md:tracking-[8.5px] text-center text-white-100'>
            WE ARE <br className='md:hidden' /> CREATIVES
          </h1>
        </div>
        <div className='w-full flex justify-center mb-[80px] md:mb-[200px] cursor-pointer'>
          <Image src={Arrow} alt='arrow' height={107} width={30} sizes='100%' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
